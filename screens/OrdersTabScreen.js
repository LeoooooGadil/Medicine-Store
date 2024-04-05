import React from "react";
import { View, Text, ScrollView, StatusBar, Alert } from "react-native";
import tw from "twrnc";
import Colors from "../constants/Colors";

import { OrderStatus } from "../constants/OrderStatus";
import { OrdersPrescriptionValidationStatus } from "../constants/OrdersValidationStatus";
import { PaymentMethod } from "../constants/OrderPaymentMethod";
import { OrdersScreenHeader, OrdersList } from "../components/OrdersScreen";
import SafeAreaView from "react-native-safe-area-view";
import { useOrders } from "../context/ordersContext";
import { useEffect } from "react";
import { useFocusEffect } from "@react-navigation/native";

export default function OrdersTabScreen({ navigation }) {
  const statusBarStyle = "dark-content";
  const statusBarColor = Colors.BrightGray;

  const { orders, isCartBeenUpdated, loading, getOrders, clearOrders } =
    useOrders();

  const clearOrder = async () => {
    Alert.alert("Clear Orders?", "Are you sure you want to clear all orders?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Clear",
        onPress: () => {
          clearOrders();
        },
      },
    ]);
  };

  const refreshOrders = async () => {
    console.log("Refreshing orders...");
    await getOrders();
  };

  useFocusEffect(
    React.useCallback(() => {
      if (isCartBeenUpdated) {
        refreshOrders();
      }
      return () => {};
    })
  );

  useEffect(() => {
    refreshOrders();
  }, []);

  return (
    <SafeAreaView
      style={tw`bg-[${Colors.BrightGray}] gap-2`}
      forceInset={{ top: "always" }}
    >
      <StatusBar style={statusBarStyle} backgroundColor={statusBarColor} />
      <OrdersScreenHeader
        orders={orders}
        clearOrders={clearOrder}
        refreshOrders={refreshOrders}
      />
      {loading ? (
        <>
          <View
            style={tw`px-8 py-2 items-center justify-center w-full h-80 gap-6`}
          >
            <Text style={tw`text-lg font-bold opacity-25`}>Loading...</Text>
          </View>
        </>
      ) : (
        <ScrollView style={tw`h-full`}>
          <OrdersList orders={orders} navigation={navigation} />
          <View style={tw`w-full h-50`}></View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
}
