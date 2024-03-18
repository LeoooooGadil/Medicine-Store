import { Text, SafeAreaView, View } from "react-native";
import tw from "twrnc";

import { CartScreenHeader } from "../components/CartScreen";

export default function CartTabScreen() {
  return (
    <SafeAreaView style={tw`gap-2`}>
      <CartScreenHeader />
    </SafeAreaView>
  );
}
