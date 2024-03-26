import React, { createContext, useContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AddressesContext = createContext();

export const useAddresses = () => useContext(AddressesContext);

export const AddressesProvider = ({ children }) => {
	  const [addresses, setAddresses] = useState([]);
  const [isAddressesBeenUpdated, setIsAddressesBeenUpdated] = useState(false);
  const [loading, setLoading] = useState(false);

  const getAddresses = async () => {
	setLoading(true);
	try {
	  const items = await AsyncStorage.getItem("addresses");
	  setAddresses(items ? JSON.parse(items) : []);
	} catch (error) {
	  console.error("Error getting addresses: ", error);
	  setAddresses([]);
	} finally {
	  setLoading(false);
	}
  };

  const addAddress = async (address) => {
	setLoading(true);
	setIsAddressesBeenUpdated(true);
	try {
	  const items = [...addresses];
	  items.push(address);
	  await AsyncStorage.setItem("addresses", JSON.stringify(items));
	  setAddresses(items);
	} catch (error) {
	  console.error("Error adding address: ", error);
	} finally {
	  setLoading(false);
	}
  };

  const updateAddress = async (address) => {
	try {
	  const items = [...addresses];
	  const index = items.findIndex((i) => i.id === address.id);
	  if (index !== -1) {
		items[index] = address;
		await AsyncStorage.setItem("addresses", JSON.stringify(items));
		setAddresses(items);
	  }
	} catch (error) {
	  console.error("Error updating address: ", error);
	} finally {
	}
  };

  return (
	<AddressesContext.Provider
	  value={{
		addresses,
		isAddressesBeenUpdated,
		loading,
		getAddresses,
		addAddress,
		updateAddress,
	  }}
	>
	  {children}
	</AddressesContext.Provider>
  );
}