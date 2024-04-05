import { View, Text, Image } from "react-native";
import tw from "twrnc";
import Colors from "../../constants/Colors";

export default function AppLogo() {
  return (
    <View style={tw`justify-center items-center mt-15`}>
      <View style={tw`items-center gap-2`}>
        <Image
          source={require("../../assets/images/philcure-logo.png")}
          style={{
            width: 80,
            height: 80,
            resizeMode: "contain",
			...tw`mb-2 mr-4`,
          }}
        />
        <View style={tw`flex-row`}>
          <Text style={tw`font-bold text-4xl tracking-wide`}>Phil</Text>
          <Text style={tw`text-4xl tracking-wide`}>Cure</Text>
        </View>
      </View>
    </View>
  );
}
