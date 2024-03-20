import { Text, SafeAreaView, View, ScrollView } from "react-native";
import tw from "twrnc";

import {
  CartInformation,
  CartItemsList,
  CartScreenHeader,
} from "../components/CartScreen";

export default function CartTabScreen() {
  return (
    <SafeAreaView style={tw`gap-2`}>
        <CartScreenHeader />
      <ScrollView style={tw`h-full`}>
        <CartItemsList />
        <CartInformation />
      </ScrollView>
    </SafeAreaView>
  );
}
