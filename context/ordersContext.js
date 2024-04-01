import React, { createContext, useContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const OrdersContext = createContext();

export const useOrders = () => useContext(OrdersContext);

export const OrdersProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);
  const [isOrderBeenUpdated, setIsOrderBeenUpdated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [viewOrderSelected, setViewOrderSelected] = useState({});

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

  const getViewOrderSelected = async () => {
    return viewOrderSelected;
  }

  const SetViewOrderSelected = async (order) => {
    setViewOrderSelected(order);
  }

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
      setIsOrderBeenUpdated(true);
    }
  };

  const clearOrders = async () => {
    setLoading(true);
    try {
      await AsyncStorage.removeItem("orders");
      setOrders([]);
    } catch (error) {
      console.error("Error clearing orders: ", error);
    } finally {
      setLoading(false);
	  setIsOrderBeenUpdated(true);
    }
  };

  return (
    <OrdersContext.Provider
      value={{ orders, loading, isOrderBeenUpdated, viewOrderSelected, getOrders, addOrder, clearOrders, getViewOrderSelected, SetViewOrderSelected }}
    >
      {children}
    </OrdersContext.Provider>
  );
};
