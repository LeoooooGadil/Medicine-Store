import React, { createContext, useContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const OrdersContext = createContext();

export const useOrders = () => useContext(OrdersContext);

export const OrdersProvider = ({ children }) => {
	  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  const getOrders = async () => {
	setLoading(true);
	try {
	  const items = await AsyncStorage.getItem("orders");
	  setOrders(items ? JSON.parse(items) : []);
	} catch (error) {
	  console.error("Error getting orders: ", error);
	  setOrders([]);
	} finally {
	  setLoading(false);
	}
  };

  const addOrder = async (order) => {
	setLoading(true);
	try {
	  const items = [...orders];
	  items.push(order);
	  await AsyncStorage.setItem("orders", JSON.stringify(items));
	  setOrders(items);
	} catch (error) {
	  console.error("Error adding order: ", error);
	} finally {
	  setLoading(false);
	}
  };

  return (
	<OrdersContext.Provider value={{ orders, loading, getOrders, addOrder }}>
	  {children}
	</OrdersContext.Provider>
  );
}