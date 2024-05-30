import { View, Text } from "react-native";
import tw from "twrnc";
import SummaryItem from "./SummaryItem";
import { useAuthentication } from "../../../hooks/useAuthentication";

export default function Summary({ cartItems }) {
  const { currentUser } = useAuthentication();

  console.log("cartItems", cartItems);

  const subTotal = cartItems.reduce(
    (acc, item) => acc + item.item.price * item.quantity,
    0
  );
  const shippingFee = 50;
  const convenienceFee = subTotal * 0.1;
  const seniorDiscount = (subTotal + convenienceFee + shippingFee) * 0.2;
  const total = subTotal + convenienceFee + shippingFee - seniorDiscount;

  return (
    <View style={tw`mt-7`}>
      <View style={tw`mx-8`}>
        <Text style={tw`text-lg font-bold text-gray-800`}>Orders</Text>
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
            {!currentUser?.data?.isSeniorCitizen ? (
              <>
                <View style={tw`flex-row justify-between items-center`}>
                  <Text>Shipping Fee</Text>
                  <Text style={tw`font-bold`}>₱ {shippingFee.toFixed(2)}</Text>
                </View>
                <View style={tw`flex-row justify-between items-center`}>
                  <Text>Convenience Fee</Text>
                  <Text style={tw`font-bold`}>
                    ₱ {convenienceFee.toFixed(2)}
                  </Text>
                </View>
                <View style={tw`flex-row justify-between items-center`}>
                  <Text>Senior Discount</Text>
                  <Text style={tw`font-bold`}>
                    ₱ {seniorDiscount.toFixed(2)}
                  </Text>
                </View>
              </>
            ) : (
              <>
                <View style={tw`flex-row justify-between items-center`}>
                  <Text>Shipping Fee</Text>
                  <Text style={tw`font-bold`}>₱ 0</Text>
                </View>
                <View style={tw`flex-row justify-between items-center`}>
                  <Text>Convenience Fee</Text>
                  <Text style={tw`font-bold`}>
                    ₱ 0
                  </Text>
                </View>
                <View style={tw`flex-row justify-between items-center`}>
                  <Text>Senior Discount</Text>
                  <Text style={tw`font-bold`}>
                    ₱ 0
                  </Text>
                </View>
              </>
            )}
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
