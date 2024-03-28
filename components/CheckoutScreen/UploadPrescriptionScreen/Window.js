import { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import tw from "twrnc";
import { Camera } from "expo-camera";
import * as ImagePicker from "expo-image-picker";
import Colors from "../../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";

export default function UploadPrescriptionWindow() {
  const [hasPermission, setHasPermission] = useState(false);
  const [cameraPermission, setCameraPermission] = useState(false);
  const [galleryPermission, setGalleryPermission] = useState(false);

  const permisionFunction = async () => {
    const cameraPermission = await Camera.requestCameraPermissionsAsync();

    setCameraPermission(cameraPermission.status === "granted");

    const imagePermission = await ImagePicker.getMediaLibraryPermissionsAsync();
    console.log(imagePermission.status);

    setGalleryPermission(imagePermission.status === "granted");

    if (
      imagePermission.status !== "granted" &&
      cameraPermission.status !== "granted"
    ) {
      setHasPermission(false);
      alert("Permission for media access needed.");
    } else {
      setHasPermission(true);
    }
  };

  useEffect(() => {
    permisionFunction();
  }, []);

  if (!hasPermission) {
    return (
      <View style={tw`flex-1 justify-center items-center`}>
        <Text>No access to camera or media library.</Text>
      </View>
    );
  }

  return (
    <View style={tw`flex-1 flex-row justify-center items-center gap-10`}>
      <Button
        title="Camera"
        Icon={() => <Ionicons name="camera-outline" size={45} color={Colors.AlizarinCrimson} />}
        onPress={() => console.log("Camera")}
      />
      <Button title="Gallery" Icon={
		() => <Ionicons name="images-outline" size={40} color={Colors.AlizarinCrimson} />
	  } onPress={() => console.log("Gallery")} />
    </View>
  );
}

function Button({ title, Icon, onPress }) {
  return (
    <TouchableOpacity
      style={tw`h-25 w-25 p-3 justify-center items-center rounded-md shadow-md bg-[${Colors.White}]`}
      onPress={onPress}
    >
      {Icon && <Icon />}
      <Text style={tw`text-center text-[${Colors.AlizarinCrimson}]`}>{title}</Text>
    </TouchableOpacity>
  );
}
