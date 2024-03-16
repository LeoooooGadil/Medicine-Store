import { SafeAreaView } from "react-native";
import tw from "twrnc";

import {
  HomeScreenHeader,
  WelcomeBanner,
  ExploreOurProducts,
} from "../components/HomeScreen";
import { Seperator } from "../components";
export default function HomeTabScreen() {
  return (
    <SafeAreaView style={tw`gap-2`}>
      <HomeScreenHeader />
      <WelcomeBanner />
      <Seperator />
      <ExploreOurProducts />
    </SafeAreaView>
  );
}
