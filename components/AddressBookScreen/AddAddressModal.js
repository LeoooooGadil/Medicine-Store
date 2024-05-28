import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import { RegisterInput } from "../AuthScreen";
import DropdownInput from "./DropdownInput";

export default function AddAddressModal() {
  const [AddressType, setAddressType] = useState(null);

  return (
    <ScrollView style={tw`h-full`}>
      <View>
        <Text style={tw`text-2xl font-bold px-8 pt-6`}>Tell us about your address</Text>
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
            style={tw``}
          />
        ) : null}
        <View style={tw`h-4`} />
        <RegisterInput placeholder="Address Line 1" style={tw`mt-4`} />
        <RegisterInput placeholder="Address Line 2" style={tw``} />
        <View style={tw`h-4`} />
        <DropdownInput
          placeholder="Select Region"
          options={[
            { label: "NCR", AnotherLabel: "Metro Manila", value: "NCR" },
          ]}
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
          containerStyle={tw``}
        />
        <RegisterInput
          placeholder="Zip Code"
          style={tw`mt-4`}
          onlyNumeric={true}
        />
      </View>
      <View style={tw`mt-10`} >
        <Text style={tw`text-2xl font-bold px-8 pt-4`}>Who's Address is this?</Text>
        <RegisterInput placeholder="Full Name" style={tw`mt-4`} />
        <RegisterInput placeholder="Mobile Number" style={tw``} onlyNumeric={true} />
        <RegisterInput placeholder="Email Address (optional)" style={tw``} />
        <RegisterInput placeholder="Landline Number (optional)" style={tw``} onlyNumeric={true} />
      </View>
      <View style={tw`h-16`} />
    </ScrollView>
  );
}
