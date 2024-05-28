import React, { useState, useRef, createContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../constants/Colors";
import tw from "twrnc";

import {
  AddressBookHeader,
  AddressBookList,
  BottomSheetModal,
  AddAddressModal,
  DropdownModal,
} from "../components/AddressBookScreen";

export const AddressBookPickerContext = createContext();

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
  const [pickerData, setPickerData] = useState({});

  const [isAddAddressBottomSheetOpen, setIsAddAddressBottomSheetOpen] =
    useState(false);
  const [isDropdownPickerOpen, setIsDropdownPickerOpen] = useState(false);
  useState(false);
  const addAddressBottomSheetRef = useRef(null);
  const DropdownPickerRef = useRef(null);

  const openAddAddressBottomSheet = () => {
    setIsAddAddressBottomSheetOpen(true);
    addAddressBottomSheetRef.current?.snapToIndex(0);
  };

  const OpenDropdownPicker = (options, onSelect, value) => {
    setIsDropdownPickerOpen(true);
    setPickerData({ options, onSelect, value });
    DropdownPickerRef.current?.snapToIndex(0);
  };

  const CloseDropdownPicker = () => {
    setIsDropdownPickerOpen(false);
    DropdownPickerRef.current?.close();
  };

  return (
    <SafeAreaView
      style={tw`flex-col gap-2 bg-[${Colors.BrightGray}] flex-1`}
      forceInset={{ top: "always" }}
    >
      <AddressBookPickerContext.Provider
        value={{
          OpenDropdownPicker,
        }}
      >
        <AddressBookHeader
          GoBack={() => navigation.goBack()}
          OpenAddAddressModal={openAddAddressBottomSheet}
        />
        <AddressBookList />
        <BottomSheetModal
          bottomSheetRef={addAddressBottomSheetRef}
          SetIsBottomSheetOpen={openAddAddressBottomSheet}
          Component={AddAddressModal}
          _snapPoints={["93%"]}
        />
        <BottomSheetModal
          bottomSheetRef={DropdownPickerRef}
          Component={DropdownModal}
          HandMeTheData={{ closeModal: CloseDropdownPicker, ...pickerData}}
          _snapPoints={["50%"]}
        />
      </AddressBookPickerContext.Provider>

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
