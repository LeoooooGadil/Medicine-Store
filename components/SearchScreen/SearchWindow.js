import React, { useState, useEffect, useRef } from "react";
import { View, Text, TextInput, TouchableOpacity, Keyboard } from "react-native";
import tw from "twrnc";
import Colors from "../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";

export default function SearchWindow({ ToggleSearchWindow }) {
  const [searchText, setSearchText] = useState("");

  const textInputRef = useRef();

  const onPress = () => {
    Keyboard.dismiss();
    ToggleSearchWindow();
  };

  useEffect(() => {
    textInputRef.current.focus();
  }, []);

  return (
    <View>
      <View style={tw`px-8`}>
        <View style={tw`pt-2`}>
          <View
            style={tw`relative w-full flex-row items-center bg-[${Colors.BrightGray}] rounded-xl shadow-md h-12`}
          >
            <TouchableOpacity onPress={onPress}>
              <Ionicons
                name="chevron-back-outline"
                size={20}
                style={tw`pl-3 pr-3 py-3`}
              />
            </TouchableOpacity>
            <TextInput
              ref={textInputRef}
              style={tw`text-lg font-semibold mr-15`} // theres something wrong here
              textAlign="center"
              placeHolder="Search your medicine"
              onChangeText={(text) => setSearchText(text)}
            />
          </View>
        </View>
        {searchText && (
          <View style={tw`pt-4 flex-row`}>
            <Text style={tw`text-xl`}> Searching For: </Text>
            <Text style={tw`text-xl font-bold`}>{searchText}</Text>
          </View>
        )}
      </View>
    </View>
  );
}
