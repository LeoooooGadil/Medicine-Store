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
      ${isList ? (ListLocation == 0 ? "mr-1" : "ml-1") + " mb-3" : "mx-2"}
      ${
        isFeatured && FeaturedLocation == 0
          ? "ml-8"
          : isFeatured && FeaturedLocation == 2
          ? "mr-8"
          : ""
      }
    `;
  };

  const OpenItem = () => {
    SetCurrentItem(item);
    OpenBottomSheet(item);
  };

  return (
    <TouchableOpacity
      style={tw`flex-col bg-[${
        Colors.White
      }] rounded-xl shadow-md items-start justify-center gap-1 ${styles()}`}
      onPress={() => OpenItem()}
    >
      <View
        style={tw`w-40 h-36 bg-[${Colors.YaleBlue}] rounded-t-xl shadow-md justify-center items-center`}
      >
        <Text style={tw`text-2xl text-[${Colors.White}]`}>Image</Text>
      </View>
      <View style={tw`px-3 pb-2`}>
        <Text style={tw`text-lg font-bold`}>{item.name}</Text>
        <View>
          <View>
            <Text>{item.dosage}ml</Text>
          </View>
        </View>
        <Text style={tw`font-bold`}>₱{item.price}</Text>
      </View>
    </TouchableOpacity>
  );
}
