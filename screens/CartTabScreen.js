import React, { useState, useEffect } from "react";
import { useFocusEffect } from "@react-navigation/native";
import {
  Text,
  SafeAreaView,
  View,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import tw from "twrnc";
import { useCart } from "../context/cartContext";

import {
  CartInformation,
  CartItemsList,
  CartScreenHeader,
} from "../components/CartScreen";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function CartTabScreen({ navigation }) {
  const { cartItems, loading, getCartItems, clearCartItems } = useCart();

  const refreshCartItems = async () => {
    console.log("Refreshing cart items...");
    await getCartItems();
  };

  const clearCart = async () => {
    await clearCartItems();
    refreshCartItems();
  };

  // use UseFocusEffect to refresh the cart items when the screen is focused
  useFocusEffect(
    React.useCallback(() => {
      console.log("Cart Tab Screen focused");
      refreshCartItems();
      return () => {
        console.log("Cart Tab Screen unfocused");
      };
    }, [])
  );

  useEffect(() => {
    refreshCartItems();
  }, []);

  return (
    <SafeAreaView style={tw`gap-2`}>
      <CartScreenHeader
        refreshCartItems={refreshCartItems}
        clearCart={clearCart}
      />
      {loading ? (
        <>
          <View
            style={tw`px-8 py-2 items-center justify-center w-full h-80 gap-6`}
          >
            <Text style={tw`text-lg font-bold opacity-25`}>
              Loading...
            </Text>
          </View>
        </>
      ) : (
        <ScrollView style={tw`h-full`}>
          <CartItemsList
            cartItems={cartItems}
            GoToSearchScreen={() => navigation.navigate("Search")}
          />
          <CartInformation cartItems={cartItems} />
        </ScrollView>
      )}
    </SafeAreaView>
  );
}
