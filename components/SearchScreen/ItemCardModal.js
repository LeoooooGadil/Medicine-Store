import { useState, useEffect, useRef, forwardRef } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import tw from "twrnc";
import Colors from "../../constants/Colors";
import Seperator from "../Seperator";
import { useCart } from "../../context/cartContext";
import { Feather, FontAwesome5 } from "@expo/vector-icons";
import { useInAppNotification } from "../InAppNotification";

import ProductImages from "../../assets/images/medicine";

export default function ItemCard({
  item,
  CloseBottomSheet,
  IsBottomSheetOpen,
}) {
  const [quantity, setQuantity] = useState(1);
  const inputRef = useRef();

  const { showNotification } = useInAppNotification();
  const { addCartItem } = useCart();

  const handleQuantityChange = (value) => {
    if (value < 1) return;
    setQuantity(value);
  };

  const AddToCart = () => {
    CloseBottomSheet();
    addCartItem(item.item ? item.item : item, quantity);
    showNotification("Item added to cart", "success");
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
    <View style={tw`bg-[${Colors.BrightGray}] h-full`}>
      <View style={tw`w-full h-42 justify-center items-center overflow-hidden`}>
        {item?.imageUrl != null ? (
          <Image
            source={ProductImages[item?.imageUrl]}
            style={tw`w-full h-42`}
          />
        ) : (
          <Text style={tw`text-white text-4xl`}>📷</Text>
        )}
      </View>
      <View style={tw`px-8 gap-2`}>
        <View style={tw`py-2 pb-0`}>
          <Text style={tw``}>{item?.brandName}</Text>
          <Text style={tw`font-bold text-4xl`}>{item?.name}</Text>
        </View>
        <View style={tw`relative pb-4`}>
          <View style={tw`absolute p-1 px-2 rounded-xl bg-[${Colors.SinBad}]`}>
            <Text style={tw`text-white`}>
              {item?.dosage}
              {item?.dosageType}
            </Text>
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
          <Text style={tw`opacity-75`}>{item?.description}</Text>
        </View>
        <Seperator />
        <Text style={tw`opacity-75 font-bold`}>{item?.manufacturer}</Text>
        <Seperator />
        <>
          {item?.isPrescriptionRequired ? (
            <View style={tw`flex-row items-center gap-1`}>
              <FontAwesome5
                name="prescription"
                size={13}
                color={Colors.AlizarinCrimson}
              />
              <Text style={tw`text-[${Colors.AlizarinCrimson}]`}>Required</Text>
            </View>
          ) : null}
        </>
      </View>
      <View
        style={tw`mx-8 p-2 pl-0 shadow-md rounded-xl mt-10 flex-row justify-between bg-[${Colors.White}]`}
      >
        <View style={tw`flex-row`}>
          <TouchableOpacity
            style={tw`h-10 w-10 rounded-full justify-center items-center`}
            onPress={() => handleQuantityChange(quantity - 1)}
          >
            <Feather name="minus" size={18} color="black" />
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
            <Feather name="plus" size={18} color="black" />
          </TouchableOpacity>
        </View>
        <View style={tw`flex-row justify-center items-center gap-4`}>
          <Text style={tw`text-lg ${quantity > 1 ? "font-bold" : ""}`}>
            ₱ {(item?.price * quantity).toFixed(2)}
          </Text>
          <View>
            <TouchableOpacity
              style={tw`bg-[${Colors.DarkOrange}] rounded-lg p-3`}
              onPress={AddToCart}
            >
              <Text style={tw`text-white text-center`}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
