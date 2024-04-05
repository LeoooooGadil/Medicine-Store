import React, { useState, useEffect } from "react";
import { View, ScrollView, Keyboard } from "react-native";
import tw from "twrnc";
import Colors from "../constants/Colors";
import { AppLogo, LoginForm } from "../components/AuthScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useAuthentication } from "../hooks/useAuthentication";
import SafeAreaView from "react-native-safe-area-view";
import { useInAppNotification } from "../components/InAppNotification";

export default function AuthScreen({ navigation }) {
  const { showNotification } = useInAppNotification();
  const { login, register } = useAuthentication();
  const [activeTab, setActiveTab] = useState("login");
  const [keyboardVisible, setKeyboardVisible] = useState(false);

  const changeAuth = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <LinearGradient
        colors={[Colors.White, Colors.BrightGray, Colors.Froly]}
        start={{ x: 0.2, y: 0.2 }}
        end={{ x: 0.9, y: 0.9 }}
        style={tw`flex-1 absolute w-full h-full opacity-50`}
      ></LinearGradient>
      <LinearGradient
        colors={[Colors.WedgeWood, Colors.BrightGray, Colors.White]}
        start={{ x: 0.2, y: 0.9 }}
        end={{ x: 0.2, y: 0.0 }}
        style={tw`absolute w-full h-full opacity-25`}
      ></LinearGradient>
      <SafeAreaView style={tw`flex-1`} forceInset={{ top: "always" }}>
        <ScrollView style={tw`flex-1`}>
          {!keyboardVisible && (
            <View style={tw`flex-1 items-center justify-center`}>
              <AppLogo />
            </View>
          )}
          <LoginForm CreateAccount={() => navigation.navigate("Register")} />
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
