import { View, Text, TouchableOpacity, Alert } from "react-native";
import tw from "twrnc";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";

export default function AppSettingsMenu() {
  return (
    <View style={tw`mt-12 bg-[${Colors.White}] mx-8 shadow-md rounded-xl`}>
      <View style={tw`flex-row`}>
        <AppSettingsButton />
      </View>
    </View>
  );
}

function AppSettingsButton() {
  return (
    <TouchableOpacity
      style={tw`flex-row items-center justify-between flex-1 h-14`}
    >
      <View style={tw`flex-row items-center h-14 flex-1`}>
        <Text style={tw`text-lg ml-5`}>Address Book</Text>
      </View>
      <View style={tw`flex-row items-center h-14`}>
        <Ionicons
          name="chevron-forward"
          size={24}
          style={tw`mr-4 ml-4 opacity-25`}
        />
      </View>
    </TouchableOpacity>
  );
}
