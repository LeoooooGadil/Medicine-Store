import { View, Text, TouchableOpacity } from "react-native";
import tw from "twrnc";
import Colors from "../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";

export default function SearchScreenHeader({ GoToCart }) {
  return (
    <View style={tw`px-8 pt-10 pb-4`}>
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
    </View>
  );
}
