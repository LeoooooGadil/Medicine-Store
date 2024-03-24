import React from "react";
import { Text, View, TouchableWithoutFeedback } from "react-native";
import tw from "twrnc";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";

export default function SearchBar({ GoToSearch }) {
  return (
    <View style={tw`px-8 pt-1 pb-3`}>
      <View style={tw`pt-2 flex-row `}>
        <LinearGradient
          colors={["#DA1212", "#041562"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={tw`rounded-2xl shadow-md p-0.7 flex-1 h-13.5`}
        >
          <TouchableWithoutFeedback onPress={GoToSearch}>
            <View
              style={tw`flex-1 flex-row items-center gap-3 bg-[${Colors.White}] rounded-xl `}
            >
              <Ionicons name="search" size={20} style={tw`pl-3 py-3`} />
              <Text style={tw`font-semibold opacity-50`}>
                Search your medicine
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </LinearGradient>
      </View>
    </View>
  );
}
