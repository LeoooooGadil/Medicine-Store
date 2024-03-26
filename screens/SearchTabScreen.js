import React, { useRef, useCallback, useState, useEffect } from "react";
import { Keyboard, Text } from "react-native";
import tw from "twrnc";
import Colors from "../constants/Colors";
import { SearchScreenWindow, ItemCard } from "../components/SearchScreen";
import BottomSheetModal from "../components/BottomSheetModal";
import { useFocusEffect } from "@react-navigation/native";
import { useSearch } from "../context/searchContext";
import SafeAreaView from 'react-native-safe-area-view';

export default function SearchTabScreen({ navigation }) {
  const { startSearching, stopSearch } = useSearch();

  const [isSearchWindowOpen, setIsSearchWindowOpen] = useState(startSearching);
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

  useEffect(() => {
    if (!isSearchWindowOpen) {
      stopSearch();
    }
  }, [isSearchWindowOpen]);

  useFocusEffect(
    useCallback(() => {
      if (startSearching) {
        setIsSearchWindowOpen(true);
      }
    }, [startSearching])
  );

  return (
    <SafeAreaView style={tw`flex-1 bg-[${Colors.White}]`} forceInset={{ top: 'always' }}>
      <SearchScreenWindow
        navigation={navigation}
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
