import { View, Text } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import Colors from '../../constants/Colors';

export default function AddAddressModal() {
	return (
		<View style={tw`flex-1 items-center justify-center bg-[${Colors.BrightGray}]`}>
			<Text style={tw`text-lg`}>Add Address Modal</Text>
		</View>
	)
}