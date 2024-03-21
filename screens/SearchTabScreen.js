import React, { useRef, useCallback, useState } from "react";
import { SafeAreaView, Keyboard, Text } from "react-native";
import tw from "twrnc";
import { SearchScreenWindow, ItemCard } from "../components/SearchScreen";
import BottomSheetModal from "../components/BottomSheetModal";

export default function SearchTabScreen({ navigation }) {
  const [isSearchWindowOpen, setIsSearchWindowOpen] = useState(false);
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const [CurrentItem, setCurrentItem] = useState(null);
  const bottomSheetRef = useRef(null);

  const SetCurrentItem = useCallback((item) => {
    setCurrentItem(item);
  });

  const openBottomSheet = useCallback(() => {
    setIsBottomSheetOpen(true);
    bottomSheetRef.current?.snapToIndex(0); // Open the bottom sheet
    Keyboard.dismiss();
  }, [isSearchWindowOpen]);

  const closeBottomSheet = useCallback(() => {
    setIsBottomSheetOpen(false);
    bottomSheetRef.current?.close();
  });

  return (
    <SafeAreaView style={tw`flex-1`}>
      <SearchScreenWindow
        OpenBottomSheet={openBottomSheet}
        CloseBottomSheet={closeBottomSheet}
        IsSearchWindowOpen={isSearchWindowOpen}
        SetIsSearchWindowOpen={setIsSearchWindowOpen}
        SetCurrentItem={SetCurrentItem}
      />
      <BottomSheetModal
        bottomSheetRef={bottomSheetRef}
        CloseBottomSheet={closeBottomSheet}
        IsBottomSheetOpen={isBottomSheetOpen}
        SetIsBottomSheetOpen={setIsBottomSheetOpen} // Corrected prop name
        CurrentItem={CurrentItem}
      />
    </SafeAreaView>
  );
}
