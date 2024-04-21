import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import tw from "twrnc";
import Colors from "../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { useAuthentication } from "../../hooks/useAuthentication";
import { useInAppNotification } from "../InAppNotification";

export default function LoginForm({ CreateAccount }) {
  const { showNotification } = useInAppNotification();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuthentication();

  const handleLogin = async () => {
    try {
      await login.mutateAsync({ username, password });
    } catch (error) {
      showNotification("Invalid username or password", "error");
    }
  };

  return (
    <View style={tw`mx-8 mt-10 gap-2`}>
      <View
        style={tw`w-full h-14 justify-center border border-[${Colors.Alto}] bg-[${Colors.White}] rounded-xl`}
      >
        <TextInput
          style={tw`flex-1 ml-4`}
          placeholder="Username"
          placeholderTextColor={Colors.Alto2}
          onChangeText={(text) => setUsername(text)}
        />
      </View>
      <View
        style={tw`w-full gap-2 flex-row h-14 pr-4 justify-between border border-[${Colors.Alto}] bg-[${Colors.White}] rounded-xl`}
      >
        <TextInput
          style={tw`flex-1 ml-4`}
          placeholder="Password"
          placeholderTextColor={Colors.Alto2}
          secureTextEntry={!showPassword}
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity
          style={tw`items-center justify-center opacity-25`}
          onPress={() => setShowPassword(!showPassword)}
        >
          {showPassword ? (
            <Ionicons name="eye-outline" size={24} color="black" />
          ) : (
            <Ionicons name="eye-off-outline" size={24} color="black" />
          )}
        </TouchableOpacity>
      </View>
      <View style={tw`mt-5`}>
        <TouchableOpacity
          style={tw`mt-2 items-center justify-center bg-[${Colors.AlizarinCrimson}] h-14 rounded-xl shadow-md`}
          onPress={handleLogin}
        >
          <Text style={tw`text-lg text-[${Colors.White}]`}>Login</Text>
        </TouchableOpacity>

        {/* if no account create here. */}
        <View style={tw`mt-5 gap-2 flex-row justify-center items-center`}>
          <Text style={tw`text-center text-base opacity-25`}>
            Don't have an account?
          </Text>
          <TouchableOpacity
            style={tw`items-center justify-center h-14 rounded-xl shadow-md`}
            onPress={CreateAccount}
          >
            <Text style={tw`text-[${Colors.WedgeWood}]`}>Create Account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
