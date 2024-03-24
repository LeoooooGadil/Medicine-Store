import { View, Text, TouchableOpacity, Image } from "react-native";
import tw from "twrnc";
import { Ionicons } from "@expo/vector-icons";
import { useCart } from "../../context/cartContext";
import Colors from "../../constants/Colors";

export default function SearchScreenHeader({ GoToCart }) {
  const { cartItems } = useCart();

  return (
    <View style={tw`px-8 pb-4 pt-2 h-13 bg-[${Colors.BrightGray}]`}>
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
        </View>
      </View>
    </View>
  );
}
