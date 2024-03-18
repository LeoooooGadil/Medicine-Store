import { View, Text } from "react-native";
import tw from "twrnc";

export default function CartScreenHeader() {
  return (
    <View style={tw`pt-10 px-8`}>
      <Text style={tw`text-3xl font-bold`}>Your Cart</Text>
    </View>
  );
}
