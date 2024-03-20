import { useState, useEffect, useRef, forwardRef } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import tw from "twrnc";
import Colors from "../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import Seperator from "../Seperator";

export default function ItemCard({ item }) {
  return (
    <View>
      <View
        style={tw`w-full h-42 bg-[${Colors.LavenderBlue}] justify-center items-center`}
      >
        <Text>Image</Text>
      </View>
      <View style={tw`px-8 gap-2`}>
        <View style={tw`py-2 pb-0`}>
          <Text style={tw`opacity-50 text-lg`}>{item?.brandName}</Text>
          <Text style={tw`font-bold text-4xl`}>{item?.name}</Text>
        </View>
        <View style={tw`relative pb-4`}>
          <View
            style={tw`absolute p-1 px-2 rounded-xl bg-[${Colors.SunsetOrange}]`}
          >
            <Text style={tw`text-white`}>{item?.dosage}ml</Text>
          </View>
        </View>
        <Seperator />
        <Text>
          {item?.category.map((category, index) => {
            if (index === item?.category.length - 1) {
              return category;
            } else {
              return category + ", ";
            }
          })}
        </Text>
        <Seperator />
        <View>
          <Text>{item?.description}</Text>
        </View>
        <Seperator />
        <Text>{item?.manufacturer}</Text>
      </View>
    </View>
  );
}
