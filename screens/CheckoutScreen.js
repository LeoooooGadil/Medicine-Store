import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import tw from "twrnc";
import Colors from "../constants/Colors";

export default function CheckoutScreen({ navigation }) {
  return (
    <View style={tw`bg-[${Colors.BrightGray}] justify-center items-center flex-1`}>
      <Text style={styles.title}>This is the checkout screen!</Text>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.link}
      >
        <Text style={styles.linkText}>Go to home screen!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: "#2e78b7",
  },
});
