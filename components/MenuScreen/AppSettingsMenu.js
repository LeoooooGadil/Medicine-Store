import { View, Text, TouchableOpacity, Alert } from "react-native";
import tw from "twrnc";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";

export default function AppSettingsMenu({ navigation }) {
  const settings = {
    "Address Book": {
      OnClick: () => {
        navigation.navigate("AddressBook");
      },
    },
    "About Us": {
      OnClick: () => {
        Alert.alert
        ("About Us", "PhilCure is an application dedicated to provide medicinal products to our users nationwide.");
      },
    },
  };

  return (
    <View style={tw`mt-12 bg-[${Colors.White}] mx-8 shadow-md rounded-xl`}>
      <View style={tw`flex-col px-4`}>
        {Object.keys(settings).map((setting, index) => (
          <AppSettingsButton
            key={index}
            Name={setting}
            Icon={settings[setting].Icon}
            OnClick={settings[setting].OnClick}
            isLast={index === Object.keys(settings).length - 1}
          />
        ))}
      </View>
    </View>
  );
}

function AppSettingsButton({ Name, Icon, OnClick, isLast }) {
  return (
    <TouchableOpacity
      style={tw`flex-row items-center justify-between h-14 ${
        isLast ? "" : "border-b border-[#E5E5E5]"
      }`}
      onPress={OnClick}
    >
      <View style={tw`flex-row items-center h-14 flex-1`}>
        {Icon && <Ionicons name={Icon} size={24} style={tw`ml-4`} />}
        <Text style={tw`text-lg`}>{Name}</Text>
      </View>
      <View style={tw`flex-row items-center h-14`}>
        <Ionicons
          name="chevron-forward"
          size={24}
          style={tw`ml-4 opacity-25`}
        />
      </View>
    </TouchableOpacity>
  );
}
