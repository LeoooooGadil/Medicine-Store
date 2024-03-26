import { View, Text } from "react-native";
import React from "react";
import {
  AccountButton,
  AppSettingsMenu,
  MenuHeader,
} from "../components/MenuScreen";
import SafeAreaView from "react-native-safe-area-view";
import tw from "twrnc";

export default function AccountSettings({ navigation }) {
  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <MenuHeader />
      <View style={tw`pt-12`}>
        <AccountButton />
        <AppSettingsMenu navigation={navigation} />
      </View>
    </SafeAreaView>
  );
}
