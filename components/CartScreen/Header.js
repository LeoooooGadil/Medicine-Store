import { View, Text, TouchableOpacity } from "react-native";
import tw from "twrnc";
import { Ionicons } from "@expo/vector-icons";

export default function CartScreenHeader({
  cartItems,
  refreshCartItems,
  clearCart,
}) {
  return (
    <View style={tw`px-8 flex-row justify-between items-center h-10`}>
      <Text style={tw`text-3xl font-bold`}>Your Cart</Text>
      <View style={tw`flex-row items-center gap-4`}>
        <TouchableOpacity style={tw``} onPress={refreshCartItems}>
          <Ionicons name="refresh-outline" size={25} />
        </TouchableOpacity>
        {cartItems.length > 0 && (
          <TouchableOpacity style={tw``} onPress={clearCart}>
            <Ionicons name="trash-outline" size={25} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
