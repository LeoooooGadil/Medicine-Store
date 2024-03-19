import { View, Text, TouchableOpacity } from "react-native";
import tw from "twrnc";
import Colors from "../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import SearchProductsList from "./SearchProductsList";

export default function ResultWindow({ ToggleSearchWindow, GoToCart }) {
	return (
	  <View style={tw`pb-50`}>
		<View style={tw`px-8 pt-10 pb-3 gap-4`}>
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
		  <View style={tw`pt-2`}>
			<TouchableOpacity
			  style={tw`relative w-full flex-row items-center gap-3 bg-[${Colors.BrightGray}] rounded-xl shadow-md h-12`}
			  onPress={ToggleSearchWindow}
			>
			  <Ionicons name="search" size={20} style={tw`pl-3 py-3`} />
			  <Text style={tw`text-lg font-semibold mr-15 opacity-50`}>
				Search your medicine
			  </Text>
			</TouchableOpacity>
		  </View>
		</View>
		<SearchProductsList />
	  </View>
	);
  }