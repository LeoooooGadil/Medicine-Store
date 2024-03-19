import { View, FlatList } from "react-native";
import tw from "twrnc";

import Products from "../../constants/Products";
import ItemContainer from "../ItemContainer";

export default function SearchProductsList({ AvailableProducts }) {
  const _products = AvailableProducts || Products;

  return (
    <View style={tw`pb-29`}>
      <FlatList
        data={_products}
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
