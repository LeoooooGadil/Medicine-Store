import { View, FlatList } from "react-native";
import tw from "twrnc";

import Products from "../../constants/Products";
import ItemContainer from "../ItemContainer";

export default function SearchProductsList() {
  return (
    <View style={tw`pb-29`}>
      <FlatList
        data={Products}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => {
          return (
            <ItemContainer
              item={item}
              isList
              ListLocation={index % 2 == 0 ? 0 : 1}
            />
          );
        }}
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
        }}
      />
    </View>
  );
}
