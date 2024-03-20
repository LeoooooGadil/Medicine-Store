import { useState, useEffect } from 'react';
import { useSQLite } from './useSQlite';


const useCart = () => {
	const [cartItems, setCartItems] = useState([]);
	const { insertData, selectData, updateData } = useSQLite('myDB.db', 'cart');
  
	useEffect(() => {
	  // Fetch cart items from SQLite on component mount
	  selectData((data) => {
		setCartItems(data);
	  });
	}, []);
  
	const addItemToCart = (item) => {
	  const existingItemIndex = cartItems.findIndex(
		existingItem => existingItem.name === item.name
	  );
  
	  if (existingItemIndex !== -1) {
		const updatedCartItems = [...cartItems];
		updatedCartItems[existingItemIndex].quantity += item.quantity;
		setCartItems(updatedCartItems);
  
		// Update quantity in SQLite database
		updateData(updatedCartItems[existingItemIndex].id, { quantity: updatedCartItems[existingItemIndex].quantity }, () => {
		  console.log('Quantity updated in SQLite');
		});
	  } else {
		setCartItems(prevItems => [...prevItems, item]);
  
		// Insert item into SQLite database
		insertData(item, () => {
		  console.log('Item added to cart in SQLite');
		});
	  }
	};
  
	const removeItemFromCart = (index) => {
	  const newCartItems = [...cartItems];
	  newCartItems.splice(index, 1);
	  setCartItems(newCartItems);
	  // Remove item from SQLite database
	  // Add your logic here
	};
  
	return { cartItems, addItemToCart, removeItemFromCart };
  };
  