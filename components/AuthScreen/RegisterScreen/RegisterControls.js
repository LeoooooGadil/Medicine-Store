import { View, Text, TouchableOpacity } from "react-native";
import tw from "twrnc";
import Colors from "../../../constants/Colors";

export default function RegisterControls({
  currentStep,
  nextStep,
  isCreatingAccount,
  navigation
}) {

  return (
    <View style={tw`mt-10 gap-4`}>
      {
        !isCreatingAccount ? (
          <>
            { currentStep !== 5 && <TheCircleThingy currentStep={currentStep} /> }
            <View style={tw`flex-row px-8`}>
              <TouchableOpacity
                style={tw`flex-1 justify-center items-center bg-[${Colors.AlizarinCrimson}] rounded-lg h-14`}
                onPress={nextStep}
              >
                <Text style={tw`text-lg text-white`}>
                  {currentStep === 4 ? "Create Account" : "Continue"}
                </Text>
              </TouchableOpacity>
            </View>
          </>
          ) : null
      }
    </View>
  );
}

export function TheCircleThingy({ currentStep }) {
  const circlesCount = 5;

  return (
    <View style={tw`flex-row gap-2 justify-center`}>
      {Array.from({ length: circlesCount }).map((_, index) => (
        <View
          key={index}
          style={[
            tw`w-3 h-3 rounded-full border border-[${Colors.Alto2}]`,
            currentStep === index
              ? tw`bg-[${Colors.AlizarinCrimson}]`
              : tw`bg-[${Colors.Alto}]`,
          ]}
        />
      ))}
    </View>
  );
}
