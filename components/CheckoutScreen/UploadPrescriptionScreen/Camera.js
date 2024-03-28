import { useState, useEffect, useRef } from "react";
import { View, Text, TouchableOpacity, Platform } from "react-native";
import { Camera, CameraType } from "expo-camera";
import { Ionicons } from "@expo/vector-icons";
import tw from "twrnc";
import Colors from "../../../constants/Colors";

export default function CameraScreen() {
  const [isFlashOn, setIsFlashOn] = useState(false);
  const [type, setType] = useState(CameraType.back);
  const [focus, setFocus] = useState(true);
  const cameraRef = useRef(null);

  const focusCamera = () => {
    setFocus(false);
    setTimeout(() => {
      setFocus(true);
    }, 1000);
  };

  return (
    <View style={tw`h-full relative`}>
      <View style={tw`flex-1 rounded-xl overflow-hidden`}>
        <Camera
          style={tw`flex-1 relative`}
          ref={cameraRef}
          autoFocus={focus}
          type={type}
          flashMode={
            isFlashOn
              ? Camera.Constants.FlashMode.torch
              : Camera.Constants.FlashMode.off
          }
        >
          <TouchableOpacity
            activeOpacity={1}
            onPress={focusCamera}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "transparent",
              zIndex: 100,
            }}
          />
        </Camera>
      </View>
      <View style={tw`absolute w-full bottom-0 items-center p-5 h-18`}>
        <TouchableOpacity>
          <View style={tw`relative w-full items-center justify-center`}>
            <View
              style={tw`bg-[${Colors.Gallery}] justify-center items-center w-17 h-17 rounded-full opacity-50 absolute`}
            />
            <View style={tw`bg-white w-13 h-13 rounded-full absolute`} />
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={tw`flex-row justify-between items-center p-5 absolute w-full top-0`}
      >
        <TouchableOpacity style={tw`bg-white p-2 rounded-full`}>
          {Platform.OS === "android" ? (
            <Ionicons
              name={isFlashOn ? "flash" : "flash-off"}
              size={24}
              color={Colors.DarkBlueGray}
              onPress={() => {
                setIsFlashOn(!isFlashOn);
              }}
            />
          ) : (
            <Ionicons
              name={isFlashOn ? "flash" : "flash-off"}
              size={24}
              color={Colors.DarkBlueGray}
              onPress={() => {
                setIsFlashOn(!isFlashOn);
              }}
            />
          )}
        </TouchableOpacity>
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
