import { SafeAreaView } from "react-native";
import tw from "twrnc";

import {
  HomeScreenHeader,
  WelcomeBanner,
  ExploreOurProducts,
} from "../components/HomeScreen";
import { Seperator } from "../components";
export default function HomeTabScreen({ navigation }) {
  return (
    <SafeAreaView style={tw`gap-2`}>
      <HomeScreenHeader
        GoToSearch={() => navigation.navigate("Search")}
        GoToCart={() => navigation.navigate("Cart")}
      />
      <WelcomeBanner />
      <Seperator />
      <ExploreOurProducts GoToSearch={() => navigation.navigate("Search")} />
    </SafeAreaView>
  );
}
