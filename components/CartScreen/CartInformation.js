import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import tw from "twrnc";

export default function CartInformation({ cartItems }) {
  const [subTotal, setSubTotal] = useState(0);
  const [shippingFee, setShippingFee] = useState(50);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let subTotal = 0;
    cartItems.forEach((_item) => {
      let item = _item.item
        ? _item.item.item
          ? _item.item.item
          : _item.item
        : _item;
      let quantity = _item.quantity;

      subTotal += item.price * quantity;
    });
    setSubTotal(subTotal);

    let total = subTotal + shippingFee;
    setTotal(total);
  }, [cartItems]);

  if (cartItems.length === 0) {
    return;
  }

  return (
    <View style={tw`px-8 py-4 pt-10 gap-1`}>
      <View style={tw`flex-row justify-between items-center`}>
        <Text style={tw`text-lg`}>Subtotal</Text>
        <Text style={tw`text-lg font-bold`}>₱{subTotal}</Text>
      </View>
      <View style={tw`flex-row justify-between items-center`}>
        <Text style={tw`text-lg`}>Shipping Fee</Text>
        <Text style={tw`text-lg font-bold`}>₱50</Text>
      </View>
      <View style={tw`flex-row justify-between items-center`}>
        <Text style={tw`text-2xl`}>Total</Text>
        <Text style={tw`text-2xl font-bold`}>₱{total}</Text>
      </View>
    </View>
  );
}
