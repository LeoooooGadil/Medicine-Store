import { View, Text, TouchableOpacity } from "react-native";
import tw from "twrnc";
import { AntDesign } from "@expo/vector-icons";
import { useCheckout } from "../../context/checkoutContext";

export default function CheckoutScreenHeader({ GoBack }) {
  const { currentStep } = useCheckout();

  const renderTitle = () => {
    switch (currentStep) {
      case 0:
        return "Order Summary";
      case 1:
        return "Upload Prescription";
      case 2:
        return "Payment Method";
      case 3:
        return "Order Confirmation";
      default:
        return "Checkout";
    }
  };

  return (
    <View style={tw`px-8 pt-3 flex-row h-14`}>
      <View style={tw`flex-row items-center gap-4`}>
        <TouchableOpacity style={tw``} onPress={GoBack}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <Text style={tw`text-3xl font-bold`}>{renderTitle()}</Text>
      </View>
    </View>
  );
}
