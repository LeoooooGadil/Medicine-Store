import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";
import Colors from "../../constants/Colors";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";

export default function AddressBookHeader({
	GoBack
}) {
  return (
    <View style={tw`px-8 pt-3 flex-row justify-between items-center h-10`}>
      <View style={tw`flex-row items-center gap-4`}>
        <TouchableOpacity style={tw``} onPress={GoBack}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <Text style={tw`text-3xl font-bold`}>Address Book</Text>
      </View>
      <View style={tw`flex-row items-center gap-4`}>
        <TouchableOpacity style={tw``} onPress={() => {}}>
          <MaterialCommunityIcons
            name="plus"
            size={25}
            color={Colors.AlizarinCrimson}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
