import { View, Text, TouchableOpacity } from "react-native";
import tw from "twrnc";
import Colors from "../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";

export default function ResultWindow({
  ToggleSearchWindow,
  SearchedResult,
  SetSearch,
}) {
  return (
    <View>
      <View style={tw` px-8 pb-3 gap-4`}>
        <View style={tw`pt-2 flex-row gap-2`}>
          <TouchableOpacity
            style={tw`relative flex-1 flex-row items-center gap-3 bg-[${Colors.BrightGray}] rounded-xl shadow-md h-12`}
            onPress={ToggleSearchWindow}
          >
            <Ionicons name="search" size={20} style={tw`pl-3 py-3`} />
            <Text
              style={tw`text-lg font-semibold mr-15 ${
                SearchedResult?.SearchTerm.length > 0 ? null : "opacity-50"
              }`}
            >
              {SearchedResult?.SearchTerm.length > 0
                ? SearchedResult?.SearchTerm
                : "Search your medicine"}
            </Text>
          </TouchableOpacity>
          {SearchedResult?.SearchTerm.length > 0 && (
            <TouchableOpacity
              style={tw`flex-row items-center gap-3 bg-[${Colors.SunsetOrange}] rounded-xl shadow-md h-12 px-4`}
              onPress={() => SetSearch("")}
            >
              <Ionicons name="close-outline" size={25} color={Colors.BrightGray} />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
}
