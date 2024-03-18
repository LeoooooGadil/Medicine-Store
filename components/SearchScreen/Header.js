import { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import tw from "twrnc";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import SearchProductsList from "./ProductsList";

export default function SearchScreenHeader({ GoToCart }) {
  const [isSearchWindowOpen, setIsSearchWindowOpen] = useState(false);

  const ToggleSearchWindow = () => {
    setIsSearchWindowOpen(!isSearchWindowOpen);
  };

  return (
    <>
      {isSearchWindowOpen ? (
        <SearchWindow ToggleSearchWindow={ToggleSearchWindow} />
      ) : (
        <ResultWindow
          ToggleSearchWindow={ToggleSearchWindow}
          GoToCart={GoToCart}
        />
      )}
    </>
  );
}

function SearchWindow({ ToggleSearchWindow }) {
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
            />
          </View>
        </View>
      </View>
    </View>
  );
}

function ResultWindow({ ToggleSearchWindow, GoToCart }) {
  return (
    <View style={tw`pb-50`}>
      <View style={tw`px-8 pt-10 pb-3 gap-4`}>
        <View style={tw`flex-row items-center justify-between`}>
          <View style={tw`flex-row justify-center items-center`}>
            <Text style={tw`text-3xl font-bold`}>Phil</Text>
            <Text style={tw`text-3xl`}>Box</Text>
            <Text style={tw`text-3xl font-bold text-[${Colors.SunsetOrange}]`}>
              💊
            </Text>
          </View>
          <View style={tw`flex-row items-center`}>
            <TouchableOpacity style={tw`p-1`}>
              <Ionicons name="call-outline" size={25} />
            </TouchableOpacity>
            <TouchableOpacity style={tw`p-1`} onPress={GoToCart}>
              <Ionicons name="cart-outline" size={25} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={tw`pt-2`}>
          <TouchableOpacity
            style={tw`relative w-full flex-row items-center gap-3 bg-[${Colors.BrightGray}] rounded-xl shadow-md h-12`}
            onPress={ToggleSearchWindow}
          >
            <Ionicons name="search" size={20} style={tw`pl-3 py-3`} />
            <Text style={tw`text-lg font-semibold mr-15 opacity-50`}>
              Search your medicine
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <SearchProductsList />
    </View>
  );
}
