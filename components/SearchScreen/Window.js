import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import tw from "twrnc";

import SearchWindow from "./SearchWindow";
import ResultWindow from "./ResultWindow";
import SearchScreenHeader from "./SearchScreenHeader";
import SearchProductsList from "./SearchProductsList";

export default function SearchScreenWindow({ GoToCart }) {
  const [isSearchWindowOpen, setIsSearchWindowOpen] = useState(false);

  const ToggleSearchWindow = () => {
    setIsSearchWindowOpen(!isSearchWindowOpen);
  };

  return (
    <>
      { !isSearchWindowOpen &&
        <SearchScreenHeader GoToCart={() => navigation.navigate("Cart")} />
      }
      <ScrollView keyboardShouldPersistTaps="handled" style={tw`h-full`}>
        {isSearchWindowOpen ? (
          <SearchWindow ToggleSearchWindow={ToggleSearchWindow} />
        ) : (
          <>
            <ResultWindow
              ToggleSearchWindow={ToggleSearchWindow}
              GoToCart={GoToCart}
            />
            <SearchProductsList />
            <View style={tw`w-full h-28`}></View>
          </>
        )}
      </ScrollView>
    </>
  );
}
