import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import tw from "twrnc";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import { useInAppNotification } from "../InAppNotification";

export default function RegisterForm({ navigation, onRegister }) {
  const { showNotification } = useInAppNotification();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = () => {

	if (!fullName || !username || !password || !confirmPassword) {
	  showNotification("Please fill in all fields", "error", 5000, 0);
	  return;
	}

	if (password !== confirmPassword) {
	  showNotification("Passwords do not match", "error", 5000, 0);
	  return;
	}

    onRegister({
      full_name: fullName,
      username: username,
      password: password,
    });
  };

  return (
    <View style={tw`mt-10 mx-8 gap-4`}>
      <View
        style={tw`w-full h-14 justify-center border border-[${Colors.Alto}] bg-[${Colors.White}] rounded-xl shadow-md`}
      >
        <TextInput
          style={tw`flex-1 ml-4`}
          placeholder="Full Name"
          placeholderTextColor={Colors.Alto2}
		  onChangeText={setFullName}
        />
      </View>
      <View style={tw`h-2`} />
      <View
        style={tw`w-full h-14 justify-center border border-[${Colors.Alto}] bg-[${Colors.White}] rounded-xl shadow-md`}
      >
        <TextInput
          style={tw`flex-1 ml-4`}
          placeholder="Username"
          placeholderTextColor={Colors.Alto2}
		  onChangeText={setUsername}
        />
      </View>
      <View
        style={tw`w-full flex-row h-14 pr-4 justify-between border border-[${Colors.Alto}] bg-[${Colors.White}] rounded-xl shadow-md`}
      >
        <TextInput
          style={tw`flex-1 ml-4`}
          placeholder="Password"
          placeholderTextColor={Colors.Alto2}
          secureTextEntry={!showPassword}
		  onChangeText={setPassword}
        />
        <TouchableOpacity
          style={tw`items-center justify-center opacity-50`}
          onPress={() => setShowPassword(!showPassword)}
        >
          {showPassword ? (
            <Ionicons name="eye-outline" size={24} color="black" />
          ) : (
            <Ionicons name="eye-off-outline" size={24} color="black" />
          )}
        </TouchableOpacity>
      </View>
      <View
        style={tw`w-full flex-row h-14 pr-4 justify-between border border-[${Colors.Alto}] bg-[${Colors.White}] rounded-xl shadow-md`}
      >
        <TextInput
          style={tw`flex-1 ml-4`}
          placeholder="Confirm Password"
          placeholderTextColor={Colors.Alto2}
          secureTextEntry={!showConfirmPassword}
		  onChangeText={setConfirmPassword}
        />
        <TouchableOpacity
          style={tw`items-center justify-center opacity-50`}
          onPress={() => setShowConfirmPassword(!showConfirmPassword)}
        >
          {showConfirmPassword ? (
            <Ionicons name="eye-outline" size={24} color="black" />
          ) : (
            <Ionicons name="eye-off-outline" size={24} color="black" />
          )}
        </TouchableOpacity>
      </View>
      <View style={tw`h-2`} />
      <TouchableOpacity
        style={tw`h-14 justify-center items-center ${(fullName && username && password && confirmPassword && password === confirmPassword) ? `` : `bg-[${Colors.Froly}] opacity-25`} bg-[${Colors.AlizarinCrimson}] rounded-xl shadow-md`}
		onPress={handleRegister}
      >
        <Text style={tw`text-white text-lg font-bold`}>Register</Text>
      </TouchableOpacity>
    </View>
  );
}
