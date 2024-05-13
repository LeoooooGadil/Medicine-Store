import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../constants/Colors";
import tw from "twrnc";

import { useAddresses } from "../context/addressesContext";
import { AddressBookHeader, AddressBookList } from "../components/AddressBookScreen";

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

  return (
    <SafeAreaView
      style={tw`gap-2`}
      forceInset={{ top: "always" }}
    >
      <AddressBookHeader 
        GoBack={() => navigation.goBack()}
      />
      <AddressBookList />
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
