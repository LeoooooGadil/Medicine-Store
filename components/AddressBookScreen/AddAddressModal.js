import { View, Text, ScrollView, Alert } from "react-native";
import React, { useState, useEffect } from "react";
import tw from "twrnc";
import { RegisterInput } from "../AuthScreen";
import DropdownInput from "./DropdownInput";
import AddAddressControls from "./AddAddressControls";
import { useAddresses } from "../../context/addressesContext";
import { useInAppNotification } from "../InAppNotification";

export default function AddAddressModal({HandMeTheData}) {
  const [Type, setType] = useState(HandMeTheData?.Type);
  const [isvalidToSave, setIsvalidToSave] = useState(false);

  const [AddressType, setAddressType] = useState(null);
  const [AddressTypeOther, setAddressTypeOther] = useState(null);
  const [AddressLine1, setAddressLine1] = useState(null);
  const [AddressLine2, setAddressLine2] = useState(null);
  const [Region, setRegion] = useState({
    label: "CALABARZON",
    value: "CALABARZON",
  });
  const [City, setCity] = useState({ label: "Cavite", value: "Cavite" });
  const [ZipCode, setZipCode] = useState(HandMeTheData?.ZipCode || null);
  // const [FullName, setFullName] = useState(null);
  // const [MobileNumber, setMobileNumber] = useState(null);
  // const [EmailAddress, setEmailAddress] = useState(null);
  // const [LandlineNumber, setLandlineNumber] = useState(null);

  const { addAddress, updateAddress, deleteAddress } = useAddresses();

  const HandleControl = () => {
    if (Type === "Add") {
      CreateAddress();
    } else {
      UpdateAddress();
    }
  };

  const DeleteAddress = () => {
    Alert.alert(
      "Delete This Address?",
      "Are you sure you want to delete this address?",
      [
        {
          text: "Cancel",
          onPress: () => {},
          style: "cancel",
        },
        { text: "Yes", onPress: () => {
          deleteAddress(HandMeTheData?.id);
          HandMeTheData?.closeModal();
        } },
      ]
    );
  };

  const validateFields = () => {
    if (
      !AddressType ||
      !AddressLine1 ||
      !Region ||
      !City ||
      !ZipCode ||
      (AddressType && AddressType.value === "Other" && !AddressTypeOther)
    ) {
      setIsvalidToSave(false);
    } else {
      setIsvalidToSave(true);
    }
  };

  const clearFields = () => {
    setAddressType(null);
    setAddressTypeOther(null);
    setAddressLine1(null);
    setAddressLine2(null);
    setRegion(null);
    setCity(null);
    setZipCode(null);
    setFullName(null);
    setMobileNumber(null);
    setEmailAddress(null);
    setLandlineNumber(null);
  };

  const UpdateAddress = () => {
    if (!AddressType || !AddressLine1 || !Region || !City || !ZipCode) {
      useInAppNotification().showNotification(
        "Please fill out all required fields.",
        "error"
      );
      return;
    }

    const address = {
      AddressType: AddressType?.value,
      AddressTypeOther,
      AddressLine1,
      AddressLine2,
      Region: Region?.value,
      City: City?.value,
      ZipCode,
    };

    updateAddress(address);
    HandMeTheData?.closeModal();
    clearFields();
  };

  const CreateAddress = () => {
    if (!AddressType || !AddressLine1 || !Region || !City || !ZipCode) {
      useInAppNotification().showNotification(
        "Please fill out all required fields.",
        "error"
      );
      return;
    }

    const address = {
      AddressType: AddressType?.value,
      AddressTypeOther,
      AddressLine1,
      AddressLine2,
      Region: Region?.value,
      City: City?.value,
      ZipCode,
    };
    addAddress(address);
    HandMeTheData?.closeModal();
    clearFields();
  };

  useEffect(() => {
    if (HandMeTheData?.Type === "Edit") {
      setType("Edit");
      setAddressType({ label: HandMeTheData?.AddressType, value: HandMeTheData?.AddressType });
      setAddressTypeOther(HandMeTheData?.AddressTypeOther);
      setAddressLine1(HandMeTheData?.AddressLine1);
      setAddressLine2(HandMeTheData?.AddressLine2);
      setRegion({ label: HandMeTheData?.Region, value: HandMeTheData?.Region });
      setCity({ label: HandMeTheData?.City, value: HandMeTheData?.City });
      setZipCode(HandMeTheData?.ZipCode);
    }
  }, [HandMeTheData]);

  useEffect(() => {
    validateFields();
  }, [
    AddressType,
    AddressTypeOther,
    AddressLine1,
    AddressLine2,
    Region,
    City,
    ZipCode,
  ]);

  return (
    <ScrollView style={tw`h-full`}>
      <View>
        <Text style={tw`text-2xl font-bold px-8 pt-6`}>
          Tell us about your address
        </Text>
        <DropdownInput
          placeholder="Select Address Type"
          options={[
            { label: "Home", value: "Home" },
            { label: "Office", value: "Office" },
            { label: "Partner", value: "Partner" },
            { label: "Other", value: "Other" },
          ]}
          onSelect={(item) => setAddressType(item)}
          value={AddressType}
          containerStyle={tw`mt-4`}
        />
        {AddressType && AddressType.value === "Other" ? (
          <RegisterInput
            label="please specify"
            placeholder="Address Type"
            onChangeText={(text) => setAddressTypeOther(text)}
            value={AddressTypeOther}
            style={tw``}
          />
        ) : null}
        <View style={tw`h-4`} />
        <RegisterInput
          placeholder="Address Line 1"
          style={tw`mt-4`}
          onChangeText={(text) => setAddressLine1(text)}
          value={AddressLine1}
        />
        <RegisterInput
          placeholder="Address Line 2 (optional)"
          style={tw``}
          onChangeText={(text) => setAddressLine2(text)}
          value={AddressLine2}
        />
        <View style={tw`h-4`} />
        <DropdownInput
          placeholder="Select Region"
          options={[
            {
              label: "CALABARZON",
              AnotherLabel: "Region IV-A",
              value: "CALABARZON",
            },
          ]}
          defaultValue={Region}
          disabled={true}
          onSelect={(item) => setRegion(item)}
          value={Region}
          containerStyle={tw`mt-4`}
        />
        <DropdownInput
          placeholder="Select City"
          options={[
            { label: "Cavite", value: "Cavite" },
            { label: "Laguna", value: "Laguna" },
            { label: "Batangas", value: "Batangas" },
            { label: "Rizal", value: "Rizal" },
            { label: "Quezon", value: "Quezon" },
          ]}
          defaultValue={City}
          disabled={true}
          onSelect={(item) => setCity(item)}
          value={City}
          containerStyle={tw``}
        />
        <RegisterInput
          placeholder="Zip Code"
          onChangeText={(text) => setZipCode(text)}
          value={ZipCode}
          style={tw`mt-4`}
          onlyNumeric={true}
        />
      </View>
      {/* <View style={tw`mt-10`}>
        <Text style={tw`text-2xl font-bold px-8 pt-4`}>
          Who's Address is this?
        </Text>
        <RegisterInput
          placeholder="Full Name"
          style={tw`mt-4`}
          onChangeText={(text) => setFullName(text)}
        />
        <RegisterInput
          placeholder="Mobile Number"
          onChangeText={(text) => setMobileNumber(text)}
          style={tw``}
          onlyNumeric={true}
        />
        <RegisterInput
          placeholder="Email Address (optional)"
          style={tw``}
          onChangeText={(text) => setEmailAddress(text)}
        />
        <RegisterInput
          placeholder="Landline Number (optional)"
          onChangeText={(text) => setLandlineNumber(text)}
          style={tw``}
          onlyNumeric={true}
        />
      </View> */}
      <View style={tw`h-8`} />
      <AddAddressControls
        HandleControl={HandleControl}
        DeleteAddress={DeleteAddress}
        Type={Type}
        disabled={!isvalidToSave}
      />
      <View style={tw`h-64`} />
    </ScrollView>
  );
}
