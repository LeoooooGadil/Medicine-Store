import React, { useState, useEffect } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { Text, View, ScrollView, Alert, StatusBar } from "react-native";
import tw from "twrnc";
import Colors from "../constants/Colors";
import { useCart } from "../context/cartContext";
import { useCheckout } from "../context/checkoutContext";
import SafeAreaView from 'react-native-safe-area-view';

import {
  CartInformation,
  CartItemsList,
  CartScreenHeader,
  CartControls,
} from "../components/CartScreen";

export default function CartTabScreen({ navigation }) {
  const statusBarStyle = "dark-content";
  const statusBarColor = Colors.BrightGray;

  const {
    cartItems,
    isCartBeenUpdated,
    loading,
    getCartItems,
    clearCartItems,
  } = useCart();

  const {
    startCheckout,
  } = useCheckout();

  const goToCheckout = () => {
    if (cartItems.length === 0) {
      Alert.alert("Cart is empty", "Please add items to cart first.");
      return;
    }

    Alert.alert(
      "Proceed to checkout?",
      "Are you sure you want to proceed to checkout?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Proceed",
          onPress: () => {
            startCheckout({ navigation, cartItems });
          },
        },
      ]
    );
  };

  const refreshCartItems = async () => {
    console.log("Refreshing cart items...");
    await getCartItems();
  };

  const clearCart = async () => {
    Alert.alert("Clear cart?", "Are you sure you want to clear your cart?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Clear",
        onPress: async () => {
          await clearCartItems();
          refreshCartItems();
        },
      },
    ]);
  };

  useFocusEffect(
    React.useCallback(() => {
      if (isCartBeenUpdated) {
        refreshCartItems();
      }
      return () => {};
    }, [])
  );

  useEffect(() => {
    refreshCartItems();
  }, []);

  return (
    <SafeAreaView style={tw`gap-2 bg-[${Colors.BrightGray}]`} forceInset={{ top: 'always' }}>
      <StatusBar style={statusBarStyle} backgroundColor={statusBarColor} />
      <CartScreenHeader
        cartItems={cartItems}
        refreshCartItems={refreshCartItems}
        clearCart={clearCart}
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
          <CartItemsList
            cartItems={cartItems}
            GoToSearchScreen={() => navigation.navigate("Search")}
          />
          <CartInformation cartItems={cartItems} />
          <CartControls cartItems={cartItems} GoToCheckout={goToCheckout} />
        </ScrollView>
      )}
    </SafeAreaView>
  );
}
