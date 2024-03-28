import { View, Text } from "react-native";
import tw from "twrnc";
import Colors from "../../../constants/Colors";
import { FontAwesome5, AntDesign } from "@expo/vector-icons";

export default function SummaryItem({ item }) {
  return (
    <View style={tw`py-2 border-b border-[${Colors.Alto2}]`}>
      <View style={tw`flex-row justify-between items-center`}>
        <View
          style={tw`w-13 h-13 bg-[${Colors.SinBad}] justify-center items-center rounded-lg`}
        >
          <Text>Image</Text>
        </View>
        <View style={tw`flex-1 ml-4 flex-row gap-2`}>
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
