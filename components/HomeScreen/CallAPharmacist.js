import { View, Text, TouchableOpacity, Alert } from "react-native";
import tw from "twrnc";
import Colors from "../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";

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
      style={tw`flex-row bg-[${Colors.WedgeWood}] rounded-xl shadow-lg p-4 mt-2 mx-8 gap-2 items-center`}
      onPress={() => CallAPharmaFullQueue()}
    >
      <Ionicons name="call-outline" size={30} color={Colors.White} />
      <View>
        <Text style={tw`text-white text-xl font-bold`}>Call a Pharmacist</Text>
        <Text style={tw`text-white text-sm opacity-50`}>
          Instantly connect with a pharmacist.
        </Text>
      </View>
    </TouchableOpacity>
  );
}
