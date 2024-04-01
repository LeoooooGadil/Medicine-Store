import { View, Text, TouchableOpacity } from "react-native";
import tw from "twrnc";
import Colors from "../../constants/Colors";
import OrdersItem from "./OrderItem";
import { useOrders } from "../../context/ordersContext";

export default function OrdersList({ orders, navigation }) {

  if (orders.length === 0) {
    return (
      <View style={tw`px-8 py-2 items-center justify-center w-full h-80 gap-6`}>
        <Text style={tw`text-lg font-bold opacity-25`}>No Orders</Text>
      </View>
    );
  }

  return (
    <View style={tw`px-8 pt-12 flex-col gap-3`}>
      {orders.reverse().map((_item, index) => {
        return <OrdersItem item={_item} key={index} navigation={navigation} />;
      })}
    </View>
  );
}
