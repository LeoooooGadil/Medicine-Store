import { StyleSheet, View, ActivityIndicator, ScrollView } from "react-native";
import tw from "twrnc";
import Colors from "../constants/Colors";
import { useCheckout } from "../context/checkoutContext";
import {
  CheckoutControls,
  CheckoutScreenHeader,
  Summary,
} from "../components/CheckoutScreen";
import SafeAreaView from "react-native-safe-area-view";
import { UploadPrescriptionWindow } from "../components/CheckoutScreen/UploadPrescriptionScreen";

export default function CheckoutScreen({ navigation }) {
  const { isLoading, currentStep, prevStep } = useCheckout();

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <ScrollView style={tw`h-full`}>
            <Summary />
          </ScrollView>
        );
      case 1:
        return (
          <View style={tw`flex-1 overflow-hidden rounded-xl p-3`}>
            <UploadPrescriptionWindow />
          </View>
        );
      case 2:
        return <ScrollView style={tw`h-full`}></ScrollView>;
      case 3:
        return <ScrollView style={tw`h-full`}></ScrollView>;
      default:
        return <ScrollView style={tw`h-full`}></ScrollView>;
    }
  };

  const goBack = () => {
    if (currentStep === 0) {
      navigation.goBack();
    } else {
      prevStep();
    }
  };

  if (isLoading) {
    return (
      <View
        style={tw`bg-[${Colors.BrightGray}] justify-center items-center flex-1`}
      >
        <ActivityIndicator size="large" color={Colors.AlizarinCrimson} />
      </View>
    );
  }

  return (
    <SafeAreaView
      style={tw`flex-col gap-2 bg-[${Colors.BrightGray}] flex-1`}
      forceInset={{ top: "always" }}
    >
      <CheckoutScreenHeader GoBack={goBack} />
      {renderStep()}
      {currentStep !== 1 && <CheckoutControls navigation={navigation} />}
    </SafeAreaView>
  );
}
