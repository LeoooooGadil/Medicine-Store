import { View } from "react-native";
import tw from "twrnc";

export default function Seperator() {
  return (
    <View style={tw`my-1 px-8`}>
      <View style={tw`h-0.5 bg-gray-200 rounded-lg`} />
    </View>
  );
}
