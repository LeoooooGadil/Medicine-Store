import { View, Text, TouchableOpacity, Image } from "react-native";
import tw from "twrnc";

import Colors from "../constants/Colors";
import ProductImages from "../assets/images/medicine";

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
      }] rounded-xl shadow-md items-start justify-between gap-1 ${styles()} mb-2 w-40`}
      onPress={() => OpenItem()}
    >
      <View
        style={tw`w-full h-36 p-2 rounded-t-xl justify-center items-center`}
      >
        {item?.imageUrl != null ? (
          <Image source={ProductImages[item?.imageUrl]} style={tw`w-full h-full rounded-t-xl`} />
        ) : (
          <Text style={tw`text-white text-4xl`}>📷</Text>
        )}
      </View>
      <View style={tw`px-3 pb-3 w-full`}>
        <Text style={tw`text-lg font-bold`}>{
          item?.name.length > 13 ? item?.name.slice(0, 14) + ".." : item?.name
        }</Text>
        <View style={tw`flex-row justify-between items-center`}>
          <View style={tw`relative pb-1 pt-3 justify-center`}>
            <View
              style={tw`absolute p-1 px-2 rounded-xl bg-[${Colors.SinBad}]`}
            >
              <Text style={tw`text-white`}>
                {item?.dosage}
                {item?.dosageType}
              </Text>
            </View>
          </View>
          <Text>₱{item?.price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
