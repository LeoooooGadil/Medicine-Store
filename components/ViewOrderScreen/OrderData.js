import { View, Text } from "react-native";
import tw from "twrnc";
import Colors from "../../constants/Colors";
import { FormatDate } from "../OrdersScreen/OrderItem";

export default function OrderData({ order }) {
  
  return (
    <View style={tw` mt-10 mx-8 gap-1 bg-[${Colors.White}] shadow-md rounded-xl p-3`}>
      <View style={tw`flex-row justify-between items-center`}>
        <Text>Order Date</Text>
        <Text>{FormatDate(order.orderDate)}</Text>
      </View>
      <View style={tw`flex-row justify-between items-center`}>
        <Text>Delivery Date</Text>
        <Text>{FormatDate(order.deliveryDate)}</Text>
      </View>
      <View style={tw`flex-row justify-between items-center`}>
        <Text>Payment Method</Text>
        <Text>{order.paymentMethod}</Text>
      </View>
      <View style={tw`flex-row justify-between items-center`}>
        <Text>Delivery Address</Text>
        <Text>{order.deliveryAddress === "" ? "Matt Asan Na Address Book" : ""}</Text>
      </View>
    </View>
  );
}
