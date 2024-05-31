import { View, Text, Image } from "react-native";
import tw from "twrnc";
import Colors from "../../constants/Colors";

export default function AppLogo() {
  return (
    <View style={tw`justify-center items-center mt-20`}>
      <View style={tw`items-center gap-2`}>
        <Image
          source={require("../../assets/images/philcure-logo-revised.png")}
          style={{
            width: 200,
            height: 100,
            resizeMode: "contain",
			...tw`mb-2 mr-4`,
          }}
        />
      </View>
    </View>
  );
}
