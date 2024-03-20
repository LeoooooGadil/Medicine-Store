import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import tw from "twrnc";

import Colors from "../../constants/Colors";
import ItemContainer from "../ItemContainer";

export default function SearchProductsList({
  SearchedProducts,
  AvailableProducts,
  ShowResultOnly,
  OpenBottomSheet,
  SetCurrentItem,
}) {
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    if (SearchedProducts) {
      // SearchedProducts.SearchResult contains the search results
      // if empty, it means no results were found
      // SearchedProducts.SearchRemaining contains the remaining products
      // show the remaining products if no results were found
      // only if ShowResultOnly is false

      if (SearchedProducts.SearchResultsCount == 0 && !ShowResultOnly) {
        setProducts(SearchedProducts.SearchRemaining);
      } else {
        setProducts(SearchedProducts.SearchResult);
      }
    }
  }, [SearchedProducts]);

  useEffect(() => {
    if(!ShowResultOnly){
      setProducts(AvailableProducts)
    } else {
      setProducts([])
    }
  }, []);

  if(Products.length == 0 && SearchedProducts?.SearchTerm.length > 0){
    return (
      <View style={tw`px-8 py-2 items-center justify-center w-full h-50`}>
        <Text style={tw`text-lg font-bold opacity-25`}>No results found</Text>
      </View>
    )
  }

  return (
    <View>
      {SearchedProducts?.SearchTerm.length > 0 && (
        <View style={tw`px-8 py-2 flex-row justify-between`}>
          <View style={tw`flex-row gap-1`}>
            <Text style={tw`text-lg`}>searched for:</Text>
            <Text style={tw`text-lg font-bold`}>
              {SearchedProducts.SearchTerm}
            </Text>
          </View>
          <View style={tw`flex-row gap-1`}>
            <Text style={tw`text-lg`}>found</Text>
            <Text style={tw`text-lg font-bold`}>
              {SearchedProducts.SearchResultsCount}
            </Text>
          </View>
        </View>
      )}
      <View style={tw`flex-row flex-wrap justify-center`}>
        {Products &&
          Products.map((item, index) => {
            let _item = item.item ? item.item : item;
            return (
              <ItemContainer
                key={_item.id}
                OpenBottomSheet={OpenBottomSheet}
                SetCurrentItem={SetCurrentItem}
                item={_item}
                isList
                ListLocation={index % 2 == 0 ? 0 : 1}
              />
            );
          })}
      </View>
    </View>
  );
}
