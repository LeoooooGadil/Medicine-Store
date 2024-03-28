import { useState, useEffect } from "react";
import tw from "twrnc";
import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useLoadedAssets } from "./hooks/useLoadedAssets";
import Navigation from "./navigation";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { CartProvider } from "./context/cartContext";
import { SearchProvider } from "./context/searchContext";
import Colors from "./constants/Colors";
import { AddressesProvider } from "./context/addressesContext";
import { CheckoutProvider } from "./context/checkoutContext";
import { useNavigation } from "@react-navigation/native";

export default function App() {
  const isLoadingComplete = useLoadedAssets();

  if (!isLoadingComplete) {
    return null;
  }

  return (
    <SearchProvider>
      <AddressesProvider>
        <CartProvider>
          <CheckoutProvider>
            <GestureHandlerRootView style={tw`flex-1`}>
              <SafeAreaProvider>
                <Navigation />
              </SafeAreaProvider>
            </GestureHandlerRootView>
          </CheckoutProvider>
        </CartProvider>
      </AddressesProvider>
    </SearchProvider>
  );
}
