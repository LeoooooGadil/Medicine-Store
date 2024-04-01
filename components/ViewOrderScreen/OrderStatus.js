import { View, Text } from "react-native";
import tw from "twrnc";

import { OrderStatus } from "../../constants/OrderStatus";
import { OrdersPrescriptionValidationStatus } from "../../constants/OrdersValidationStatus";

export default function OrderStatusText({ status, prescriptionValidation }) {
  const getOrderStatusText = () => {
    switch (status) {
      case OrderStatus.Pending:
        if (
          prescriptionValidation === OrdersPrescriptionValidationStatus.Pending
        ) {
          return "Your order is pending validation";
        }
        return "Your order is pending";
      case OrderStatus.Processing:
        if (
          prescriptionValidation ===
          OrdersPrescriptionValidationStatus.NotRequired
        ) {
          return "Your order is being processed";
        } else if (
          prescriptionValidation === OrdersPrescriptionValidationStatus.Approved
        ) {
          return "Your order is being processed, prescription approved";
        } else if (
          prescriptionValidation === OrdersPrescriptionValidationStatus.Rejected
        ) {
          return "Your prescription has been rejected";
        }
      case OrderStatus.OnTheWay:
        return "Your order is on the way";
      case OrderStatus.Delivered:
        return "Your order has been delivered";
      case OrderStatus.Received:
        return "Your order has been received";
      case OrderStatus.Canceled:
        if (
          prescriptionValidation === OrdersPrescriptionValidationStatus.Rejected
        ) {
          return "Your order has been canceled, prescription rejected";
        } else {
          return "Your order has been canceled";
        }
      default:
        return "Your order status is unknown";
    }
  };

  return (
    <View style={tw`mt-10 mx-8`}>
      <Text style={tw`text-4xl font-bold`}>{getOrderStatusText()}</Text>
    </View>
  );
}
