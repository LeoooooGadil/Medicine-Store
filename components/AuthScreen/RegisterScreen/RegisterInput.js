import { View, Text, TextInput, TouchableOpacity } from "react-native";
import tw from "twrnc";
import Colors from "../../../constants/Colors";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { useState } from "react";

export default function RegisterInput({
  label,
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  error,
  containerStyle,
}) {
  const [showPassword, setShowPassword] = useState(false); // Local state for showPassword

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={[tw`mx-8 mt-3`, containerStyle]}>
      {label ? <Text style={tw`text-lg mb-4 ml-1`}>{label}</Text> : null}
      <View
        style={tw`w-full gap-2 flex-row h-14 pr-4 justify-between border border-[${Colors.Alto}] bg-[${Colors.White}] rounded-xl`}
      >
        <TextInput
          style={tw`flex-1 ml-4`}
          placeholder={placeholder}
          placeholderTextColor={Colors.Alto2}
          secureTextEntry={secureTextEntry && !showPassword} // Conditionally set secureTextEntry
          value={value}
          onChangeText={onChangeText}
        />
        {secureTextEntry ? (
          <TouchableOpacity
            style={tw`items-center justify-center opacity-25`}
            onPress={togglePasswordVisibility}
          >
            {showPassword ? (
              <Ionicons name="eye-outline" size={24} color="black" />
            ) : (
              <Ionicons name="eye-off-outline" size={24} color="black" />
            )}
          </TouchableOpacity>
        ) : null}
      </View>
      {error && (
        <View style={tw`flex-row items-center mt-2`}>
          <AntDesign name="exclamationcircle" size={16} color={Colors.Error} />
          <Text style={tw`text-sm text-red-500 ml-2`}>{error}</Text>
        </View>
      )}
    </View>
  );
}
