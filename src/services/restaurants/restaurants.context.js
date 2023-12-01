/* eslint-disable object-curly-newline */
import React, { useState, createContext, useEffect, useMemo, useContext } from "react";

import { restaurantsRequest, restaurantsTransform } from "./restaurants.service";
import { LocationContext } from "../location/location.context";

export const RestaurantsContext = createContext();

export function RestaurantsContextProvider({ children }) {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { location } = useContext(LocationContext);

  const retrieveRestaurants = (locationParam) => {
    setLoading(true);
    setRestaurants([]);
    setTimeout(() => {
      restaurantsRequest(locationParam)
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
    if (location) {
      const locationString = `${location.lat},${location.lng}`;
      console.log(locationString);
      retrieveRestaurants(locationString);
    }
  }, [location]);

  const contextValue = useMemo(
    () => ({ restaurants, isLoading, error }),
    [error, isLoading, restaurants],
  );

  return <RestaurantsContext.Provider value={contextValue}>{children}</RestaurantsContext.Provider>;
}
