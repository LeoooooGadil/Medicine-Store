import { View, Text, TouchableOpacity } from "react-native";
import tw from "twrnc";
import Colors from "../../constants/Colors";
import { useCheckout } from "../../context/checkoutContext";

export default function CheckoutControls({ navigation }) {
  const { currentStep, nextStep, prevStep } = useCheckout();

  if(currentStep === 3) return null

  return (
    <View style={tw`flex-row gap-20 justify-between items-center mx-8 pb-3`}>
      {
        currentStep !== 0 ? (
          <TouchableOpacity
        style={tw`bg-[${Colors.Silver}] p-2 rounded-xl flex-1 py-5 shadow-md`}
        onPress={currentStep === 0 ? () => navigation.goBack() : prevStep}
      >
        <Text style={tw`text-white text-center font-bold`}>Back</Text>
      </TouchableOpacity>
        ) : (
          <View style={tw`p-2 rounded-xl flex-1 py-5`}></View>
        )
      }
      <TouchableOpacity
        style={tw`bg-[${Colors.AlizarinCrimson}] p-2 rounded-xl flex-1 py-5 shadow-md`}
        onPress={nextStep}
      >
        <Text style={tw`text-white text-center font-bold`}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}
