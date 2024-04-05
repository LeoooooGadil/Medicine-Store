import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import tw from "twrnc";
import Colors from "../constants/Colors";
import { SafeAreaView } from "react-native-safe-area-context";
import { RegisterControls, RegisterHeader } from "../components/AuthScreen";
import { useRegister } from "../context/registerContext";

export default function RegisterScreen({ navigation }) {
  const { currentStep, nextStep, prevStep } = useRegister();

  const GoBack = () => {
    if (currentStep === 0) return navigation.goBack();

    prevStep();
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <ScrollView contentContainerStyle={tw`flex-1`}>
            <Text>Step 1</Text>
          </ScrollView>
        );
      case 1:
        return (
          <ScrollView contentContainerStyle={tw`flex-1`}>
            <Text>Step 2</Text>
          </ScrollView>
        );
      case 2:
        return (
          <ScrollView contentContainerStyle={tw`flex-1`}>
            <Text>Step 3</Text>
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
    <SafeAreaView style={tw`flex-1`} forceInset={{ top: "always" }}>
      <RegisterHeader GoBack={GoBack} />
      {renderStep()}
      <RegisterControls currentStep={currentStep} nextStep={nextStep} />
    </SafeAreaView>
  );
}
