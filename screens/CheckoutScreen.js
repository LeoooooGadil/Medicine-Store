import React, { useState, useRef } from "react";
import { View, ActivityIndicator, ScrollView } from "react-native";
import tw from "twrnc";
import Colors from "../constants/Colors";
import { useCheckout } from "../context/checkoutContext";
import {
  CheckoutControls,
  CheckoutScreenHeader,
  Summary,
  LocationPicker,
  BottomSheetModal,
  PaymentMethodPicker,
  OrderConfirmationHero,
} from "../components/CheckoutScreen";
import SafeAreaView from "react-native-safe-area-view";
import { UploadPrescriptionWindow } from "../components/CheckoutScreen/UploadPrescriptionScreen";
import { useCart } from "../context/cartContext";
import DeliveryDate from "../components/CheckoutScreen/OrderSummaryScreen/DeliveryDate";

export default function CheckoutScreen({ navigation }) {
  const { cartItems } = useCart();
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const bottomSheetModalRef = useRef(null);
  const {
    isLoading,
    currentStep,
    prevStep,
    orderSummary,
    isPrescriptionRequired,
  } = useCheckout();

  const openBottomSheet = () => {
    setIsBottomSheetOpen(true);
    bottomSheetModalRef.current?.snapToIndex(0);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <ScrollView style={tw`h-full`}>
            <LocationPicker openLocationPicker={openBottomSheet} />
            <Summary cartItems={cartItems} />
            <DeliveryDate orderSummary={orderSummary} />
          </ScrollView>
        );
      case 1:
        return (
          <View style={tw`flex-1 overflow-hidden rounded-xl p-3`}>
            <UploadPrescriptionWindow />
          </View>
        );
      case 2:
        return (
          <ScrollView style={tw`h-full`}>
            <PaymentMethodPicker />
          </ScrollView>
        );
      case 3:
        return (
          <ScrollView style={tw`h-full`}>
            <OrderConfirmationHero navigation={navigation} />
          </ScrollView>
        );
      default:
        return <ScrollView style={tw`h-full`}></ScrollView>;
    }
  };

  const goBack = () => {
    if (currentStep === 0) {
      navigation.goBack();
    } else {
      prevStep();
    }
  };

  if (isLoading) {
    return (
      <View
        style={tw`bg-[${Colors.BrightGray}] justify-center items-center flex-1`}
      >
        <ActivityIndicator size="large" color={Colors.AlizarinCrimson} />
      </View>
    );
  }

  return (
    <SafeAreaView
      style={tw`flex-col gap-2 bg-[${Colors.BrightGray}] flex-1`}
      forceInset={{ top: "always" }}
    >
      <CheckoutScreenHeader GoBack={goBack} />
      {renderStep()}
      {currentStep !== 1 && <CheckoutControls navigation={navigation} />}
      <BottomSheetModal
        bottomSheetRef={bottomSheetModalRef}
        SetIsBottomSheetOpen={setIsBottomSheetOpen}
      />
    </SafeAreaView>
  );
}
