import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import tw from "twrnc";
import { TouchableOpacity } from "react-native-gesture-handler";
import CartItem from "./CartItem";
import Colors from "../../constants/Colors";

export default function CartItemsList({ cartItems, GoToSearchScreen }) {
  if (cartItems.length === 0) {
    return (
      <View style={tw`px-8 py-2 items-center justify-center w-full h-80 gap-6`}>
        <Text style={tw`font-bold opacity-25`}>No Items In Cart</Text>
        <TouchableOpacity
            style={tw`bg-[${Colors.Lava}] rounded-lg p-3`}
            onPress={GoToSearchScreen}
          >
            <Text style={tw`text-white text-center`}>Browse Products</Text>
          </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={tw`px-8 pt-10 flex-col gap-3`}>
      {cartItems.map((_item, index) => {
        // item has an item and quantity property
        // sometimes the item has an item property and sometimes it doesnt so we need to check
        // sometimes the item has an item property and inside it has the item object

        let item = _item.item
          ? _item.item.item
            ? _item.item.item
            : _item.item
          : _item;
        let quantity = _item.quantity;
        console.log("item: ", item);

        return (
          <CartItem key={index} item={item} quantity={quantity} index={index} />
        );
      })}
    </View>
  );
}
