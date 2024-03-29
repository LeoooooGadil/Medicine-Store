import React, { useCallback, useMemo } from "react";
import BottomSheet, { BottomSheetView, BottomSheetBackdrop } from "@gorhom/bottom-sheet";
import { ItemCard } from "./SearchScreen";
import Colors from "../constants/Colors";
import tw from "twrnc";

export default function BottomSheetModal({
  bottomSheetRef,
  CloseBottomSheet,
  IsBottomSheetOpen,
  SetIsBottomSheetOpen,
  CurrentItem,
}) {
  
  const snapPoints = useMemo(() => ["60%", "90%"], []);

  const handleSheetChanges = useCallback((index) => {
    if (index == -1) {
      SetIsBottomSheetOpen(false);
    }
  });

  const renderBackdrop = useCallback(
    props => (
      <BottomSheetBackdrop
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        {...props}
      />
    ),
    []
  );

  return (
    <BottomSheet
      ref={bottomSheetRef}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}
      backdropComponent={renderBackdrop}
      index={-1}
      enablePanDownToClose
      style={tw`bg-[${Colors.BrightGray}] rounded-t-xl`}
    >
      <BottomSheetView>
        <ItemCard item={CurrentItem} CloseBottomSheet={CloseBottomSheet} IsBottomSheetOpen={IsBottomSheetOpen} />
      </BottomSheetView>
    </BottomSheet>
  );
}
