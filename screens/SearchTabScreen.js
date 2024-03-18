import { SafeAreaView } from "react-native";
import tw from "twrnc";
import { SearchScreenWindow } from "../components/SearchScreen";

export default function SearchTabScreen({ navigation }) {
  return (
    <SafeAreaView style={tw`pt-10 flex-1`}>
      <SearchScreenWindow GoToCart={() => navigation.navigate("Cart")} />
    </SafeAreaView>
  );
}
