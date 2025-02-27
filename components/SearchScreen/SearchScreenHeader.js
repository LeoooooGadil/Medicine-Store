import { View, Text, TouchableOpacity, Image } from "react-native";
import tw from "twrnc";
import { Ionicons } from "@expo/vector-icons";
import { useCart } from "../../context/cartContext";
import Colors from "../../constants/Colors";

export default function SearchScreenHeader({ GoToCart }) {
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

  // simulate a full queue call a pharma so that the user can't call a pharma
  const CallAPharmaFullQueue = () => {
    Alert.alert("Call a Pharma", "Call a Pharma now!", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Call",
        onPress: () =>
          Alert.alert("Call a Pharma", "The queue is full. Please try again later."),
      },
    ]);
  }

  return (
    <View
      style={[tw`px-8 pb-4 h-16 bg-[${Colors.BrightGray}]`]}
    >
      <View style={tw`flex-row items-center justify-between`}>
        <View style={tw`flex-row justify-center items-center gap-2`}>
          <Image
            source={require("../../assets/images/philcure-logo-revised.png")}
            style={{
              width: 120,
              height: 60,
              resizeMode: "contain",
            }}
          />
        </View>
        <View style={tw`flex-row items-center`}>
          <TouchableOpacity style={tw`p-1`}
            onPress={CallAPharmaFullQueue}
          >
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
