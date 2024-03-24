import { View, Text } from "react-native";
import React from "react";
import { MenuHeader } from "../components/MenuScreen";
import SafeAreaView from "react-native-safe-area-view";

export default function AccountSettings() {
  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <MenuHeader />
    </SafeAreaView>
  );
}
