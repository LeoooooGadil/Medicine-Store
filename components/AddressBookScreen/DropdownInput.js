import React, { useState, useRef } from "react";
import { View, Text, TouchableOpacity, Modal, FlatList } from "react-native";
import tw from "twrnc";
import Colors from "../../constants/Colors";
import { AntDesign } from "@expo/vector-icons";
import BottomSheetModal from "./BottomSheetModal";

export default function DropdownInput({
  label,
  placeholder,
  value,
  onSelect,
  options,
  error,
  containerStyle,
}) {
  const [selectedValue, setSelectedValue] = useState(value);

  const toggleModal = () => {
    openBottomSheet();
  };

  const handleSelect = (item) => {
    setSelectedValue(item);
    if (onSelect) onSelect(item);
    toggleModal();
  };

  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const bottomSheetModalRef = useRef(null);

  const openBottomSheet = () => {
    setIsBottomSheetOpen(true);
    bottomSheetModalRef.current?.snapToIndex(0);
  };

  return (
    <View style={[tw`mx-8 mt-3`, containerStyle]}>
      {label ? <Text style={tw`text-lg mb-2 ml-1`}>{label}</Text> : null}
      <TouchableOpacity
        style={tw`w-full h-14 pr-4 justify-center border border-[${Colors.Alto}] bg-[${Colors.White}] rounded-xl`}
        onPress={toggleModal}
      >
        <Text style={tw`ml-4 text-gray-600`}>
          {selectedValue ? selectedValue.label : placeholder}
        </Text>
        <AntDesign
          name="caretdown"
          size={13}
          color={Colors.Gray}
          style={tw`absolute right-4`}
        />
      </TouchableOpacity>
      {error && (
        <View style={tw`flex-row items-center mt-2`}>
          <AntDesign name="exclamationcircle" size={16} color={Colors.Error} />
          <Text style={tw`text-sm text-red-500 ml-2`}>{error}</Text>
        </View>
      )}
    </View>
  );
}

function Dropdown({ options, selectedValue, handleSelect }) {
  return (
    <View style={tw`bg-white flex-1 shadow-lg rounded-2xl`}>
      <FlatList
        data={options}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={[
              tw`px-4 py-3 flex-row justify-between items-center mx-8 rounded-xl shadow-md`,
              selectedValue &&
                selectedValue.value === item.value &&
                tw`bg-gray-100`,
              index === 0 && tw`mt-4`,
            ]}
            onPress={() => handleSelect(item)}
          >
            <Text
              style={[
                tw`text-gray-600 text-xl`,
                selectedValue &&
                  selectedValue.value === item.value &&
                  tw`font-bold`,
              ]}
            >
              {item.label}
            </Text>
            <Text style={tw`text-gray-400 text-sm`}>{item.AnotherLabel}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}
