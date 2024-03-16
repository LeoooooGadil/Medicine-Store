import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import tw from "twrnc";

import { OrdersScreenHeader } from "../components/OrdersScreen";
export default function OrdersTabScreen() {
  return (
    <SafeAreaView style={tw``}>
      <OrdersScreenHeader />
    </SafeAreaView>
  );
}
