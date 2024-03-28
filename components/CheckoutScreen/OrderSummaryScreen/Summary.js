import { View, Text } from "react-native";
import tw from "twrnc";
import Colors from "../../../constants/Colors";
import { useCart } from "../../../context/cartContext";
import { useCheckout } from "../../../context/checkoutContext";
import SummaryItem from "./SummaryItem";
import { FontAwesome6, FontAwesome5 } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Summary() {
  const { cartItems } = useCart();
  const { orderSummary, isPrescriptionRequired } = useCheckout();

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const subTotal = cartItems.reduce(
    (acc, item) => acc + item.item.price * item.quantity,
    0
  );
  const shippingFee = 50;
  const total = subTotal + shippingFee;

  const getShippingDate = () => {
    const deliveryDate = new Date(orderSummary.deliveryDate);
    const today = new Date();

    //if delivery date is today
    if (deliveryDate.getDate() === today.getDate()) {
      return "Today";
    }

    //if delivery date is tomorrow
    if (deliveryDate.getDate() === today.getDate() + 1) {
      return "Tomorrow";
    }

    // else return return get by. format should be Get By Wed, Apr 3. or if next year Get By Wed, Apr 3, 2025
    // get the day
    // get the month
    // get the date
    // get the year
    // return the formatted string
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
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

    const day = days[deliveryDate.getDay()];
    const month = months[deliveryDate.getMonth()];
    const date = deliveryDate.getDate();
    const year = deliveryDate.getFullYear();

    // show the year if the delivery date is not this year
    if (today.getFullYear() !== year) {
      return `${day}, ${month} ${date}, ${year}`;
    } else {
      return `${day}, ${month} ${date}`;
    }
  };

  return (
    <View>
      <View style={tw`mx-8 mt-10`}>
        {cartItems.map((item, index) => (
          <SummaryItem key={index} item={item} />
        ))}
      </View>
      <View>
        <View style={tw`px-8 py-4 pt-2 gap-1`}>
          <View style={tw`flex-row justify-between items-center`}>
            <Text>Subtotal</Text>
            <Text style={tw`font-bold`}>₱ {subTotal.toFixed(2)}</Text>
          </View>
          <View style={tw`flex-col mt-5`}>
            {/* <View style={tw`flex-row items-center gap-1 mb-2`}>
              <FontAwesome6 name="truck" size={10} color="black" />
              <Text style={tw``}>{getShippingDate()}</Text>
            </View> */}
            <View style={tw`flex-row justify-between items-center`}>
              <Text>Shipping Fee</Text>
              <Text style={tw`font-bold`}>₱ {shippingFee}</Text>
            </View>
            <View style={tw`flex-row justify-between items-center`}>
              <Text style={tw`text-xl`}>
                Total
                <Text style={tw`text-sm opacity-50`}> (VAT Inclusive)</Text>
              </Text>
              <Text style={tw`text-xl font-bold`}>₱ {total.toFixed(2)}</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={tw`px-8 py-4 pb-1 pt-2 gap-1`}>
          <View
            style={tw`flex-row items-center gap-1 p-4 rounded-xl shadow-md bg-[${Colors.White}]`}
          >
            <FontAwesome6
              name="truck"
              size={10}
              color={Colors.AlizarinCrimson}
            />
            <Text style={tw`text-[${Colors.AlizarinCrimson}]`}>
              Get By
              <Text style={tw`font-bold`}> {getShippingDate()}</Text>
            </Text>
          </View>
      </View>
    </View>
  );
}
