import React, { createContext, useContext, useState } from "react";

const searchContext = createContext();

export const useSearch = () => useContext(searchContext);

export const SearchProvider = ({ children }) => {
	const [startSearching, setStartSearching] = useState(false);

	const startSearch = () => {
		setStartSearching(true);
	}

	const stopSearch = () => {
		setStartSearching(false);
	}

	return (
		<searchContext.Provider value={{ startSearching, startSearch, stopSearch }}>
			{children}
		</searchContext.Provider>
	)
}