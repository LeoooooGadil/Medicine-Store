import { View, Text, TouchableOpacity, Alert } from "react-native";
import tw from "twrnc";
import Colors from "../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default function CallAPharmacistButton() {
  const CallAPharmaFullQueue = () => {
    Alert.alert("Call a Pharma", "Call a Pharma now!", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Call",
        onPress: () =>
          Alert.alert(
            "Call a Pharma",
            "The queue is full. Please try again later."
          ),
      },
    ]);
  };

  return (
    <TouchableOpacity
      style={tw`shadow-lg`}
      onPress={() => CallAPharmaFullQueue()}
    >
      <LinearGradient
          colors={[Colors.WedgeWood, Colors.DarkBlue]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={tw`flex-row rounded-xl p-4 mt-2 mx-8 gap-3 items-center`}
        >
      <Ionicons name="call-outline" size={30} color={Colors.LavenderBlue} />
      <View>
        <Text style={tw`text-white text-xl font-bold`}>Call a Pharmacist</Text>
        <Text style={tw`text-white text-sm opacity-50`}>
          Instantly connect with a pharmacist.
        </Text>
      </View>
      </LinearGradient>
    </TouchableOpacity>
  );
}
