import React, { useState, useRef, useCallback } from "react";
import { SafeAreaView, Keyboard, View } from "react-native";
import tw from "twrnc";

import {
  HomeScreenHeader,
  WelcomeBanner,
  ExploreOurProducts,
} from "../components/HomeScreen";
import { Seperator } from "../components";
import BottomSheetModal from "../components/BottomSheetModal";
export default function HomeTabScreen({ route, navigation }) {
  const [CurrentItem, setCurrentItem] = useState(null);
  const bottomSheetRef = useRef(null);

  const SetCurrentItem = useCallback((item) => {
    setCurrentItem(item);
  });

  const openBottomSheet = useCallback(() => {
    bottomSheetRef.current?.snapToIndex(0); // Open the bottom sheet
    Keyboard.dismiss();
  }, []);

  return (
    <SafeAreaView style={tw`flex-1`}>
      <View style={`gap-2 `}>
        <HomeScreenHeader
          GoToSearch={() =>
            navigation.navigate("Search", { startSearch: true })
          }
          GoToCart={() => navigation.navigate("Cart")}
        />
        <WelcomeBanner />
        <Seperator />
        <ExploreOurProducts
          GoToSearch={() => navigation.navigate("Search")}
          OpenBottomSheet={openBottomSheet}
          SetCurrentItem={SetCurrentItem}
        />
      </View>
      <BottomSheetModal
        bottomSheetRef={bottomSheetRef}
        SetIsBottomSheetOpen={() => {}}
        CurrentItem={CurrentItem}
      />
    </SafeAreaView>
  );
}
