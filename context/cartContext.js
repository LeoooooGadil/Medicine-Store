import React, { createContext, useContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const getCartItems = async () => {
    setLoading(true);
    try {
      const items = await AsyncStorage.getItem("cartItems");
      setCartItems(items ? JSON.parse(items) : []);
    } catch (error) {
      console.error("Error getting cart items: ", error);
      setCartItems([]);
    } finally {
      setLoading(false);
    }
  };

  const addCartItem = async (item, quantity = 1) => {
    setLoading(true);
    try {
      const items = [...cartItems];
      const index = items.findIndex((i) => i.item.id === item.id);
      if (index !== -1) {
        items[index].quantity += quantity;
      } else {
        items.push({ item, quantity });
      }
      await AsyncStorage.setItem("cartItems", JSON.stringify(items));
      setCartItems(items);
    } catch (error) {
      console.error("Error adding cart item: ", error);
    } finally {
      setLoading(false);
    }
  };

  const updateCartItem = async (item, quantity) => {
    try {
      const items = [...cartItems];
      const index = items.findIndex((i) => i.item.id === item.id);
      if (index !== -1) {
        items[index].quantity = quantity;
        await AsyncStorage.setItem("cartItems", JSON.stringify(items));
        setCartItems(items);
      }
    } catch (error) {
      console.error("Error updating cart item: ", error);
    } finally {
    }
  };

  const removeCartItem = async (item) => {
    try {
      const items = [...cartItems];
      const index = items.findIndex((i) => i.item.id === item.id);
      if (index !== -1) {
        items.splice(index, 1);
        await AsyncStorage.setItem("cartItems", JSON.stringify(items));
        setCartItems(items);
      }
    } catch (error) {
      console.error("Error removing cart item: ", error);
    } finally {
    }
  };

  const clearCartItems = async () => {
    setLoading(true);
    try {
      await AsyncStorage.removeItem("cartItems");
      setCartItems([]);
    } catch (error) {
      console.error("Error clearing cart items: ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        loading,
        getCartItems,
        addCartItem,
        removeCartItem,
        clearCartItems,
        updateCartItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
