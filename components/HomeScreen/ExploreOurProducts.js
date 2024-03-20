import { useState, useEffect } from "react";
import { View, TouchableOpacity, FlatList, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import tw from "twrnc";
import Colors from "../../constants/Colors";

import Products from "../../constants/Products";
import ItemContainer from "../ItemContainer";

export default function ExploreOurProducts({
  GoToSearch,
  OpenBottomSheet,
  SetCurrentItem,
}) {
  return (
    <View style={tw`pb-2 pt-2`}>
      <View style={tw`flex-row justify-between items-center w-full px-8`}>
        <Text style={tw`text-2xl font-bold`}>Explore Our Products</Text>
        <TouchableOpacity
          style={tw`flex-row gap-1 items-center`}
          onPress={GoToSearch}
        >
          <Text style={tw`text-[${Colors.SunsetOrange}]`}>View All</Text>
          <Ionicons
            name="chevron-forward-outline"
            color={Colors.SunsetOrange}
            size={15}
          />
        </TouchableOpacity>
      </View>
      <FeaturedProducts
        OpenBottomSheet={OpenBottomSheet}
        SetCurrentItem={SetCurrentItem}
      />
    </View>
  );
}

function FeaturedProducts({ OpenBottomSheet, SetCurrentItem }) {
  const [FeaturedProductsList, setFeaturedProductsList] = useState([]);

  useEffect(() => {
    let _Products = [];
    _Products = Products;

    _Products = _Products.sort(() => Math.random() - 0.5);
    _Products = _Products.slice(0, 5);
    setFeaturedProductsList(_Products);
  }, []);

  return (
    <View style={tw`py-3`}>
      <FlatList
        data={FeaturedProductsList}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => {
          const FeaturedLocation =
            index === 0 ? 0 : index === FeaturedProductsList.length - 1 ? 2 : 1;
          return (
            <ItemContainer
              OpenBottomSheet={OpenBottomSheet}
              SetCurrentItem={SetCurrentItem}
              item={item}
              isFeatured
              FeaturedLocation={FeaturedLocation}
            />
          );
        }}
      />
    </View>
  );
}
