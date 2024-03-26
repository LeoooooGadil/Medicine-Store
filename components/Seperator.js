import { View } from "react-native";
import tw from "twrnc";
import Colors from "../constants/Colors";

export default function Seperator() {
  return (
    <View style={tw`my-1`}>
      <View style={tw`h-0.5 bg-gray-200 rounded-lg`} />
    </View>
  );
}

export function BoldSeperator() {
  return (
    <View>
      <View style={tw`h-1 bg-[${Colors.Alto}] rounded-lg opacity-50`} />
    </View>
  );
}
