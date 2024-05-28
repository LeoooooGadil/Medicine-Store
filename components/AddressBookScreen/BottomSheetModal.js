import React, { useCallback, useMemo } from "react";
import BottomSheet, { BottomSheetView, BottomSheetBackdrop } from "@gorhom/bottom-sheet";
import tw from "twrnc";
import Colors from "../../constants/Colors";

export default function BottomSheetModal({
	bottomSheetRef,
	SetIsBottomSheetOpen,
	Component,
	_snapPoints = ["50%"],
	HandMeTheData = {},
}) {
	const snapPoints = useMemo(() => _snapPoints, [_snapPoints]);

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
			<BottomSheetView style={tw`bg-[${Colors.BrightGray}] flex-1`}>
				{/* check if component is a component or a function and act accordingly */}
				<Component HandMeTheData={HandMeTheData} />
			</BottomSheetView>
		</BottomSheet>
	)
} 