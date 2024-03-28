import { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Camera, CameraType } from "expo-camera";
import { Ionicons } from "@expo/vector-icons";
import tw from "twrnc";
import Colors from "../../../constants/Colors";

export default function CameraScreen() {
  const [type, setType] = useState(CameraType.back);

  return (
    <View style={tw`h-full relative`}>
      <View style={tw`flex-1 rounded-xl overflow-hidden`}>
        <Camera style={tw`flex-1`} type={type} />
      </View>
      <View style={tw`flex-row justify-between items-center p-3 absolute w-full bottom-0`}>
        <Text style={tw`text-white text-xl`}>Take a picture</Text>
        <TouchableOpacity
          style={tw`bg-white p-2 rounded-full`}
          onPress={() => {
            setType(
              type === CameraType.back ? CameraType.front : CameraType.back
            );
          }}
        >
          <Ionicons
            name="camera-reverse"
            size={24}
            color={Colors.DarkBlueGray}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
