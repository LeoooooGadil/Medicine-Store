import { View, Text, Image } from "react-native";
import tw from "twrnc";
import Colors from "../../../constants/Colors";
import { FontAwesome5, AntDesign } from "@expo/vector-icons";

import ProductImages from "../../../assets/images/medicine";

export default function SummaryItem({ item }) {
  return (
    <View style={tw`bg-[${Colors.White}] shadow-md rounded-xl p-4 py-3`}>
      <View style={tw`flex-row justify-between items-center`}>
        <View
          style={tw`w-13 h-13 justify-center items-center rounded-lg`}
        >
          {item.item.imageUrl != null ? (
            <Image
              source={ProductImages[item.item.imageUrl]}
              style={tw`w-13 h-13`}
            />
          ) : (
            <Text style={tw`text-white text-2xl`}>📷</Text>
          )}
        </View>
        <View style={tw`flex-1 ml-4 flex-row gap-2 h-full pt-1`}>
          <Text style={tw`font-bold `}>
            {item.item.name} - {item.item.brandName}
          </Text>
        </View>
      </View>
      <View style={tw`flex-row justify-between items-center ml-17`}>
        <View style={tw`flex-row gap-2 items-center`}>
          <Text style={tw`opacity-75`}>₱ {item.item.price.toFixed(2)}</Text>
          <Text style={tw`opacity-75`}>x</Text>
          <Text>{item.quantity}</Text>
        </View>
        <View style={tw`flex-row gap-2 items-center`}>
          <Text style={tw`font-bold`}>
            ₱ {(item.item.price * item.quantity).toFixed(2)}
          </Text>
        </View>
      </View>
      {item.item.isPrescriptionRequired && (
        <View style={tw`ml-17 flex-row items-center mt-2 gap-2`}>
          <AntDesign
            name="exclamationcircle"
            size={13}
            color={Colors.AlizarinCrimson}
          />
          <View style={tw`flex-row items-center gap-1`}>
            <FontAwesome5
              name="prescription"
              size={13}
              color={Colors.AlizarinCrimson}
            />
            <Text style={tw`text-[${Colors.AlizarinCrimson}]`}>Required</Text>
          </View>
        </View>
      )}
    </View>
  );
}
