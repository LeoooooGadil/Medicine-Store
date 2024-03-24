import React, { useRef } from "react";
import { View, Text, Dimensions } from "react-native";
import tw from "twrnc";
import Carousel from "react-native-snap-carousel";
import Colors from "../../constants/Colors";

const data = [
  {
    title: "Welcome to our store!",
    description: "Get the best deals on our products.",
  },
  {
    title: "Call a Pharmacist",
    description: "Get in touch with our pharmacists for free consultation.",
  },
  {
    title: "Special offers",
    description: "Get special offers on selected products.",
  },
];

export default function WelcomeBanner() {
  const carouselRef = useRef(null);
  const { width } = Dimensions.get("window");

  return (
    <View style={tw`pb-2 pt-3`}>
      <Carousel
        ref={carouselRef}
        data={data}
        renderItem={({ item }) => {
          return (
            <View
              style={tw`bg-[${Colors.LightBlue}] rounded-xl shadow-md h-40 flex-col gap-2 py-8`} 
            >
              <View style={tw`flex-1 justify-center`}>
                <Text style={tw`text-4xl font-bold text-left text-white`}>
                  {item.title}
                </Text>
              </View>
              <View style={tw`flex-1`}>
                <Text style={tw`text-left text-sm opacity-75 text-white`}>
                  {item.description}
                </Text>
              </View>
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
