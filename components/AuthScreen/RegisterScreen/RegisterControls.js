import { View, Text, TouchableOpacity } from "react-native";
import tw from "twrnc";
import Colors from "../../../constants/Colors";

export default function RegisterControls({ currentStep, nextStep, prevStep }) {
  return (
    <View style={tw`flex-row px-8 mt-10`}>
	  <TouchableOpacity
		style={tw`flex-1 justify-center items-center bg-[${Colors.AlizarinCrimson}] rounded-lg h-14`}
		onPress={nextStep}
	  >
		<Text style={tw`text-lg text-white`}>
		  {currentStep === 3 ? "Create Account" : "Continue"}
		</Text>
	  </TouchableOpacity>
    </View>
  );
}
