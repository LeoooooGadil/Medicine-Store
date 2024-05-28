import { View, Text, TouchableOpacity } from "react-native";
import tw, { create } from "twrnc";
import Colors from "../../constants/Colors";

export default function AddAddressControls({ CreateAddress, Type }) {
  return (
    <View style={tw`mt-10 gap-4`}>
      <View style={tw`flex-row px-8`}>
        <TouchableOpacity
          style={tw`flex-1 justify-center items-center bg-[${Colors.AlizarinCrimson}] rounded-lg h-14`}
          onPress={CreateAddress}
        >
          <Text style={tw`text-lg text-white`}>
            {Type === "Edit" ? "Update Address" : "Add Address"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
