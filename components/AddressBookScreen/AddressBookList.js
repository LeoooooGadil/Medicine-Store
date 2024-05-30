import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";
import Colors from "../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";

export default function AddressBookList({
  addresses,
  SetSelectedAddress,
}) {
  return (
    <View style={tw`mx-8 gap-4 mt-10`}>
      {addresses.map((address) => (
        <AddressListItem
          key={address.id}
          address={address}
          onEditAddress={(address) => SetSelectedAddress(address)}
        />
      ))}
    </View>
  );
}

function AddressListItem({ address, onEditAddress }) {
  return (
    <View style={tw`flex-row justify-between items-center bg-white rounded-xl border border-[${Colors.Alto}] p-4`}>
      <View style={tw`flex-1`}>
        <Text style={tw`text-lg font-bold`}>{address.AddressType === "Other" ? address.AddressTypeOther : address.AddressType}</Text>
        <Text style={tw`text-gray-500 uppercase`}>{address.AddressLine1}</Text>
        <Text style={tw`text-gray-500 uppercase`}>{address.AddressLine2}</Text>
        <View style={tw`flex-row gap-1`}>
        <Text style={tw`text-gray-500 uppercase`}>{address.Region}</Text>
        <Text style={tw`text-gray-500 uppercase`}>{address.City}</Text>
        <Text style={tw`text-gray-500 uppercase`}>{address.ZipCode}</Text>
        </View>
      </View>
      <TouchableOpacity onPress={() => onEditAddress(address)}>
        <Ionicons name="pencil" size={24} color={Colors.Gray} />
      </TouchableOpacity>
    </View>
  )
}
