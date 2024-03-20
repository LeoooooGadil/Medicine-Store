import { View, Text, TouchableOpacity } from "react-native";
import tw from "twrnc";

import Colors from "../constants/Colors";

export default function ItemContainer(props) {
  const {
    item,
    OpenBottomSheet,
    SetCurrentItem,
    isFeatured = false,
    isList = false,
    FeaturedLocation = 1,
    ListLocation = 0,
  } = props;

  const styles = () => {
    return `
      ${isList ? "pb-5" : "px-2"}
      ${isFeatured && FeaturedLocation == 0 ? "pl-8" : isFeatured && FeaturedLocation == 2 ? "pr-8" : ""}
      ${isList && ListLocation == 0 ? "pr-5" : "pl-5"} 
    `;
  };

  const OpenItem = () => {
    SetCurrentItem(item);
    OpenBottomSheet(item);
  };

  return (
    <TouchableOpacity
      style={tw`flex-col items-start justify-center gap-1 ${styles()}`}
      onPress={() => OpenItem()}
    >
      <View
        style={tw`w-36 h-36 bg-[${Colors.LavenderBlue}] rounded-xl justify-center items-center`}
      >
        <Text>Image</Text>
      </View>
      <View style={tw`px-1`}>
        <Text style={tw`text-lg font-bold`}>{item.name}</Text>
        <View>
          <View>
            <Text>{item.dosage}ml</Text>
          </View>
        </View>
        <Text style={tw`text-sm font-bold`}>₱{item.price}</Text>
      </View>
    </TouchableOpacity>
  );
}
