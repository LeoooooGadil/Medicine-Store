import React, { useState, useEffect } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { Text, SafeAreaView, View, ScrollView, Alert } from "react-native";
import tw from "twrnc";
import Colors from "../constants/Colors";
import { useCart } from "../context/cartContext";

import {
  CartInformation,
  CartItemsList,
  CartScreenHeader,
  CartControls,
} from "../components/CartScreen";

export default function CartTabScreen({ navigation }) {
  const {
    cartItems,
    isCartBeenUpdated,
    loading,
    getCartItems,
    clearCartItems,
  } = useCart();

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
            navigation.navigate("Checkout");
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

  // use UseFocusEffect to refresh the cart items when the screen is focused
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
    <SafeAreaView style={tw`gap-2 bg-[${Colors.BrightGray}]`}>
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
