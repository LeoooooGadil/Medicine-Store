import React from "react";
import { View } from "react-native";
import tw from "twrnc";

import Products from "../../constants/Products";
import ItemContainer from "../ItemContainer";

export default function SearchProductsList({ AvailableProducts }) {
  const _products = AvailableProducts || Products;

  return (
    <View style={tw`flex-row flex-wrap justify-center`}>
      {_products.map((item, index) => (
        <ItemContainer
          key={item.id}
          item={item}
          isList
          ListLocation={index % 2 == 0 ? 0 : 1}
        />
      ))}
    </View>
  );
}
