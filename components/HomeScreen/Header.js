import { View, Text, TouchableOpacity } from "react-native";
import tw from "twrnc";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../../constants/Colors";

export default function HomeScreenHeader() {
  return (
    <View style={tw`px-8 pt-10 pb-3 gap-4`}>
      <View style={tw`flex-row items-center justify-between`}>
        <View style={tw`flex-row justify-center items-center`}>
          <Text style={tw`text-3xl font-bold`}>Phil</Text>
          <Text style={tw`text-3xl`}>Box</Text>
          <Text style={tw`text-3xl font-bold text-[${Colors.SunsetOrange}]`}>
            .
          </Text>
        </View>
        <View>
          <TouchableOpacity>
            <Ionicons name="cart-outline" size={30} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={tw`pt-2`}>
        <TouchableOpacity
          style={tw`flex-row items-center gap-3 bg-[${Colors.BrightGray}] rounded-xl p-3 shadow-md`}
        >
          <Ionicons name="search" size={20} />
          <Text style={tw`text-lg font-semibold opacity-50`}>
            Search your medicine
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
