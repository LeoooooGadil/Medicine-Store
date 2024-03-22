import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import tw from "twrnc";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

import { useCart } from "../../context/cartContext";
import Colors from "../../constants/Colors";

export default function HomeScreenHeader({ GoToSearch, GoToCart }) {
  const { cartItems } = useCart();

  return (
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
            <Ionicons
              name={`cart${cartItems.length == 0 ? "-outline" : ""}`}
              size={25}
            />
          </TouchableOpacity>
          {/* <TouchableOpacity style={tw`pl-4`}>
            <Ionicons name="person-outline" size={25} />
          </TouchableOpacity> */}
        </View>
      </View>
      <View style={tw`pt-2 flex-row`}>
        <LinearGradient
          colors={["#DA1212", "#041562"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={tw`rounded-2xl shadow-md p-0.7 flex-1 h-13.5`}
        >
          <TouchableWithoutFeedback onPress={GoToSearch}>
            <View
              style={tw`flex-1 flex-row items-center gap-3 bg-[${Colors.White}] rounded-xl `}
            >
              <Ionicons name="search" size={20} style={tw`pl-3 py-3`} />
              <Text style={tw`font-semibold opacity-50`}>
                Search your medicine
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </LinearGradient>
      </View>
    </View>
  );
}
