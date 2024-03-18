import { View, Text, SafeAreaView } from "react-native";
import tw from "twrnc";
import { SearchScreenHeader } from "../components/SearchScreen";

export default function SearchTabScreen({ navigation }) {
  return (
    <SafeAreaView style={tw`pt-10 flex-1`}>
      <SearchScreenHeader GoToCart={() => navigation.navigate("Cart")} />
    </SafeAreaView>
  );
}
