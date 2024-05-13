import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";
import Colors from "../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";

export default function AddressBookList({
  addresses,
  onSelectAddress,
  onEditAddress,
  onDeleteAddress,
}) {
  return (
    <View style={tw`mx-8 gap-4 mt-10`}>
      <TouchableOpacity
        style={tw`bg-[${Colors.White}] p-4 py-3 gap-2 rounded-xl shadow-md flex-row justify-between items-center`}
        onPress={() => {}}
      >
        <Ionicons name="location-sharp" size={24} color="black" />
        <View style={tw`flex-col flex-1`}>
          <Text style={tw`text-lg font-bold`}>Home</Text>
          <View>
            <Text style={tw`text-sm text-gray-500`}>
              123, Main Street, New York, USA
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}
