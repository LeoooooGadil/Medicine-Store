import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import tw from "twrnc";
import { useSearch } from "../../context/searchContext";

import Products from "../../constants/Products";
import Colors from "../../constants/Colors";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function ExploreOurCategories({ GoToSearch }) {
  return (
    <View style={tw`pb-2 pt-2`}>
      <View style={tw`flex-row justify-between items-center w-full px-8`}>
        <Text style={tw`text-2xl font-bold`}>Explore Our Categories</Text>
      </View>
      <Categories GoToSearch={GoToSearch} />
    </View>
  );
}

function Categories({ GoToSearch }) {
  const [CategoriesList, setCategoriesList] = useState([]);
  const { setSearch } = useSearch();

	const SearchByCategory = (category) => {
		setSearch(category);
		GoToSearch();
	}

  useEffect(() => {
    let _Categories = [];
    // item.category is an array of categories
    _Categories = Products.map((item) => item.category).flat();
    _Categories = [...new Set(_Categories)];

    // Remove duplicates
    _Categories = _Categories.filter(
      (item, index) => _Categories.indexOf(item) === index
    );

    // shuffle the array
    _Categories = _Categories.sort(() => Math.random() - 0.5);

    setCategoriesList(_Categories);
  }, []);

  return (
    <View style={tw`py-3 px-8`}>
      <View style={tw`flex-row flex-wrap gap-2`}>
        {CategoriesList.map((item, index) => {
          return (
            <TouchableOpacity
              style={tw`bg-[${Colors.White}] p-3 px-5 rounded-xl shadow-md`}
              key={index}
							onPress={() => SearchByCategory(item)}
            >
              <Text style={tw`font-bold`}>{item}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
