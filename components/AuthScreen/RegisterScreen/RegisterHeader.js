import { View, Text, TouchableOpacity } from "react-native";
import tw from "twrnc";
import Colors from "../../../constants/Colors";
import { AntDesign } from "@expo/vector-icons";
import { useAuthentication } from "../../../hooks/useAuthentication";

export default function RegisterHeader({ GoBack, CurrentStep }) {
  const { clearDatabase } = useAuthentication();
  return (
    <View style={tw`px-8 pt-3 flex-row h-14`}>
      <View style={tw`flex-row items-center gap-4`}>
        {CurrentStep !== 5 && (
          <>
            <TouchableOpacity style={tw``} onPress={GoBack}>
              <AntDesign name="arrowleft" size={24} color="black" />
            </TouchableOpacity>
            <Text style={tw`text-3xl font-bold`}>Create Account</Text>
          </>
        )}
        <TouchableOpacity style={tw`ml-auto`} onPress={clearDatabase}>
          <Text style={tw`text-gray-400`}>Clear Database</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
