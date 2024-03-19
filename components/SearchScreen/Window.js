import React, { useState, useEffect } from "react";
import { ScrollView, View } from "react-native";
import tw from "twrnc";

import SearchWindow from "./SearchWindow";
import ResultWindow from "./ResultWindow";
import SearchScreenHeader from "./SearchScreenHeader";
import SearchProductsList from "./SearchProductsList";

import Products from "../../constants/Products";
import useFuzzySearch from "../../hooks/useFuzzySearch";

export default function SearchScreenWindow({ GoToCart }) {
  const [isSearchWindowOpen, setIsSearchWindowOpen] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState("");

  const [SearchResult, search] = useFuzzySearch(Products, {
    keys: ["name", "dosage", "brandName", "category", "manufacturer"],
    threshold: 0,
  });

  const ToggleSearchWindow = () => {
    setIsSearchWindowOpen(!isSearchWindowOpen);
  };

  const SearchProducts = (text) => {
    search(text);
  };

  useEffect(() => {
    SearchProducts(searchKeyword);
  }, [searchKeyword]);

  return (
    <>
      {!isSearchWindowOpen && (
        <SearchScreenHeader GoToCart={() => navigation.navigate("Cart")} />
      )}
      <ScrollView keyboardShouldPersistTaps="handled" style={tw`h-full`}>
        {isSearchWindowOpen ? (
          <>
            <SearchWindow
              ToggleSearchWindow={ToggleSearchWindow}
              SetSearch={(text) => setSearchKeyword(text)}
              SearchResult={SearchResult}
              AvailableProducts={Products}
            />
            <SearchProductsList SearchedProducts={SearchResult} ShowResultOnly />
          </>
        ) : (
          <>
            <ResultWindow
              ToggleSearchWindow={ToggleSearchWindow}
              SearchedResult={SearchResult}
            />
            <SearchProductsList SearchedProducts={SearchResult} AvailableProducts={Products} />
            <View style={tw`w-full h-28`}></View>
          </>
        )}
      </ScrollView>
    </>
  );
}
