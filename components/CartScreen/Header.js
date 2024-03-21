import { View, Text, TouchableOpacity } from "react-native";
import tw from "twrnc";
import { Ionicons } from "@expo/vector-icons";

export default function CartScreenHeader({ refreshCartItems, clearCart }) {
  return (
    <View style={tw`pt-10 px-8 flex-row justify-between items-center`}>
      <Text style={tw`text-3xl font-bold`}>Your Cart</Text>
      <View style={tw`flex-row items-center gap-4`}>
        <TouchableOpacity style={tw``} onPress={refreshCartItems}>
          <Ionicons name="refresh-outline" size={25} />
        </TouchableOpacity>
        <TouchableOpacity style={tw``} onPress={clearCart}>
          <Ionicons name="trash-outline" size={25} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
