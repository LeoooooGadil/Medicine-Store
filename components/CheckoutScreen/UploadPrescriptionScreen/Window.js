import { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import tw from "twrnc";
import { Camera } from "expo-camera";
import * as ImagePicker from "expo-image-picker";
import Colors from "../../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import CameraScreen from "./Camera";

const State = {
  PICKER: "PICKER",
  CAMERA: "CAMERA",
};

export default function UploadPrescriptionWindow() {
  const [state, setState] = useState(State.PICKER);
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

  const ChangeState = (state) => {
    setState(state);
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

  if (state === State.CAMERA) {
    return <CameraScreen />;
  }

  return (
    <View style={tw`flex-1`}>
      <View style={tw`mt-10`}>
        <Text style={tw`text-center text-2xl font-bold`}>Snap a picture</Text>
        <Text style={tw`text-center mt-2 px-8`}>
          Some of the medicines you have added require a prescription. Please
          upload a prescription to continue.
        </Text>
      </View>
      <View style={tw`flex-1 flex-col items-center pt-15 gap-3 px-8`}>
        <Button
          title="Take a Picture"
          Icon={() => (
            <Ionicons name="camera-outline" size={30} color={Colors.Froly} />
          )}
          onPress={() => ChangeState(State.CAMERA)}
        />
        <Text style={tw`text-center text-gray-400`}>or</Text>
        <Button
          title="Upload from Gallery"
          Icon={() => (
            <Ionicons name="images-outline" size={30} color={Colors.Froly} />
          )}
          onPress={() => console.log("Gallery")}
        />
      </View>
      <View style={tw`px-8`}>
        <Text style={tw`text-center text-gray-400`}>
          Note: A pharmacist will verify your prescription before processing
          your order.
        </Text>
      </View>
    </View>
  );
}

function Button({ title, Icon, onPress }) {
  return (
    <TouchableOpacity
      style={tw`w-full p-3 flex-row gap-4 justify-center items-center rounded-xl shadow-md bg-[${Colors.White}]`}
      onPress={onPress}
    >
      {Icon && <Icon />}
      <Text style={tw`text-center w-20 text-[${Colors.AlizarinCrimson}]`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
