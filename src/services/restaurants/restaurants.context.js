import React, { useState, createContext, useEffect, useMemo } from "react";

import { restaurantsRequest, restaurantsTransform } from "./restaurants.service";

export const RestaurantsContext = createContext();

export function RestaurantsContextProvider({ children }) {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const retrieveRestaurants = () => {
    setLoading(true);
    setTimeout(() => {
      restaurantsRequest()
        .then(restaurantsTransform)
        .then((restaurantsRes) => {
          setLoading(false);
          setRestaurants(restaurantsRes);
        })
        .catch((err) => {
          setLoading(false);
          setError(err);
        });
    }, 2000);
  };

  useEffect(() => {
    retrieveRestaurants();
  }, []);

  const contextValue = useMemo(
    () => ({ restaurants, isLoading, error }),
    [error, isLoading, restaurants],
  );

  return <RestaurantsContext.Provider value={contextValue}>{children}</RestaurantsContext.Provider>;
}
