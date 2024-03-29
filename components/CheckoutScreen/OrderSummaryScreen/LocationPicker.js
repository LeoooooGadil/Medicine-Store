import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import tw from "twrnc";
import Colors from "../../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";

const Addresses = [
  {
    id: 1,
    title: "Home",
    address: "123, Main Street, New York, USA",
  },
  {
    id: 2,
    title: "Work",
    address: "456, Park Avenue, New York, USA",
  },
  {
    id: 3,
    title: "Other",
    address: "789, Broadway, New York, USA",
  },
];

export default function LocationPicker({ openLocationPicker }) {
  const [selectedAddress, setSelectedAddress] = useState(Addresses[0]);

  return (
    <View style={tw`mx-8 gap-1 mt-10`}>
      <View>
        <Text style={tw`text-lg font-bold text-gray-800`}>
          Delivery Address
        </Text>
      </View>
      <View>
        <View>
          <LocationItem item={selectedAddress} onPress={openLocationPicker} />
        </View>
      </View>
    </View>
  );
}

function LocationItem({ item, onPress }) {
  return (
    <TouchableOpacity
      style={tw`bg-[${Colors.White}] p-4 py-3 gap-2 rounded-xl shadow-md flex-row justify-between items-center`}
      onPress={onPress}
    >
      <Ionicons name="location-sharp" size={24} color="black" />
      <View style={tw`flex-col flex-1`}>
        <Text style={tw`text-lg font-bold`}>{item.title}</Text>
        <View>
          <Text style={tw`text-sm text-gray-500`}>{item.address}</Text>
        </View>
      </View>
      <Ionicons
        name="chevron-forward"
        size={20}
        color={Colors.AlizarinCrimson}
      />
    </TouchableOpacity>
  );
}
