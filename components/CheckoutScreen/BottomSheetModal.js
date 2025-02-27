import React, { useCallback, useMemo } from "react";
import BottomSheet, { BottomSheetView, BottomSheetBackdrop } from "@gorhom/bottom-sheet";
import PickerModal from "./OrderSummaryScreen/PickerModal";
import tw from "twrnc";
import Colors from "../../constants/Colors";

export default function BottomSheetModal({
	bottomSheetRef,
	SetIsBottomSheetOpen,
}) {
	const snapPoints = useMemo(() => ["40%"]);

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
	)

	return (
		<BottomSheet
			ref={bottomSheetRef}
			snapPoints={snapPoints}
			onChange={handleSheetChanges}
			backdropComponent={renderBackdrop}
			index={-1}
			enablePanDownToClose
			handleStyle={tw`bg-[${Colors.BrightGray}] rounded-t-xl`}
		>
			<BottomSheetView style={tw`bg-[${Colors.BrightGray}]`}>
				<PickerModal />
			</BottomSheetView>
		</BottomSheet>
	)
} 