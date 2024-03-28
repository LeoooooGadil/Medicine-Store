import { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import tw from "twrnc";
import { Camera } from "expo-camera";
import * as ImagePicker from "expo-image-picker";
import Colors from "../../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { useCheckout } from "../../../context/checkoutContext";

export default function UploadPrescriptionWindow() {
  const { nextStep, prevStep, orderSummary, setOrderSummary } = useCheckout();
  const [image, setImage] = useState(orderSummary.pictureUri);
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

  const takePicture = async () => {
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      aspect: [16, 9],
      quality: 1,
    });

    setImage(result.assets[0].uri);

    if (result) {
      setImage(result.assets[0].uri);
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      aspect: [16, 9],
      quality: 1,
      selectionLimit: 1,
    });

    if (result) {
      setImage(result.assets[0].uri);
    }
  };

  const Submit = () => {
    setOrderSummary({ ...orderSummary, pictureUri: image });
    nextStep();
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

  if (image) {
    return (
      <View style={tw`flex-1`}>
        <View style={tw`flex-1 items-center px-5 mb-5 shadow-md relative`}>
          <Image source={{ uri: image }} style={tw`w-full h-full rounded-xl`} />
          <View style={tw`flex-row absolute bottom-0`}>
            <TouchableOpacity
              style={tw`p-2 flex-1 py-5 shadow-md relative`}
              onPress={() => setImage(null)}
            >
              <View style={tw`rounded-b-xl absolute left-0 right-0 bottom-0 top-0 bg-black opacity-25`} />
              <Text style={tw`text-white text-center font-bold`}>
                Retake Picture
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={tw`px-5 flex-row gap-20`}>
          <TouchableOpacity
            style={tw`bg-[${Colors.Silver}] p-2 rounded-xl flex-1 py-5 shadow-md`}
            onPress={prevStep}
          >
            <Text style={tw`text-white text-center font-bold`}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={tw`bg-[${Colors.AlizarinCrimson}] p-2 rounded-xl flex-1 py-5 shadow-md`}
            onPress={Submit}
          >
            <Text style={tw`text-white text-center font-bold`}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
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
          onPress={takePicture}
        />
        <Text style={tw`text-center text-gray-400`}>or</Text>
        <Button
          title="Upload from Gallery"
          Icon={() => (
            <Ionicons name="images-outline" size={30} color={Colors.Froly} />
          )}
          onPress={pickImage}
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
