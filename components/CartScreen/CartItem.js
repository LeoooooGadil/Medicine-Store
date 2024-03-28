import React, { useState, useEffect, useRef } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import tw from "twrnc";
import { useCart } from "../../context/cartContext";
import Colors from "../../constants/Colors";
import { Ionicons, Feather } from "@expo/vector-icons";

export default function CartItem({ item, quantity, index }) {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [_quantity, setQuantity] = useState(quantity);

  const { updateCartItem, removeCartItem } = useCart();

  const toggleSettings = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };

  const handleQuantityChange = (value) => {
    if (value < 1) return;
    setQuantity(value);

    updateCartItem(item, value);
  };

  const handleRemoveItem = () => {
    Alert.alert(`Remove ${item?.name}`, `Are you sure you want to remove ${item?.name}?`, [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Remove",
        onPress: () => {
          removeCartItem(item);
        },
      },
    ]);
  };

  return (
    <TouchableOpacity
      style={tw`rounded-xl shadow-md bg-white`}
      key={index}
      onPress={toggleSettings}
    >
      <View
        style={tw`p-4 ${
          isSettingsOpen ? "pb-4" : ""
        } flex-row justify-between items-center`}
      >
        <View style={tw`flex-row gap-3 items-center`}>
          <View style={tw`flex-row items-center`}>
            <Text style={tw`text-xl`}>{_quantity}</Text>
            <Text style={tw`text-lg opacity-30`}>x</Text>
          </View>
          <Text style={tw`font-bold`}>{item.name}</Text>
        </View>
        <View>
          <Text style={tw`font-bold opacity-75`}>₱ {item.price}</Text>
        </View>
      </View>
      {isSettingsOpen && (
        <View>
          <View style={tw`h-0.3 bg-gray-200 rounded-lg mx-4`}></View>
          <CartSettings
            quantity={_quantity}
            handleQuantityChange={handleQuantityChange}
            handleRemoveItem={handleRemoveItem}
          />
        </View>
      )}
    </TouchableOpacity>
  );
}

// add a bottom
function CartSettings({ quantity, handleQuantityChange, handleRemoveItem }) {
  const inputRef = useRef();

  return (
    <>
      <View style={tw`px-4 flex-row justify-between items-center`}>
        <View>
          <View style={tw`flex-row`}>
            <TouchableOpacity
              style={tw`p-3 pl-0 rounded-lg justify-center items-center`}
              onPress={() => handleQuantityChange(quantity - 1)}
            >
              <Feather name="minus" size={18} color="black" />
            </TouchableOpacity>
            <View style={tw`justify-center items-center w-6`}>
              <Text ref={inputRef}>{quantity}</Text>
            </View>
            <TouchableOpacity
              style={tw`p-3 rounded-lg justify-center items-center`}
              onPress={() => handleQuantityChange(quantity + 1)}
            >
              <Feather name="plus" size={18} color="black" />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <TouchableOpacity
            style={tw`rounded-lg py-3`}
            onPress={handleRemoveItem}
          >
            <Ionicons name="trash-outline" size={20} color={Colors.DarkOrange} />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
