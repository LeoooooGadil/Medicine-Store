import { Image, View, Text } from "react-native";
import tw from "twrnc";
import Colors from "../../constants/Colors";

export default function PrescriptionImage({ uri }) {
  return (
    <View style={tw`mx-8 h-100 gap-2`}>
      <Text style={tw`text-lg font-bold`}>
        Prescription
      </Text>
      <View style={tw`shadow-md rounded-xl`}>
        <Image source={{ uri: uri }} style={tw`w-full h-full rounded-xl`} />
      </View>
    </View>
  );
}
