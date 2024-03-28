import { useState, useEffect } from "react";
import { View, Text, } from "react-native";
import { Camera, CameraType } from "expo-camera";
import tw from "twrnc";

export default function CameraScreen() {
  const [type, setType] = useState(CameraType.back);

  return (
    <View style={tw`h-full rounded-xl overflow-hidden`}>
      <Camera style={tw`flex-1`} type={type} />
    </View>
  );
}
