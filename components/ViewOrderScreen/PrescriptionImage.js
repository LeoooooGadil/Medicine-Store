import { Image, View, Text } from "react-native";
import tw from "twrnc";
import Colors from "../../constants/Colors";
import { AntDesign } from "@expo/vector-icons";
import { OrdersPrescriptionValidationStatus } from "../../constants/OrdersValidationStatus";

export default function PrescriptionImage({ uri, validationStatus }) {
  return (
    <View style={tw`mx-8 mt-3 h-100 gap-2`}>
      <Text style={tw`text-lg font-bold`}>Prescription</Text>
      <View style={tw`shadow-md rounded-xl`}>
        <Image source={{ uri: uri }} style={tw`w-full h-full rounded-xl`} />
        <View
          style={[
            tw`absolute bottom-0 left-0 right-0 p-2 rounded-b-xl flex-row justify-between items-center`,
          ]}
        >
          <View />
          <View>
            {
              validationStatus === OrdersPrescriptionValidationStatus.Pending ? (
                <AntDesign name="exclamationcircle" size={24} color={Colors.Alto} />
              ) : validationStatus === OrdersPrescriptionValidationStatus.Approved ? (
                <AntDesign name="checkcircle" size={24} color={Colors.Success} />
              ) : validationStatus === OrdersPrescriptionValidationStatus.Rejected ? (
                <AntDesign name="closecircle" size={24} color={Colors.Error} />
              ) : null
            }
          </View>
        </View>
      </View>
    </View>
  );
}
