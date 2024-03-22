import { View, Text, TouchableOpacity } from "react-native";
import tw from "twrnc";
import Colors from "../../constants/Colors";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

export default function CartControls({ cartItems, GoToCheckout }) {
  if (cartItems.length === 0) {
    return;
  }

  return (
    <View style={tw`px-8 pt-10 flex-row gap-2`}>
      <View style={tw`flex-1 shadow-md`}>
        <TouchableOpacity onPress={GoToCheckout}>
          <View
            style={tw`flex-row gap-1 flex-1 h-13.5 bg-[${Colors.Lava}] p-3 rounded-xl justify-center items-center`}
          >
            <Text style={tw`text-white text-center`}>Checkout</Text>
            <Ionicons name="arrow-forward-outline" size={15} color="white" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
