import { View, Text } from "react-native";
import tw from "twrnc";

import { OrderStatus } from "../../constants/OrderStatus";
import { OrdersPrescriptionValidationStatus } from "../../constants/OrdersValidationStatus";

export const getOrderStatusText = (status, validationStatus) => {
  switch (status) {
    case OrderStatus.Pending:
      if (
        validationStatus === OrdersPrescriptionValidationStatus.Pending
      ) {
        return "Your order is pending validation";
      }
      return "Your order is pending";
    case OrderStatus.Processing:
      if (
        validationStatus ===
        OrdersPrescriptionValidationStatus.NotRequired
      ) {
        return "Your order is being processed";
      } else if (
        validationStatus === OrdersPrescriptionValidationStatus.Approved
      ) {
        return "Your order is being processed, prescription approved";
      } else if (
        validationStatus === OrdersPrescriptionValidationStatus.Rejected
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
        validationStatus === OrdersPrescriptionValidationStatus.Rejected
      ) {
        return "Your order has been canceled, prescription rejected";
      } else {
        return "Your order has been canceled";
      }
    default:
      return "Your order status is unknown";
  }
};

export default function OrderStatusText({ status, prescriptionValidation }) {

  return (
    <View style={tw`mt-10 mx-8`}>
      <Text style={tw`text-4xl font-bold`}>{getOrderStatusText(status, prescriptionValidation)}</Text>
    </View>
  );
}
