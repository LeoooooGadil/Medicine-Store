import { View, Text, TouchableOpacity } from "react-native";
import tw from "twrnc";
import { Ionicons } from "@expo/vector-icons";

export default function MenuHeader() {
  return (
    <View style={tw`h-10 px-8 pt-2 flex-row justify-between items-center`}>
      <Text style={tw`text-3xl font-bold`}>Menu</Text>
    </View>
  );
}
