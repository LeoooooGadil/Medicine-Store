import { View, Text, TouchableOpacity, Alert } from "react-native";
import tw from "twrnc";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";

export default function AccountButton() {
  const handleLogout = () => {
    Alert.alert("Logout", "Are you sure you want to logout?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Logout",
        onPress: () => {
          // Add logout logic here
        },
      },
    ]);
  };

  return (
    <View
      style={tw`flex-row items-center justify-between shadow-md mx-8 h-16 bg-white rounded-xl`}
    >
      <TouchableOpacity
        style={tw`flex-row items-center justify-between flex-1 h-16`}
      >
        <View style={tw`flex-row items-center`}>
          <View
            style={tw`bg-[${Colors.DarkOrange}] rounded-full w-10 h-10 items-center justify-center ml-4`}
          >
            <Text style={tw`text-lg text-[${Colors.White}]`}>J</Text>
          </View>
          <Text style={tw`text-lg ml-4`}>Account</Text>
        </View>
        <View>
          {/* Logout button */}
          <TouchableOpacity
            style={tw`flex-row items-center pl-2 border-l border-gray-200`}
            onPress={handleLogout}
          >
            <Ionicons
              name="log-out"
              size={24}
              style={tw`mr-4 opacity-25`}
            />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  );
}
