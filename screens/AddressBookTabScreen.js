import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState, useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../constants/Colors";
import tw from "twrnc";

import { useAddresses } from "../context/addressesContext";
import { AddressBookHeader, AddressBookList, BottomSheetModal, AddAddressModal } from "../components/AddressBookScreen";

export default function AddressBookTabScreen({ navigation }) {
  // You can use the useAddresses hook here to get the addresses and other functions.
  // data structure is this:
  // {
  //   id: string;
  //   name: string;
  //   address: string;
  //   city: string;
  //   postalCode: string;
  //   country: string;
  // }

  // if you dont know how to use it, you can ask me or look at the addressesContext.js file.
  // better if you ask me. I can explain it to you.

  // const {
  //   addresses,
  //   isAddressesBeenUpdated,
  //   loading,
  //   getAddresses,
  //   addAddress,
  //   updateAddress,
  // } = useAddresses();

  const [isAddAddressBottomSheetOpen, setIsAddAddressBottomSheetOpen] = useState(false);
  const [isAddressTypeDropdownOpen, setIsAddressTypeDropdownOpen] = useState(false);
  const [isSelectRegionDropdownOpen, setIsSelectRegionDropdownOpen] = useState(false);
  const addAddressBottomSheetRef = useRef(null);
  const addressTypeDropdownRef = useRef(null);
  const selectRegionDropdownRef = useRef(null);


  const openAddAddressBottomSheet = () => {
    setIsAddAddressBottomSheetOpen(true);
    addAddressBottomSheetRef.current?.snapToIndex(0);
  };

  const openAddressTypeDropdown = () => {
    setIsAddressTypeDropdownOpen(true);
    addressTypeDropdownRef.current?.snapToIndex(0);
  };

  const openSelectRegionDropdown = () => {
    setIsSelectRegionDropdownOpen(true);
    selectRegionDropdownRef.current?.snapToIndex(0);
  };

  return (
    <SafeAreaView
      style={tw`flex-col gap-2 bg-[${Colors.BrightGray}] flex-1`}
      forceInset={{ top: "always" }}
    >
      <AddressBookHeader 
        GoBack={() => navigation.goBack()}
        OpenAddAddressModal={openAddAddressBottomSheet}
      />
      <AddressBookList />
      <BottomSheetModal
        bottomSheetRef={addAddressBottomSheetRef}
        SetIsBottomSheetOpen={openAddAddressBottomSheet}
        HandMeTheData={{
          openAddressTypeDropdown,
          openSelectRegionDropdown
        }}
        Component={AddAddressModal}
        _snapPoints={["93%"]}
      />
      <BottomSheetModal
        bottomSheetRef={addressTypeDropdownRef}
        SetIsBottomSheetOpen={openAddressTypeDropdown}
        Component={AddressTypeDropdown}
        _snapPoints={["50%"]}
      />
      <BottomSheetModal
        bottomSheetRef={selectRegionDropdownRef}
        SetIsBottomSheetOpen={openSelectRegionDropdown}
        Component={SelectRegionDropdown}
        _snapPoints={["50%"]}
      />
      {/* Here you can add your components. */}
      {/* Your Components should live inside the components folder add another folder named "AddressBookScreen" */}
      {/* add an index.js. Why? look at the other folders. inside is imported and exported components.  */}
      {/* because when importing from other other components outside the folder you can do a single import */}
      {/* instead of importing each component */}
      {/* Example: */}
      {/* import { AddressBookScreen } from "../components"; */}
      {/* import { AddressBookScreen } from "../components/AddressBookScreen"; */}
      {/* import { AddressBookScreen } from "../components/AddressBookScreen/index"; */}
      {/* all of the above are correct. */}
      {/* Then you can use the component like this: */}
      {/* <AddressBookScreen /> */}
      {/* instead of */}
      {/* <AddressBookScreen.AddressBookScreen /> */}

      {/* Styling: */}
      {/* You can style the components like the cartscreen or the order screen */}
    </SafeAreaView>
  );
}
