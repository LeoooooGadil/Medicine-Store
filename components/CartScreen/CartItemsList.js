import { View, Text } from "react-native";
import tw from "twrnc";
import Colors from "../../constants/Colors";

const DUMMY_DATA = [
  {
    id: "1",
    name: "Product Name",
    quantity: 1,
    price: 100,
    image: "https://via.placeholder.com/150",
  },
  {
    id: "2",
    name: "Product Name",
    quantity: 1,
    price: 100,
    image: "https://via.placeholder.com/150",
  },
];

export default function CartItemsList() {
  return (
    <View style={tw`px-8 pt-10 flex-col gap-3`}>
      {DUMMY_DATA.map((item, index) => (
        <View style={tw`rounded-xl flex-row p-4 py-5 shadow-md bg-white justify-between items-center`} key={index}>
          <View style={tw`flex-row gap-3 items-center`}>
            <View style={tw`flex-row items-center`}>
              <Text style={tw`text-xl`}>{item.quantity}</Text>
			  <Text style={tw`text-lg opacity-30`}>x</Text>
            </View>
            <Text style={tw`font-bold text-lg`}>{item.name}</Text>
          </View>
          <View>
			<Text style={tw`font-bold text-lg`}>${item.price}</Text>
		  </View>
        </View>
      ))}
    </View>
  );
}
