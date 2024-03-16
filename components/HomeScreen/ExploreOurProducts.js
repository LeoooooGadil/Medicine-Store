import { View, TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import tw from "twrnc";
import Colors from "../../constants/Colors";

export default function ExploreOurProducts() {
  return (
    <View style={tw`flex flex-col items-start justify-center px-8 pb-2`}>
      <View style={tw`flex-row justify-between items-center w-full`}>
        <Text style={tw`text-2xl font-bold`}>Explore Our Products</Text>
        <TouchableOpacity style={tw`flex-row gap-1 items-center`}>
          <Text style={tw`text-[${Colors.SunsetOrange}]`}>View All</Text>
          <Ionicons
            name="chevron-forward-outline"
            color={Colors.SunsetOrange}
            size={15}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
