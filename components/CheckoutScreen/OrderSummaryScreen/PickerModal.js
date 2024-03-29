import { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import tw from "twrnc";
import Colors from "../../../constants/Colors";

const Addresses = [
  {
    id: 1,
    title: "Home",
    address: "123, Main Street, New York, USA",
  },
  {
    id: 2,
    title: "Work",
    address: "456, Park Avenue, New York, USA",
  },
  {
    id: 3,
    title: "Other",
    address: "789, Broadway, New York, USA",
  },
];

export default function PickerModal() {
  const [selected, setSelected] = useState("Home");

  const selectAddress = (title) => {
	setSelected(title);
  };

  return (
    <View style={tw`h-full`}>
      <Text style={tw`text-lg font-bold px-8`}>Select Address</Text>
      <ScrollView style={tw`px-8`} contentContainerStyle={tw`py-4 gap-2`}>
        {Addresses.map((item) => (
          <LocationItem
            key={item.id}
            item={item}
            selected={selected === item.title}
			onPress={() => selectAddress(item.title)}
          />
        ))}
      </ScrollView>
    </View>
  );
}

function LocationItem({ item, selected, onPress }) {
  return (
    <TouchableOpacity
      style={tw`bg-[${Colors.White}] p-4 py-3 gap-2 rounded-xl shadow-md flex-row justify-between items-center`}
	  onPress={onPress}
    >
      <View style={tw`flex-col flex-1`}>
        <Text style={tw`text-lg font-bold`}>{item.title}</Text>
        <View>
          <Text style={tw`text-sm text-gray-500`}>{item.address}</Text>
        </View>
      </View>
      {/* radiobutton */}
      <View>
        <View
          style={tw`w-4 h-4 border-2 border-[${Colors.AlizarinCrimson}] rounded-full flex items-center justify-center`}
        >
          {selected && (
            <View
              style={tw`w-2 h-2 bg-[${Colors.AlizarinCrimson}] rounded-full`}
            ></View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
}
