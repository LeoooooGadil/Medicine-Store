import { View, Text, TouchableOpacity } from "react-native";
import tw from "twrnc";
import Colors from "../../constants/Colors";
import OrdersItem from "./OrderItem";

export default function OrdersList({ Orders }) {
  if (Orders.length === 0) {
    return (
      <View style={tw`px-8 py-2 items-center justify-center w-full h-80 gap-6`}>
        <Text style={tw`text-lg font-bold opacity-25`}>No Orders</Text>
      </View>
    );
  }

  return (
    <View style={tw`px-8 pt-12 flex-col gap-3`}>
      {Orders.map((_item, index) => {
        return <OrdersItem item={_item} />;
      })}
    </View>
  );
}
