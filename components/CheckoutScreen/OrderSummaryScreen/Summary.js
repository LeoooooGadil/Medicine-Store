import { View, Text } from "react-native";
import tw from "twrnc";
import SummaryItem from "./SummaryItem";

export default function Summary({ cartItems }) {

  console.log("cartItems", cartItems);

  const subTotal = cartItems.reduce(
    (acc, item) => acc + item.item.price * item.quantity,
    0
  );
  const shippingFee = 0;
  const total = subTotal + shippingFee;

  return (
    <View style={tw`mt-7`}>
      <View style={tw`mx-8`}>
        <Text style={tw`text-lg font-bold text-gray-800`}>
          Orders
        </Text>
      </View>
      <View style={tw`mx-8 mt-1 gap-2`}>
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
                <Text style={tw`text-sm opacity-50`}></Text>
              </Text>
              <Text style={tw`text-xl font-bold`}>₱ {total.toFixed(2)}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
