import {
  View,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import tw from "twrnc";
import Colors from "../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default function ResultWindow({
  ToggleSearchWindow,
  SearchedResult,
  SetSearch,
}) {
  return (
    <View>
      <View style={tw`px-8 gap-4`}>
        <View style={tw`pt-3 pb-3 flex-row gap-2`}>
          <LinearGradient
            colors={[Colors.DarkOrange, Colors.LightBlue]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={tw`rounded-2xl shadow-md p-0.7 flex-1 h-13.5`}
          >
            <TouchableWithoutFeedback onPress={ToggleSearchWindow}>
              <View
                style={tw`flex-1 flex-row items-center gap-3 bg-[${Colors.White}] rounded-xl `}
              >
                <Ionicons name="search" size={20} style={tw`pl-3 py-3`} />
                <Text
                  style={tw`flex-1 font-semibold mr-15 ${
                    SearchedResult?.SearchTerm.length > 0 ? null : "opacity-50"
                  }`}
                >
                  {SearchedResult?.SearchTerm.length > 0
                    ? SearchedResult?.SearchTerm
                    : "Search your medicine"}
                </Text>
                {SearchedResult?.SearchTerm.length > 0 && (
                  <TouchableOpacity
                    style={tw`pr-3 py-3`}
                    onPress={() => SetSearch("")}
                  >
                    <Ionicons name="close-outline" size={20} />
                  </TouchableOpacity>
                )}
              </View>
            </TouchableWithoutFeedback>
          </LinearGradient>
        </View>
      </View>
    </View>
  );
}
