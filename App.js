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
import { Platform } from "react-native";

export default function App() {
  const isLoadingComplete = useLoadedAssets();

  const statusBarColor = Colors.Lava;
  const statusBarStyle = Platform.OS === "ios" ? "dark-content" : "light-content";

  if (!isLoadingComplete) {
    return null;
  }

  return (
    <SearchProvider>
      <CartProvider>
        <GestureHandlerRootView style={tw`flex-1`}>
          <SafeAreaProvider>
            <Navigation />
            <StatusBar
              style={statusBarStyle}
              backgroundColor={statusBarColor}
            />
          </SafeAreaProvider>
        </GestureHandlerRootView>
      </CartProvider>
    </SearchProvider>
  );
}
