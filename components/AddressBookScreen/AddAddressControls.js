import { View, Text, TouchableOpacity } from "react-native";
import tw, { create } from "twrnc";
import Colors from "../../constants/Colors";

export default function AddAddressControls({ HandleControl, DeleteAddress, Type, disabled }) {
  return (
    <View style={tw`mt-10 gap-4`}>
      <View style={tw`flex-row px-8`}>
      {Type === "Edit" && (
          <TouchableOpacity
            style={tw`flex-1 justify-center items-center bg-[${Colors.BrightGray}] rounded-lg h-14`}
            onPress={DeleteAddress}
          >
            <Text style={tw`text-lg text-gray-600`}>Delete Address</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity
          style={tw`flex-1 justify-center items-center bg-[${Colors.AlizarinCrimson}] rounded-lg h-14 ${disabled ? "opacity-50" : ""}`}
          disabled={disabled}
          onPress={HandleControl}
        >
          <Text style={tw`text-lg text-white`}>
            {Type === "Edit" ? "Update Address" : "Add Address"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
