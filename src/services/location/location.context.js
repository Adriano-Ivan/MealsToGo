import React, { useState, createContext, useEffect, useMemo, useCallback } from "react";

import { locationRequest, locationTransform } from "./location.service";

export const LocationContext = createContext();

export function LocationContextProvider({ children }) {
  const [keyword, setKeyword] = useState("san francisco");
  const [location, setLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSearch = useCallback((searchKeyword = "Antwerp") => {
    setIsLoading(true);
    setKeyword(searchKeyword);
    locationRequest(searchKeyword.toLowerCase())
      .then(locationTransform)
      .then((result) => {
        setIsLoading(false);
        setLocation(result);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  }, []);

  useEffect(() => {
    onSearch();
  }, []);

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
