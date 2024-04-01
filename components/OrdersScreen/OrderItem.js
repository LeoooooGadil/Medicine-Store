import { View, Text, TouchableOpacity } from "react-native";
import tw from "twrnc";
import Colors from "../../constants/Colors";
import Seperator from "../Seperator";
import { useOrders } from "../../context/ordersContext";
import { OrderStatus } from "../../constants/OrderStatus";
import { OrdersPrescriptionValidationStatus } from "../../constants/OrdersValidationStatus";

export function FormatDate(input, noTime = false) {
  let date;

  // Check if input is a string or a date object
  if (typeof input === "string") {
    // If input is a string, assume it's epoch time and convert it to milliseconds
    date = new Date(input);
  } else if (input instanceof Date) {
    // If input is a date object, simply assign it
    date = input;
  } else {
    throw new Error(
      `Invalid input. Expected a date object or a string representing epoch time. Received: ${input}`
    );
  }

  // Format the date as desired
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const dayOfWeek = daysOfWeek[date.getDay()];
  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();
  let hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12;

  const formattedDate = `${dayOfWeek} ${month} ${day}, ${year} ${hours}:${minutes}:${seconds} ${ampm}`;
  const formattedDateNoTime = `${dayOfWeek} ${month} ${day}, ${year}`;

  if (noTime) {
    return formattedDateNoTime;
  }

  return formattedDate;
}

export default function OrdersItem({ item, navigation }) {
  const { SetViewOrderSelected } = useOrders();

  const handleViewOrder = () => {
    SetViewOrderSelected(item);
    navigation.navigate("ViewOrder");
  };

  const GetOrderStatus = () => {
    switch (item.orderStatus) {
      case OrderStatus.Pending:
        return (
          <View style={tw`bg-[${Colors.SinBad}] p-0.5 px-2 rounded-lg`}>
            <Text style={tw`text-white`}>Pending</Text>
          </View>
        );
      case OrderStatus.Processing:
        return (
          <View style={tw`bg-[${Colors.Froly}] p-0.5 px-2 rounded-lg`}>
            <Text style={tw`text-white`}>Processing</Text>
          </View>
        );
      case OrderStatus.Shipped:
        return (
          <View style={tw`bg-[${Colors.Froly}] p-0.5 px-2 rounded-lg`}>
            <Text style={tw`text-white`}>Shipped</Text>
          </View>
        );
      case OrderStatus.Delivered:
        return (
          <View
            style={tw`bg-[${Colors.AlizarinCrimson}] p-0.5 px-2 rounded-lg`}
          >
            <Text style={tw`text-white`}>Delivered</Text>
          </View>
        );
      case OrderStatus.Canceled:
        return (
          <View style={tw`bg-[${Colors.SilverChalice}] p-0.5 px-2 rounded-lg`}>
            <Text style={tw`text-white`}>Cancelled</Text>
          </View>
        );
    }
  };

  const GetPrescriptionStatus = () => {
    switch (item.prescriptionValidationStatus) {
      case OrdersPrescriptionValidationStatus.Pending:
        return (
          <View style={tw`bg-[${Colors.SinBad}] p-0.5 px-2 rounded-lg`}>
            <Text style={tw`text-white`}>Pending</Text>
          </View>
        );
      case OrdersPrescriptionValidationStatus.Approved:
        return (
          <View style={tw`bg-[${Colors.Froly}] p-0.5 px-2 rounded-lg`}>
            <Text style={tw`text-white`}>Approved</Text>
          </View>
        );
      case OrdersPrescriptionValidationStatus.Rejected:
        return (
          <View
            style={tw`bg-[${Colors.AlizarinCrimson}] p-0.5 px-2 rounded-lg`}
          >
            <Text style={tw`text-white`}>Rejected</Text>
          </View>
        );
      case OrdersPrescriptionValidationStatus.NotRequired:
        return (
          <View style={tw`bg-[${Colors.SilverChalice}] p-0.5 px-2 rounded-lg`}>
            <Text style={tw`text-white`}>Not Required</Text>
          </View>
        );
    }
  };

  return (
    <View style={tw`rounded-xl shadow-md bg-white p-4`} key={item.id}>
      <View>
        <View style={tw`pb-2`}>
          <Text style={tw`text-[${Colors.DarkOrange}] font-bold`}>
            {item.id}
          </Text>
        </View>
        <Seperator />
        <View style={tw`pt-2 gap-1`}>
          <View style={tw`flex-row justify-between items-center`}>
            <Text>Order Date</Text>
            <Text>{FormatDate(item.orderDate)}</Text>
          </View>
          <View style={tw`flex-row justify-between items-center`}>
            <Text>Delivery Date</Text>
            <Text>{FormatDate(item.deliveryDate, true)}</Text>
          </View>
          <View style={tw`flex-row justify-between items-center`}>
            <Text>Payment Method</Text>
            <Text>{item.paymentMethod}</Text>
          </View>
          <View style={tw`flex-row justify-between items-center`}>
            <Text>Total</Text>
            <Text style={tw`font-bold`}>₱ {item.totalAmount}</Text>
          </View>
          <View style={tw`flex-row justify-between items-center mt-3`}>
            <Text>Prescription Status</Text>
            <View>{GetPrescriptionStatus()}</View>
          </View>
          <View style={tw`flex-row justify-between items-center`}>
            <Text>Status</Text>
            <View>{GetOrderStatus()}</View>
          </View>
        </View>
        <View style={tw`pt-4`}>
          <TouchableOpacity
            style={tw`bg-[${Colors.DarkOrange}] p-3 rounded-lg justify-center items-center`}
            onPress={handleViewOrder}
          >
            <Text style={tw`text-white`}>View Order</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
