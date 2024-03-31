import React, { useState, useEffect, useCallback } from "react";
import { ScrollView, View } from "react-native";
import tw from "twrnc";
import Colors from "../../constants/Colors";

import SearchWindow from "./SearchWindow";
import ResultWindow from "./ResultWindow";
import SearchScreenHeader from "./SearchScreenHeader";
import SearchProductsList from "./SearchProductsList";

import Products from "../../constants/Products";
import useFuzzySearch from "../../hooks/useFuzzySearch";
import { useSearch } from "../../context/searchContext";
import { useFocusEffect } from "@react-navigation/native";
import { BoldSeperator } from "../Seperator";

export default function SearchScreenWindow({
  navigation,
  OpenBottomSheet,
  CloseBottomSheet,
  IsSearchWindowOpen,
  SetIsSearchWindowOpen,
  SetCurrentItem,
}) {
  const { searchQuery, setSearch } = useSearch();

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
    SearchProducts(searchQuery);
  }, [searchQuery]);

  useFocusEffect(
    useCallback(() => {
      if (searchQuery !== "") {
        SearchProducts(searchQuery);
      }
    }, [searchQuery])
  );

  return (
    <>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        style={tw`h-full`}
        stickyHeaderIndices={[0]}
      >
        {!IsSearchWindowOpen && (
          <>
            <View>
              <SearchScreenHeader
                GoToCart={() => navigation.navigate("Cart")}
              />
            </View>
          </>
        )}

        {IsSearchWindowOpen ? (
          <>
            <SearchWindow
              ToggleSearchWindow={ToggleSearchWindow}
              SetSearch={(text) => setSearch(text)}
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
              SetSearch={setSearch}
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
