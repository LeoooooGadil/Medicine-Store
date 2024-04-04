import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import tw from "twrnc";
import Colors from "../../../constants/Colors";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useCheckout } from "../../../context/checkoutContext";
import { useEffect } from "react";

export default function OrderConfirmationHero({ navigation }) {
  const { orderSummary, orderConfirmation } = useCheckout();

  useEffect(() => {
    orderConfirmation();
  }, []);

  return (
    <View style={tw`mx-8`}>
      <View style={tw`flex items-center justify-center mt-8 relative`}>
        <MaterialIcons
          name="verified"
          size={100}
          color={Colors.AlizarinCrimson}
        />
      </View>
      <View style={tw`flex items-start items-center justify-center mt-8`}>
        <Text style={tw`text-4xl font-bold`}>Thank you for your</Text>
        <Text style={tw`text-4xl font-bold`}>purchase!</Text>
      </View>
      <View style={tw`flex items-start items-center justify-center mt-8`}>
        <Text style={tw`text-lg text-center opacity-50`}>
          Your order has been recieved and will be delivered to you soon.
        </Text>
      </View>
      <View style={tw`flex-row gap-2 flex items-center justify-center mt-18`}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <View
            style={tw`flex items-center justify-center shadow-md rounded-xl w-36 h-12`}
          >
            <Text style={tw`text-black text-lg`}>Return Home</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Orders")}>
          <View
            style={tw`flex items-center justify-center bg-[${Colors.AlizarinCrimson}] shadow-md rounded-xl w-36 h-12`}
          >
            <Text style={tw`text-white text-lg`}>Track Order</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={tw`flex items-start items-center justify-center mt-8`}>
        <Text style={tw`text-lg text-center opacity-50`}>
          Order ID:
          <Text style={tw`text-black font-bold`}>{orderSummary.id}</Text>
        </Text>
      </View>
    </View>
  );
}
