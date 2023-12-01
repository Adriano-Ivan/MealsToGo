/* eslint-disable object-curly-newline */
import React, { useEffect, useState, createContext, useMemo, useCallback } from "react";

import { locationRequest, locationTransform } from "./location.service";

export const LocationContext = createContext();

export function LocationContextProvider({ children }) {
  const [keyword, setKeyword] = useState("San Francisco");
  const [location, setLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSearch = useCallback((searchKeyword) => {
    setIsLoading(true);
    setKeyword(searchKeyword);
  }, []);

  useEffect(() => {
    console.log(keyword);
    if (!keyword.length) {
      // don't do anything
      return;
    }
    locationRequest(keyword.toLowerCase())
      .then(locationTransform)
      .then((result) => {
        setIsLoading(false);
        setLocation(result);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  }, [keyword]);

  const contextValue = useMemo(
    () => ({
      isLoading,
      error,
      location,
      search: onSearch,
      keyword,
    }),
    [error, isLoading, location, keyword, onSearch],
  );

  return <LocationContext.Provider value={contextValue}>{children}</LocationContext.Provider>;
}
