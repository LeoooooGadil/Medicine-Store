import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import { RegisterInput } from "../AuthScreen";
import DropdownInput from "./DropdownInput";
import AddAddressControls from "./AddAddressControls";
import { useAddresses } from "../../context/addressesContext";
import { useInAppNotification } from "../InAppNotification";

export default function AddAddressModal() {
  const [Type, setType] = useState("Add");

  const [AddressType, setAddressType] = useState(null);
  const [AddressTypeOther, setAddressTypeOther] = useState(null);
  const [AddressLine1, setAddressLine1] = useState(null);
  const [AddressLine2, setAddressLine2] = useState(null);
  const [Region, setRegion] = useState(null);
  const [City, setCity] = useState(null);
  const [ZipCode, setZipCode] = useState(null);
  const [FullName, setFullName] = useState(null);
  const [MobileNumber, setMobileNumber] = useState(null);
  const [EmailAddress, setEmailAddress] = useState(null);
  const [LandlineNumber, setLandlineNumber] = useState(null);

  const { addAddress, updateAddress } = useAddresses();

  const HandleControl = () => {
    if (Type === "Add") {
      CreateAddress();
    } else {
      UpdateAddress();
    }

  }

  const UpdateAddress = () => {
    if (!AddressType || !AddressLine1 || !Region || !City || !ZipCode || !FullName || !MobileNumber) {
      useInAppNotification().showNotification("Please fill out all required fields.", "error");
      return;
    }

    const address = {
      

  const CreateAddress = () => {
    if (!AddressType || !AddressLine1 || !Region || !City || !ZipCode || !FullName || !MobileNumber) {
      useInAppNotification().showNotification("Please fill out all required fields.", "error");
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
      FullName,
      MobileNumber,
      EmailAddress,
      LandlineNumber,
    };
    addAddress(address);
  }

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
          containerStyle={tw`mt-4`}
        />
        {AddressType && AddressType.value === "Other" ? (
          <RegisterInput
            label="please specify"
            placeholder="Address Type"
            onChangeText={(text) => setAddressTypeOther(text)}
            style={tw``}
          />
        ) : null}
        <View style={tw`h-4`} />
        <RegisterInput
          placeholder="Address Line 1"
          style={tw`mt-4`}
          onChangeText={(text) => setAddressLine1(text)}
        />
        <RegisterInput
          placeholder="Address Line 2"
          style={tw``}
          onChangeText={(text) => setAddressLine2(text)}
        />
        <View style={tw`h-4`} />
        <DropdownInput
          placeholder="Select Region"
          options={[
            { label: "NCR", AnotherLabel: "Metro Manila", value: "NCR" },
          ]}
          onSelect={(item) => setRegion(item)}
          containerStyle={tw`mt-4`}
        />
        <DropdownInput
          placeholder="Select City"
          options={[
            { label: "Caloocan", value: "Caloocan" },
            { label: "Las Piñas", value: "Las Piñas" },
            { label: "Makati", value: "Makati" },
            { label: "Malabon", value: "Malabon" },
            { label: "Mandaluyong", value: "Mandaluyong" },
            { label: "Manila", value: "Manila" },
            { label: "Marikina", value: "Marikina" },
            { label: "Muntinlupa", value: "Muntinlupa" },
            { label: "Navotas", value: "Navotas" },
            { label: "Parañaque", value: "Parañaque" },
            { label: "Pasay", value: "Pasay" },
            { label: "Pasig", value: "Pasig" },
            { label: "Pateros", value: "Pateros" },
            { label: "Quezon City", value: "Quezon City" },
            { label: "San Juan", value: "San Juan" },
            { label: "Taguig", value: "Taguig" },
            { label: "Valenzuela", value: "Valenzuela" },
          ]}
          onSelect={(item) => setCity(item)}
          containerStyle={tw``}
        />
        <RegisterInput
          placeholder="Zip Code"
          onChangeText={(text) => setZipCode(text)}
          style={tw`mt-4`}
          onlyNumeric={true}
        />
      </View>
      <View style={tw`mt-10`}>
        <Text style={tw`text-2xl font-bold px-8 pt-4`}>
          Who's Address is this?
        </Text>
        <RegisterInput placeholder="Full Name" style={tw`mt-4`} onChangeText={(text) => setFullName(text)} />
        <RegisterInput
          placeholder="Mobile Number"
          onChangeText={(text) => setMobileNumber(text)}
          style={tw``}
          onlyNumeric={true}
        />
        <RegisterInput placeholder="Email Address (optional)" style={tw``} onChangeText={(text) => setEmailAddress(text)} />
        <RegisterInput
          placeholder="Landline Number (optional)"
          onChangeText={(text) => setLandlineNumber(text)}
          style={tw``}
          onlyNumeric={true}
        />
      </View>
      <View style={tw`h-8`} />
      <AddAddressControls CreateAddress={HandleControl} Type={Type} />
      <View style={tw`h-16`} />
    </ScrollView>
  );
}
