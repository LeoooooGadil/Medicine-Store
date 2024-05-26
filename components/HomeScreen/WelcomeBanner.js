import React, { useRef } from "react";
import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import tw from "twrnc";
import Carousel from "react-native-snap-carousel";
import Colors from "../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";
<LinearGradient
  colors={[Colors.AlizarinCrimson, Colors.ApricotPeach, Colors.Froly]}
  start={{ x: 0, y: 0 }}
  end={{ x: 1, y: 1 }}
  style={tw`rounded-2xl shadow-md p-0.7 flex-1 h-40`}
></LinearGradient>;
const data = [
  {
    title: "Welcome to our store!",
    component: (GoToNextSlide) => {
      return (
        <LinearGradient
          colors={[Colors.AlizarinCrimson, Colors.ApricotPeach, Colors.Froly]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={tw`rounded-2xl shadow-md p-0.7 flex-1 h-40`}
        >
          <View
            style={tw`px-4 bg-[${Colors.White}] h-full justify-between py-4 rounded-xl relative overflow-hidden`}
          >
            <Text
              style={tw`
              absolute top-[-2] left-[-15] text-black text-center opacity-5
            `}
            >
              <MaterialCommunityIcons
                name="storefront"
                size={200}
                color="black"
              />
            </Text>
            <View style={tw`flex-col justify-center pl-10`}>
              <Text style={tw`text-3xl font-bold text-gray-800`}>
                Welcome to our store!
              </Text>
              <Text style={tw`text-lg text-gray-800`}>
                Get your medicines delivered at your doorstep.
              </Text>
            </View>
            <TouchableOpacity
              style={tw`flex-row justify-end`}
              onPress={GoToNextSlide}
            >
              <Text
                style={tw`text-lg text-gray-800 text-[${Colors.DarkOrange}]`}
              >
                Step 3
              </Text>
              <Text style={tw`text-lg text-gray-800`}>
                <Ionicons
                  name="chevron-forward-outline"
                  color={Colors.DarkOrange}
                  size={15}
                />
              </Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      );
    },
  },
  {
    title: "Call A Pharmacist",
    component: (GoToNextSlide) => {
      return (
        <LinearGradient
          colors={[Colors.SkyBlue, Colors.ApricotPeach, Colors.Froly]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={tw`rounded-2xl shadow-md p-0.7 flex-1 h-40 `}
        >
          <View
            style={tw`px-4 bg-[${Colors.White}] h-full justify-between py-4 rounded-xl relative overflow-hidden`}
          >
            <Text
              style={tw`
              absolute top-[-2] left-[-15] text-black text-center opacity-5
            `}
            >
              <MaterialCommunityIcons name="phone" size={200} color="black" />
            </Text>
            <View style={tw`flex-col justify-center pl-10`}>
              <Text style={tw`text-3xl font-bold text-gray-800`}>
                Call A Pharmacist
              </Text>
              <Text style={tw`text-lg text-gray-800`}>
                Get your queries answered by our pharmacists.
              </Text>
            </View>
            <TouchableOpacity
              style={tw`flex-row justify-end`}
              onPress={GoToNextSlide}
            >
              <Text
                style={tw`text-lg text-gray-800 text-[${Colors.DarkOrange}]`}
              >
                Call Now
              </Text>
              <Text style={tw`text-lg text-gray-800`}>
                <Ionicons
                  name="chevron-forward-outline"
                  color={Colors.DarkOrange}
                  size={15}
                />
              </Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      );
    },
  },
  {
    title: "How to order?",
    component: (GoToNextSlide) => {
      return (
        <LinearGradient
          colors={[Colors.SinBad, Colors.WedgeWood, Colors.ApricotPeach]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={tw`rounded-2xl shadow-md p-0.7 flex-1 h-40 `}
        >
          <View
            style={tw`px-4 bg-[${Colors.White}] h-full justify-between py-4 rounded-xl relative overflow-hidden`}
          >
            <Text
              style={tw`
              absolute top-[-2] left-[-15] text-black text-center opacity-5
            `}
            >
              <MaterialCommunityIcons
                name="information-variant"
                size={200}
                color="black"
              />
            </Text>
            <View style={tw`flex-col justify-center pl-10`}>
              <Text style={tw`text-3xl font-bold text-gray-800`}>
                How to order?
              </Text>
              <Text style={tw`text-lg text-gray-800`}>
                A simple 3-step process to order your medicines.
              </Text>
            </View>
            <TouchableOpacity
              style={tw`flex-row justify-end`}
              onPress={GoToNextSlide}
            >
              <Text
                style={tw`text-lg text-gray-800 text-[${Colors.DarkOrange}]`}
              >
                Step 1
              </Text>
              <Text style={tw`text-lg text-gray-800`}>
                <Ionicons
                  name="chevron-forward-outline"
                  color={Colors.DarkOrange}
                  size={15}
                />
              </Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      );
    },
  },
];

export default function WelcomeBanner() {
  const carouselRef = useRef(null);
  const { width } = Dimensions.get("window");

  const GoToNextSlide = () => {
    carouselRef.current.snapToNext();
  };

  return (
    <View style={tw`pb-2 pt-3`}>
      <Carousel
        ref={carouselRef}
        data={data}
        renderItem={({ item }) => {
          return (
            <View style={tw`rounded-xl shadow-md h-40`}>
              {item.component(GoToNextSlide)}
            </View>
          );
        }}
        sliderWidth={width}
        itemWidth={width - 65}
        windowSize={1}
        loop={true}
      />
    </View>
  );
}
