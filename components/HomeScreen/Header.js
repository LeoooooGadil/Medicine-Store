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

export default function HomeScreenHeader({ GoToCart }) {
  const { cartItems } = useCart();

  const shadowStyle = {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 15,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  };

  return (
    <View
      style={[tw`px-8 pb-3 pt-2 gap-4 h-16 bg-[${Colors.White}]`, shadowStyle]}
    >
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
            <Text style={tw`font-bold text-3xl tracking-wide`}>Phil</Text>
            <Text style={tw`text-3xl tracking-wide`}>Cure</Text>
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
