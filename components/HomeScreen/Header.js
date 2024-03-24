import {
  View,
  Text,
  Image,
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
    <View style={tw`px-8 pb-3 gap-4 h-13 bg-[${Colors.BrightGray}]`}>
      <View style={tw`flex-row items-center justify-between`}>
        <View style={tw`flex-row justify-center items-center gap-2`}>
          <Image
            source={require("../../assets/images/philcure-logo.png")}
            style={{
              width: 40,
              height: 40,
              resizeMode: "contain",
            }}
          />
          <View style={tw`flex-row`}>
            <Text style={tw`font-bold text-2xl tracking-wide`}>PHIL</Text>
            <Text style={tw`text-2xl tracking-wide`}>CURE</Text>
          </View>
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
    </View>
  );
}
