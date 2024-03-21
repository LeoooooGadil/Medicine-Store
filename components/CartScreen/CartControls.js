import { View, Text, TouchableOpacity } from "react-native";
import tw from "twrnc";
import Colors from "../../constants/Colors";

export default function CartControls({ cartItems }) {
  if (cartItems.length === 0) {
    return;
  }

  return (
    <View style={tw`px-8 pt-10 flex-row gap-2`}>
      <TouchableOpacity style={tw`flex-1 bg-[${Colors.SunsetOrange}] p-3 rounded-lg justify-center items-center`}>
        <Text style={tw`text-white text-center`}>Checkout</Text>
      </TouchableOpacity>
    </View>
  );
}
