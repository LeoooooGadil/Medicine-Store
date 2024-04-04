import { View, Text, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import { useOrders } from "../context/ordersContext";
import { useFocusEffect } from "@react-navigation/native";
import {
  Header,
  OrderStatusText,
  OrderData,
  PrescriptionImage,
} from "../components/ViewOrderScreen";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import Colors from "../constants/Colors";
import Summary from "../components/CheckoutScreen/OrderSummaryScreen/Summary";
import { OrdersPrescriptionValidationStatus } from "../constants/OrdersValidationStatus";

export default function ViewOrderScreen({ navigation }) {
  const { viewOrderSelected } = useOrders();

  const GoBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView
      style={tw`bg-[${Colors.BrightGray}]`}
      forceInset={{ top: "always" }}
    >
      <Header order={viewOrderSelected} GoBack={GoBack} />
      <ScrollView style={tw`h-full`}>
        <OrderStatusText status={viewOrderSelected.orderStatus} prescriptionValidation={viewOrderSelected.prescriptionValidationStatus} />
        <OrderData order={viewOrderSelected} />
        <Summary cartItems={viewOrderSelected.items} />
        {viewOrderSelected.prescriptionValidationStatus ===
        OrdersPrescriptionValidationStatus.NotRequired ? null : (
          <PrescriptionImage uri={viewOrderSelected.pictureUri} validationStatus={viewOrderSelected.prescriptionValidationStatus} />
        )}
        <View style={tw`w-full h-50`}></View>
      </ScrollView>
    </SafeAreaView>
  );
}
