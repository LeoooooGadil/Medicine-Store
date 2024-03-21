import React, { useState, useEffect } from "react";
import { ScrollView, View } from "react-native";
import tw from "twrnc";

import SearchWindow from "./SearchWindow";
import ResultWindow from "./ResultWindow";
import SearchScreenHeader from "./SearchScreenHeader";
import SearchProductsList from "./SearchProductsList";

import Products from "../../constants/Products";
import useFuzzySearch from "../../hooks/useFuzzySearch";

export default function SearchScreenWindow({
  navigation,
  OpenBottomSheet,
  CloseBottomSheet,
  IsSearchWindowOpen,
  SetIsSearchWindowOpen,
  SetCurrentItem,
}) {

  const [searchKeyword, setSearchKeyword] = useState("");

  const [SearchResult, search] = useFuzzySearch(Products, {
    keys: ["name", "dosage", "brandName", "category", "manufacturer"],
    threshold: 0,
  });

  const ToggleSearchWindow = () => {
    CloseBottomSheet();
    SetIsSearchWindowOpen(!IsSearchWindowOpen);
  };

  const SearchProducts = (text) => {
    search(text);
  };

  useEffect(() => {
    SearchProducts(searchKeyword);
  }, [searchKeyword]);

  return (
    <>
      {!IsSearchWindowOpen && (
        <SearchScreenHeader GoToCart={() => navigation.navigate("Cart")} />
      )}
      <ScrollView keyboardShouldPersistTaps="handled" style={tw`h-full`}>
        {IsSearchWindowOpen ? (
          <>
            <SearchWindow
              ToggleSearchWindow={ToggleSearchWindow}
              SetSearch={(text) => setSearchKeyword(text)}
            />
            <SearchProductsList
              SearchedProducts={SearchResult}
              OpenBottomSheet={OpenBottomSheet}
              SetCurrentItem={SetCurrentItem}
              ShowResultOnly
            />
          </>
        ) : (
          <>
            <ResultWindow
              ToggleSearchWindow={ToggleSearchWindow}
              SetSearch={setSearchKeyword}
              SearchedResult={SearchResult}
            />
            <SearchProductsList
              OpenBottomSheet={OpenBottomSheet}
              SearchedProducts={SearchResult}
              SetCurrentItem={SetCurrentItem}
              AvailableProducts={Products}
            />
            <View style={tw`w-full h-28`}></View>
          </>
        )}
      </ScrollView>
    </>
  );
}
