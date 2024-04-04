import { useState, useEffect } from "react";
import tw from "twrnc";
import "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useLoadedAssets } from "./hooks/useLoadedAssets";
import Navigation from "./navigation";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { CartProvider } from "./context/cartContext";
import { SearchProvider } from "./context/searchContext";
import { AddressesProvider } from "./context/addressesContext";
import { CheckoutProvider } from "./context/checkoutContext";
import { OrdersProvider } from "./context/ordersContext";
import { InAppNotificationProvider } from "./components/InAppNotification";

export default function App() {
  const isLoadingComplete = useLoadedAssets();

  if (!isLoadingComplete) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <InAppNotificationProvider>
        <SearchProvider>
          <AddressesProvider>
            <CartProvider>
              <OrdersProvider>
                <CheckoutProvider>
                  <GestureHandlerRootView style={tw`flex-1`}>
                    <Navigation />
                  </GestureHandlerRootView>
                </CheckoutProvider>
              </OrdersProvider>
            </CartProvider>
          </AddressesProvider>
        </SearchProvider>
      </InAppNotificationProvider>
    </SafeAreaProvider>
  );
}
