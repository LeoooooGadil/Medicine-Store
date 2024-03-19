import { useState } from "react";
import Fuse from "fuse.js";

const useFuzzySearch = (data, options) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const fuse = new Fuse(data, options);

  const search = (term) => {
    setSearchTerm(term);
  };

  const _searchResults = fuse.search(searchTerm);

  const sortedData = {
    SearchResult: _searchResults,
    // the searchResults array contains an object named "item" which contains the original data
    SearchRemaining: _searchResults.length > 0 ? data.filter((item) => !_searchResults.includes(item)) : data,
    SearchTerm: searchTerm,
    SearchResultsCount: _searchResults.length,
  };

  return [sortedData, search];
};

export default useFuzzySearch;
