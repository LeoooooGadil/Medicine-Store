import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import tw from "twrnc";
import Colors from "../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";

export default function SearchWindow({
  ToggleSearchWindow,
  SetSearch,
}) {
  const [searchText, setSearchText] = useState("");

  const textInputRef = useRef();

  const onPress = () => {
    Keyboard.dismiss();
    setSearchText("");
    ToggleSearchWindow();
  };

  const onSearch = () => {
    ToggleSearchWindow();
  }

  useEffect(() => {
    textInputRef.current.focus();
  }, []);

  useEffect(() => {
    SetSearch(searchText);
  }, [searchText]);

  return (
    <View>
      <View style={tw`px-8`}>
        <View style={tw`pt-2 pb-3`}>
          <View
            style={tw`flex-row bg-[${Colors.BrightGray}] rounded-xl shadow-md h-12`}
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
              style={tw`font-semibold w-60`} // theres something wrong here
              textAlignVertical="center"
              placeHolder="Search your medicine"
              onChangeText={(text) => setSearchText(text)}
              onSubmitEditing={onSearch}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
