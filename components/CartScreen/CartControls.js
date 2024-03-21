import { View, Text, TouchableOpacity } from "react-native";
import tw from "twrnc";

export default function CartControls({ cartItems }) {
  if (cartItems.length === 0) {
    return;
  }

  return (
    <View style={tw`px-8 pt-10 flex-row gap-2`}>
      <TouchableOpacity style={tw`flex-1 bg-red-500 p-4 rounded-xl`}>
        <Text style={tw`text-white text-center font-bold`}>Checkout</Text>
      </TouchableOpacity>
    </View>
  );
}
