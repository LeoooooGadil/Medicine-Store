import { View, Text, TouchableOpacity } from "react-native";
import tw from "twrnc";
import Colors from "../../constants/Colors";
import Seperator from "../Seperator";

function FormatDate(input) {
  let date;

  // Check if input is a string or a date object
  if (typeof input === "string") {
    // If input is a string, assume it's epoch time and convert it to milliseconds
    date = new Date(parseInt(input, 10));
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
  return formattedDate;
}

export default function OrdersItem({ item }) {
  return (
    <View
      style={tw`rounded-xl shadow-md bg-white p-4`}
      key={item.id}
    >
      <View>
        <View style={tw`pb-2`}>
          <Text style={tw`text-[${Colors.Lava}] font-bold`}>{item.id}</Text>
        </View>
        <Seperator />
        <View style={tw`pt-2 gap-1`}>
          <View style={tw`flex-row justify-between`}>
            <Text>Order Date</Text>
            <Text>{FormatDate(item.orderDate)}</Text>
          </View>
          <View style={tw`flex-row justify-between`}>
            <Text>Delivery Date</Text>
            <Text>{FormatDate(item.deliveryDate)}</Text>
          </View>
          <View style={tw`flex-row justify-between`}>
            <Text>Payment Method</Text>
            <Text>{item.paymentMethod}</Text>
          </View>
          <View style={tw`flex-row justify-between`}>
            <Text>Total</Text>
            <Text>₱ {item.totalAmount}</Text>
          </View>
          <View style={tw`flex-row justify-between`}>
            <Text>Prescription Status</Text>
            <View>
              <Text>{item.prescriptionValidationStatus}</Text>
            </View>
          </View>
        </View>
        <View style={tw`pt-4`}>
          <View style={tw`bg-[${Colors.Lava}] p-3 rounded-lg justify-center items-center`}>
            <Text style={tw`text-white`}>{item.orderStatus}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
