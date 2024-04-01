import { View, Text, TouchableOpacity, Alert } from "react-native";
import tw from "twrnc";
import { useOrders } from "../../context/ordersContext";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";

export default function OrdersScreenHeader({
  orders,
  clearOrders,
  refreshOrders
}) {

  return (
    <View style={tw`px-8 pt-3 flex-row justify-between items-center h-10`}>
      <Text style={tw`text-3xl font-bold`}>Your Orders</Text>
      <View style={tw`flex-row items-center gap-4`}>
        <TouchableOpacity style={tw``} onPress={refreshOrders}>
          <Ionicons name="refresh-outline" size={25} />
        </TouchableOpacity>
        {orders.length > 0 && (
          <TouchableOpacity style={tw``} onPress={clearOrders}>
            <Ionicons
              name="trash-outline"
              size={25}
              color={Colors.AlizarinCrimson}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
