import { View, Text } from "react-native";
import tw from "twrnc";

export default function OrdersScreenHeader() {
  return (
    <View style={tw`h-10 px-8 justify-center`}>
      <Text style={tw`text-3xl font-bold`}>Your Orders</Text>
    </View>
  );
}
