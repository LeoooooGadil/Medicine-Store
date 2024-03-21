import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import tw from "twrnc";
import Colors from "../constants/Colors";

import { OrderStatus } from "../constants/OrderStatus";
import { OrdersPrescriptionValidationStatus } from "../constants/OrdersValidationStatus";
import { PaymentMethod } from "../constants/OrderPaymentMethod";
import { OrdersScreenHeader, OrdersList } from "../components/OrdersScreen";

const DUMMY_ORDERS = [
  {
    id: "PBS-1234",
    items: [
      {
        id: "1",
        title: "First Item",
        quantity: 2,
        sum: 29.98,
      },
      {
        id: "2",
        title: "Second Item",
        quantity: 1,
        sum: 9.99,
      },
    ],
    paymentMethod: PaymentMethod.CashOnDelivery,
    deliveryAddress: "1234 Some St, Some City, Some Country, 12345",
    deliveryFee: 50.0,
    totalAmount: 39.97,
    orderStatus: OrderStatus.Received,
    prescriptionValidationStatus: OrdersPrescriptionValidationStatus.Pending,
    orderDate: new Date(),
    deliveryDate: new Date(Date.now() + 86400000),
  },
];

export default function OrdersTabScreen() {
  return (
    <SafeAreaView style={tw`bg-[${Colors.CosmicLatte}]`}>
      <OrdersScreenHeader />
      <ScrollView style={tw`h-full`}>
        <OrdersList Orders={DUMMY_ORDERS} />
      </ScrollView>
    </SafeAreaView>
  );
}
