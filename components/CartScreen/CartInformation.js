import { View, Text } from "react-native";
import tw from "twrnc";

export default function CartInformation() {
  return (
    <View style={tw`px-8 py-4 pt-10 gap-1`}>
      <View style={tw`flex-row justify-between items-center`}>
        <Text style={tw`text-lg`}>Subtotal</Text>
        <Text style={tw`text-lg font-bold`}>₱230</Text>
      </View>
      <View style={tw`flex-row justify-between items-center`}>
        <Text style={tw`text-lg`}>Shipping Fee</Text>
        <Text style={tw`text-lg font-bold`}>₱50</Text>
      </View>
      <View style={tw`flex-row justify-between items-center`}>
        <Text style={tw`text-2xl`}>Total</Text>
        <Text style={tw`text-2xl font-bold`}>₱280</Text>
      </View>
    </View>
  );
}
