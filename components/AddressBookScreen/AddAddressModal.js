import { View, Text } from "react-native";
import React from "react";
import tw from "twrnc";
import { RegisterInput } from "../AuthScreen";
import DropdownInput from "./DropdownInput";

export default function AddAddressModal() {
  return (
    <View style={tw`flex-1`}>
      <Text style={tw`text-2xl font-bold px-8 pt-4`}>Add A New Address</Text>
      <DropdownInput
        placeholder="Select Address Type"
        options={[
          { label: "Home", value: "Home" },
          { label: "Office", value: "Office" },
          { label: "Other", value: "Other" },
        ]}
        containerStyle={tw`mt-4`}
      />
	  <View style={tw`h-4`} />
      <RegisterInput placeholder="Address Line 1" style={tw`mt-4`} />
      <RegisterInput placeholder="Address Line 2" style={tw`mt-4`} />
      <View style={tw`h-4`} />
      <DropdownInput
        placeholder="Select Region"
        options={[
			{ label: "NCR", AnotherLabel: "Metro Manila", value: "NCR" },
			{ label: "CAR", AnotherLabel: "Cordillera Administrative Region", value: "CAR" },
			{ label: "Region I", AnotherLabel: "Ilocos Region", value: "Region I" },
			{ label: "Region II", AnotherLabel: "Cagayan Valley", value: "Region II" },
			{ label: "Region III", AnotherLabel: "Central Luzon", value: "Region III" },
			{ label: "Region IV-A", AnotherLabel: "Calabarzon", value: "Region IV-A" },
			{ label: "Region IV-B", AnotherLabel: "Mimaropa", value: "Region IV-B" },
			{ label: "Region V", AnotherLabel: "Bicol Region", value: "Region V" },
			{ label: "Region VI", AnotherLabel: "Western Visayas", value: "Region VI" },
			{ label: "Region VII", AnotherLabel: "Central Visayas", value: "Region VII" },
			{ label: "Region VIII", AnotherLabel: "Eastern Visayas", value: "Region VIII" },
			{ label: "Region IX", AnotherLabel: "Zamboanga Peninsula", value: "Region IX" },
			{ label: "Region X", AnotherLabel: "Northern Mindanao", value: "Region X" },
			{ label: "Region XI", AnotherLabel: "Davao Region", value: "Region XI" },
			{ label: "Region XII", AnotherLabel: "Soccsksargen", value: "Region XII" },
			{ label: "Region XIII", AnotherLabel: "Caraga", value: "Region XIII" },
			{ label: "BARMM", AnotherLabel: "Bangsamoro", value: "BARMM" },
		]}
        containerStyle={tw`mt-4`}
      />
      <RegisterInput placeholder="City" style={tw`mt-4`} />
      <RegisterInput
        placeholder="Zip Code"
        style={tw`mt-4`}
        onlyNumeric={true}
      />
    </View>
  );
}
