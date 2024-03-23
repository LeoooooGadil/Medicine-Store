import React, { useState, useRef, useCallback } from "react";
import { SafeAreaView, Keyboard, View, ScrollView } from "react-native";
import tw from "twrnc";
import Colors from "../constants/Colors";

import {
  HomeScreenHeader,
  WelcomeBanner,
  ExploreOurProducts,
  ExploreOurCategories,
} from "../components/HomeScreen";
import { Seperator } from "../components";
import BottomSheetModal from "../components/BottomSheetModal";
import { useSearch } from "../context/searchContext";

export default function HomeTabScreen({ navigation }) {
  const { startSearch } = useSearch();

  const [CurrentItem, setCurrentItem] = useState(null);
  const [IsBottomSheetOpen, SetIsBottomSheetOpen] = useState(false); // [1]
  const bottomSheetRef = useRef(null);

  const SetCurrentItem = useCallback((item) => {
    setCurrentItem(item);
  });

  const openBottomSheet = useCallback(() => {
    SetIsBottomSheetOpen(true);
    bottomSheetRef.current?.snapToIndex(0); // Open the bottom sheet
    Keyboard.dismiss();
  }, []);

  const closeBottomSheet = useCallback(() => {
    SetIsBottomSheetOpen(false);
    bottomSheetRef.current?.close();
  });

  return (
    <SafeAreaView style={tw`flex-1 bg-[${Colors.BrightGray}]`}>
      <View style={tw`h-full`}>
        <HomeScreenHeader
          GoToSearch={() => {
            startSearch();
            navigation.navigate("Search");
          }}
          GoToCart={() => navigation.navigate("Cart")}
        />
        <ScrollView style={tw`h-full`}>
          <WelcomeBanner />
          <View style={tw`px-8`}>
            <Seperator />
          </View>
          <ExploreOurProducts
            GoToSearch={() => navigation.navigate("Search")}
            OpenBottomSheet={openBottomSheet}
            SetCurrentItem={SetCurrentItem}
          />
          <ExploreOurCategories
            GoToSearch={() => navigation.navigate("Search")}
          />
          <View style={tw`w-full h-28`}></View>
        </ScrollView>
      </View>
      <BottomSheetModal
        bottomSheetRef={bottomSheetRef}
        IsBottomSheetOpen={IsBottomSheetOpen}
        CloseBottomSheet={closeBottomSheet}
        SetIsBottomSheetOpen={SetIsBottomSheetOpen}
        CurrentItem={CurrentItem}
      />
    </SafeAreaView>
  );
}
