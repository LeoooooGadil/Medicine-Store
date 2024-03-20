import { View, Text, TouchableOpacity } from "react-native";
import tw from "twrnc";

import Colors from "../../constants/Colors";

export default function WelcomeBanner() {
  return (
    <View style={tw`flex flex-col items-start justify-center px-8 pb-4`}>
      <TouchableOpacity
        style={tw`rounded-xl w-full p-4 bg-[${Colors.DarkBlueGray}] shadow-lg gap-2`}
      >
        <Text style={tw`text-4xl font-bold text-white`}>
          Welcome to PhilBox
        </Text>
        <Text style={tw`text-xl text-white opacity-75`}>
          Your one stop shop for all your pharmaceutical needs
        </Text>
      </TouchableOpacity>
    </View>
  );
}
