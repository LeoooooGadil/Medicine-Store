import React, { useRef } from "react";
import { View, Text, Dimensions, TouchableOpacity, Image } from "react-native";
import tw from "twrnc";
import Carousel from "react-native-snap-carousel";
import Colors from "../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const data = [
  {
    title: "Welcome to our store!",
    component: (GoToNextSlide) => {
      return (
        <LinearGradient
          colors={[Colors.AlizarinCrimson, Colors.ApricotPeach, Colors.Froly]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={tw`rounded-xl shadow-md p-0.7 flex-1 h-40`}
        >
          <View
            style={tw`px-4 bg-[${Colors.White}] h-full justify-between py-4 rounded-lg`}
          >
            <View style={tw`flex-col justify-center`}>
              <Text style={tw`text-3xl font-bold text-gray-800`}>
                Welcome to PhilCure
              </Text>
              <Text style={tw`text-lg text-gray-800`}>
                Get your medicines delivered to your doorstep.
              </Text>
            </View>
            <TouchableOpacity
              style={tw`flex-row justify-end`}
              onPress={GoToNextSlide}
            >
              <Text
                style={tw`text-lg text-gray-800 text-[${Colors.DarkOrange}]`}
              >
                Swipe to continue
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
    title: "",
    component: (GoToNextSlide) => {
      return (
        <LinearGradient
          colors={[Colors.SinBad, Colors.WedgeWood, Colors.ApricotPeach]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={tw`rounded-xl shadow-md p-0.7 flex-1 h-40 `}
        >
          <View
            style={tw`px-4 bg-[${Colors.White}] h-full justify-center py-4 rounded-lg relative`}
          >
             <Image
            source={require("../../assets/images/your-affordable.png")}
            style={{
              width: 350,
              height: 350,
              resizeMode: "contain",
            }}
          />
          </View>
        </LinearGradient>
      );
    },
  },

  {
    title: "We'll sort your medicines for you!",
    component: (GoToNextSlide) => {
      return (
        <LinearGradient
          colors={[Colors.AlizarinCrimson, Colors.ApricotPeach, Colors.Froly]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={tw`rounded-xl shadow-md p-0.7 flex-1 h-40`}
        >
          <View
            style={tw`px-4 bg-[${Colors.White}] h-full justify-between py-4 rounded-lg`}
          >
            <View style={tw`flex-col justify-center`}>
              <Text style={tw`text-xl font-bold text-gray-800 text-left `}>
                Medicines are sorted, just for you!
              </Text>
              <Text style={tw`py-4 text-xl text-gray-800`}>
                PhilCure will sort your prescription, and will be sealed per date, day, and time of consumption.
              </Text>
            </View>
              <Text style={tw`text-lg text-gray-800`}>
              </Text>
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
          style={tw`rounded-xl shadow-md p-0.7 flex-1 h-40 `}
        >
          <View
            style={tw`px-4 bg-[${Colors.White}] h-full justify-between py-4 rounded-lg relative`}
          >
            <Text style={tw`
              absolute top-2 right-2 bg-[${Colors.DarkOrange}] text-[${Colors.White}] rounded-full w-6 h-6 text-center
            `}>?</Text>
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
