import { View, Text, TouchableOpacity, Image, Alert } from "react-native";
import React, { useState, useEffect } from "react";
import tw from "twrnc";
import Colors from "../../../constants/Colors";

import { PaymentMethod } from "../../../constants/OrderPaymentMethod";

import UnionBankLogo from "../../../assets/images/unionbank.png";
import BDOBankLogo from "../../../assets/images/bdo.png";
import MetroBankLogo from "../../../assets/images/metrobank.png";
import LandBankLogo from "../../../assets/images/landbank.png";
import VisaMasterCard from "../../../assets/images/visamastercard.png";
import PaypalLogo from "../../../assets/images/paypal.png";
import GCashLogo from "../../../assets/images/gcash.png";
import MayaLogo from "../../../assets/images/maya.png";
import { useCheckout } from "../../../context/checkoutContext";

const paymentMethods = [
  {
    id: 1,
    type: PaymentMethod.CashOnDelivery,
    name: "Cash on Delivery",
    note: "Pay with cash upon delivery",
    isSetupRequired: false,
  },
  {
    id: 2,
    type: PaymentMethod.Card,
    name: "Card",
    note: "Visa, MasterCard, American Express, etc.",
    isSetupRequired: true,
    otherInfo: () => {
      return (
        <View
          style={tw`flex-row items-center mt-2 gap-2 px-2 justify-center shadow-md border-[${Colors.Alto}] border rounded-xl`}
        >
          <Image source={VisaMasterCard} style={tw`w-10 h-10`} />
          <Image source={UnionBankLogo} style={tw`w-10 h-10`} />
          <Image source={BDOBankLogo} style={tw`w-10 h-10`} />
          <Image source={MetroBankLogo} style={tw`w-10 h-10`} />
          <Image source={LandBankLogo} style={tw`w-10 h-10`} />
        </View>
      );
    },
  },
  {
    id: 3,
    type: PaymentMethod.EWallet,
    name: "E-Wallet",
    note: "Pay with your favorite e-wallets like GCash, PayMaya, Paypal, etc.",
    isSetupRequired: true,
    otherInfo: () => {
      return (
        <View
          style={tw`flex-row items-center mt-2 gap-2 px-2 justify-center shadow-md border-[${Colors.Alto}] border rounded-xl`}
        >
          <Image source={GCashLogo} style={tw`w-10 h-10`} />
          <Image source={MayaLogo} style={tw`w-10 h-10`} />
          <Image source={PaypalLogo} style={tw`w-10 h-10`} />
        </View>
      );
    },
  },
];

export default function PaymentMethodPicker() {
  const { orderSummary, setOrderSummary } = useCheckout();

  const [selected, setSelected] = useState(paymentMethods[0]);

  const selectPaymentMethod = (method) => {
	const lastSelected = selected;
	if (method.isSetupRequired) {
		setSelected(lastSelected);
		Alert.alert(
		  "Payment Method Unavailable",
		  `The ${method.name} payment method is not yet available. Please try another payment method.`,
		  [
			{
			  text: "OK",
			  onPress: () => {
				console.log("OK Pressed");
				setSelected(lastSelected);
			  },
			},
		  ]
		);
	  }
    setSelected(method);
    setOrderSummary({
      ...orderSummary,
      paymentMethod: method.type,
    });
  };

  return (
    <View style={tw`flex-1 mt-12`}>
      <View style={tw`mx-8 bg-[${Colors.White}] shadow-md rounded-xl px-4`}>
        {paymentMethods.map((method, index) => (
          <TouchableOpacity
            key={method.id}
            style={tw`flex-col items-center justify-between py-3 border-b border-gray-200`}
            onPress={() => selectPaymentMethod(method)}
          >
            <View style={tw`flex-row w-full`}>
              <View style={tw`flex-col flex-1`}>
                <Text style={tw`text-lg font-bold`}>{method.name}</Text>
                <Text style={tw`text-gray-500`}>{method.note}</Text>
              </View>
              <View style={tw`justify-center`}>
                <View
                  style={tw`w-4 h-4 border-2 border-[${Colors.AlizarinCrimson}] rounded-full flex items-center justify-center`}
                >
                  {selected.id === method.id && (
                    <View
                      style={tw`w-2 h-2 bg-[${Colors.AlizarinCrimson}] rounded-full`}
                    ></View>
                  )}
                </View>
              </View>
            </View>
            <View style={tw`flex-col w-full`}>
              {method.otherInfo && method.otherInfo()}
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
