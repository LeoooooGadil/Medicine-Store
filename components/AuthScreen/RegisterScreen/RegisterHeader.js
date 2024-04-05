import { View, Text, TouchableOpacity } from "react-native";
import tw from "twrnc";
import Colors from "../../../constants/Colors";
import { AntDesign } from "@expo/vector-icons";

export default function RegisterHeader({ GoBack }) {
  return (
	<View style={tw`px-8 pt-3 flex-row h-14`}>
	<View style={tw`flex-row items-center gap-4`}>
	  <TouchableOpacity style={tw``} onPress={GoBack}>
		<AntDesign name="arrowleft" size={24} color="black" />
	  </TouchableOpacity>
	  <Text style={tw`text-3xl font-bold`}>Create Account</Text>
	</View>
  </View>
  );
}
