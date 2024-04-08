import React, { useState } from "react";
import { View, Text, ScrollView, KeyboardAvoidingView } from "react-native";
import tw from "twrnc";
import Colors from "../constants/Colors";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  RegisterControls,
  RegisterHeader,
  RegisterInput,
} from "../components/AuthScreen";
import { useRegister } from "../context/registerContext";

export default function RegisterScreen({ navigation }) {
  const {
    currentStep,
    nextStep,
    prevStep,
    fullName,
    setFullName,
    username,
    setUsername,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    error,
  } = useRegister();

  const GoBack = () => {
    if (currentStep === 0) return navigation.goBack();

    prevStep();
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <ScrollView contentContainerStyle={tw`flex-1`}>
            {/* Input for Full Name */}
            <RegisterInput
              error={error}
              placeholder="Full Name"
              containerStyle={tw`mt-10`}
              value={fullName}
              onChangeText={setFullName}
            />
          </ScrollView>
        );
      case 1:
        return (
          <ScrollView contentContainerStyle={tw`flex-1`}>
            <RegisterInput
              error={error}
              containerStyle={tw`mt-10`}
              placeholder="Username"
              value={username}
              onChangeText={setUsername}
            />
          </ScrollView>
        );
      case 2:
        return (
          <ScrollView contentContainerStyle={tw`flex-1`}>
            <RegisterInput
              error={error}
              containerStyle={tw`mt-10`}
              placeholder="Password"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
            <RegisterInput
              containerStyle={tw`mt-2`}
              placeholder="Confirm Password"
              secureTextEntry
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
          </ScrollView>
        );
      case 3:
        return (
          <ScrollView contentContainerStyle={tw`flex-1`}>
            <Text>Step 4</Text>
          </ScrollView>
        );
    }
  };

  return (
    <KeyboardAvoidingView
      style={tw`flex-1 bg-[${Colors.BrightGray}]`}
      behavior="padding"
    >
      <SafeAreaView style={tw`flex-1`} forceInset={{ top: "always" }}>
        <RegisterHeader GoBack={GoBack} />
        {renderStep()}
        <RegisterControls currentStep={currentStep} nextStep={nextStep} />
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}
