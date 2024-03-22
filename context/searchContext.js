import React, { createContext, useContext, useState } from "react";

const searchContext = createContext();

export const useSearch = () => useContext(searchContext);

export const SearchProvider = ({ children }) => {
  const [startSearching, setStartSearching] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const startSearch = () => {
    setStartSearching(true);
  };

  const stopSearch = () => {
    setStartSearching(false);
  };

  const setSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <searchContext.Provider
      value={{
        startSearching,
        startSearch,
        stopSearch,
        searchQuery,
        setSearch,
      }}
    >
      {children}
    </searchContext.Provider>
  );
};
