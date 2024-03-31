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
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

export default function SearchWindow({ ToggleSearchWindow, SetSearch }) {
  const [searchText, setSearchText] = useState("");

  const textInputRef = useRef();

  const onPress = () => {
    Keyboard.dismiss();
    setSearchText("");
    ToggleSearchWindow();
  };

  const onSearch = () => {
    ToggleSearchWindow();
  };

  useEffect(() => {
    textInputRef.current.focus();
  }, []);

  useEffect(() => {
    SetSearch(searchText);
  }, [searchText]);

  return (
    <View>
      <View style={tw`px-8 `}>
        <View style={tw`pt-2 pb-3`}>
          <LinearGradient
            colors={[Colors.AlizarinCrimson, Colors.Froly, Colors.ApricotPeach, Colors.SinBad, Colors.WedgeWood]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={tw`rounded-2xl shadow-md p-0.7 flex-1 h-13.5`}
          >
            <View
              style={tw`flex-1 flex-row bg-[${Colors.White}] rounded-xl shadow-md items-center gap-1`}
            >
              <TouchableOpacity onPress={onPress}>
                <Ionicons
                  name="chevron-back-outline"
                  size={20}
                  style={tw`pl-3 pr-2 py-3`}
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
          </LinearGradient>
        </View>
      </View>
    </View>
  );
}
