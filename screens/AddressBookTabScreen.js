import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../constants/Colors";
import tw from "twrnc";

export default function AddressBookTabScreen({ navigation }) {
  return (
    <SafeAreaView
      style={tw`gap-2 bg-[${Colors.BrightGray}] justify-center items-center flex-1`}
      forceInset={{ top: "always" }}
    >
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
      <Text style={styles.title}>This is the address book screen!</Text>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.link}
      >
        <Text style={styles.linkText}>Go Back!</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  backgroundColor: "#fff",
	  alignItems: "center",
	  justifyContent: "center",
	  padding: 20,
	},
	title: {
	  fontSize: 20,
	  fontWeight: "bold",
	},
	link: {
	  marginTop: 15,
	  paddingVertical: 15,
	},
	linkText: {
	  fontSize: 14,
	  color: "#2e78b7",
	},
  });
