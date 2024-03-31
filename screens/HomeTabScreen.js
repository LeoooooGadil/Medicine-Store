import React, { useState, useEffect, useRef, useCallback } from "react";
import { Keyboard, View, ScrollView, StatusBar } from "react-native";
import tw from "twrnc";
import Colors from "../constants/Colors";
import SafeAreaView from "react-native-safe-area-view";

import {
  HomeScreenHeader,
  WelcomeBanner,
  ExploreOurProducts,
  ExploreOurCategories,
  SearchBar,
} from "../components/HomeScreen";
import { Seperator } from "../components";
import BottomSheetModal from "../components/BottomSheetModal";
import { useSearch } from "../context/searchContext";
import { BoldSeperator } from "../components/Seperator";

export default function HomeTabScreen({ navigation }) {
  const statusBarStyle = "dark-content";
  const statusBarColor = Colors.BrightGray;

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
    <SafeAreaView
      style={tw`flex-1 bg-[${Colors.BrightGray}]`}
      forceInset={{ top: "always" }}
    >
      <StatusBar style={statusBarStyle} backgroundColor={statusBarColor} />
      <View style={tw`h-full`}>
        <ScrollView stickyHeaderIndices={[0]} style={tw`h-full`}>
          <HomeScreenHeader GoToCart={() => navigation.navigate("Cart")} />
          <SearchBar
            GoToSearch={() => {
              startSearch();
              navigation.navigate("Search");
            }}
          />
          <WelcomeBanner />
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
