import { useState, useEffect, useRef, forwardRef } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import tw from "twrnc";
import Colors from "../../constants/Colors";
import Seperator from "../Seperator";
import { useCart } from "../../context/cartContext";

export default function ItemCard({
  item,
  CloseBottomSheet,
  IsBottomSheetOpen,
}) {
  const [quantity, setQuantity] = useState(1);
  const inputRef = useRef();

  const { addCartItem } = useCart();

  const handleQuantityChange = (value) => {
    if (value < 1) return;
    setQuantity(value);
  };

  const AddToCart = () => {
    CloseBottomSheet();
    addCartItem(item.item ? item.item : item, quantity);
  };

  useEffect(() => {
    inputRef.current.value = quantity;
  }, [quantity]);

  useEffect(() => {
    if (IsBottomSheetOpen) {
      setQuantity(1);
    }
  }, [IsBottomSheetOpen]);

  return (
    <View>
      <View
        style={tw`w-full h-42 bg-[${Colors.LavenderBlue}] justify-center items-center`}
      >
        <Text>Image</Text>
      </View>
      <View style={tw`px-8 gap-2`}>
        <View style={tw`py-2 pb-0`}>
          <Text style={tw`opacity-50 text-lg`}>{item?.brandName}</Text>
          <Text style={tw`font-bold text-4xl`}>{item?.name}</Text>
        </View>
        <View style={tw`relative pb-4`}>
          <View
            style={tw`absolute p-1 px-2 rounded-xl bg-[${Colors.SunsetOrange}]`}
          >
            <Text style={tw`text-white`}>{item?.dosage}ml</Text>
          </View>
        </View>
        <Seperator />
        <Text>
          {item?.category.map((category, index) => {
            if (index === item?.category.length - 1) {
              return category;
            } else {
              return category + ", ";
            }
          })}
        </Text>
        <Seperator />
        <View>
          <Text>{item?.description}</Text>
        </View>
        <Seperator />
        <Text>{item?.manufacturer}</Text>
      </View>
      <View style={tw`px-8 pt-20 flex-row justify-between`}>
        <View style={tw`flex-row`}>
          <TouchableOpacity
            style={tw`h-10 w-10 rounded-full justify-center items-center`}
            onPress={() => handleQuantityChange(quantity - 1)}
          >
            <Text style={tw`text-2xl font-bold`}>-</Text>
          </TouchableOpacity>
          <View style={tw`justify-center items-center w-6`}>
            <Text ref={inputRef} style={tw`text-lg`}>
              {quantity}
            </Text>
          </View>
          <TouchableOpacity
            style={tw`h-10 w-10 rounded-full justify-center items-center`}
            onPress={() => handleQuantityChange(quantity + 1)}
          >
            <Text style={tw`text-2xl font-bold`}>+</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={tw`bg-[${Colors.SunsetOrange}] rounded-lg p-3`}
            onPress={AddToCart}
          >
            <Text style={tw`text-white text-center`}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
