import React, { createContext, useContext, useState } from "react";
import { Alert } from "react-native";
import { PaymentMethod } from "../constants/OrderPaymentMethod";
import { OrderStatus } from "../constants/OrderStatus";
import { OrdersPrescriptionValidationStatus } from "../constants/OrdersValidationStatus";
import { useOrders } from "./ordersContext";
import { useCart } from "./cartContext";

const CheckoutContext = createContext();

export const useCheckout = () => useContext(CheckoutContext);

export const CheckoutProvider = ({ children }) => {
  const { addOrder } = useOrders();
  const { clearCartItems } = useCart();
  const [orderSummary, setOrderSummary] = useState({
    id: null,
    items: [],
    paymentMethod: null,
    deliveryAddress: null,
    deliveryFee: 0,
    totalAmount: 0,
    orderStatus: null,
    prescriptionValidationStatus: null,
    orderDate: null,
    deliveryDate: null,
    pictureUri: null,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [isPrescriptionRequired, setIsPrescriptionRequired] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [isCheckoutSuccess, setIsCheckoutSuccess] = useState(false);

  // step 0: order summary & shipping address
  // step 1: is prescription required? (optional). picture upload
  // step 2: payment method
  // step 3: order confirmation

  const startCheckout = ({ navigation, cartItems }) => {
    setOrderSummary(null);
    setCurrentStep(0);
    setIsCheckingOut(true);
    setIsLoading(true);

    // a variable to add to the order date to simulate delivery date
    // a random days between 1 to 3 days
    // 86400000 is 1 day in milliseconds
    // 259200000 is 3 days in milliseconds
    const randomDeliveryDays = Math.floor(Math.random() * 3) + 1;
    const deliveryDate = new Date(Date.now() + 86400000 * randomDeliveryDays);
    const deliveryFee = 0.0;
    const isPrescriptionRequired = cartItems.some(
      (item) => item.item.isPrescriptionRequired
    );

    const totalAmount =
      cartItems.reduce(
        (acc, item) => acc + item.item.price * item.quantity,
        0
      ) + deliveryFee;

    // dont allow checkout if total amount is less than 150
    if (totalAmount < 150) {
      setIsLoading(false);
      setIsCheckingOut(false);
      Alert.alert(
        "Minimum Order Amount",
        `You need ₱${150 - totalAmount} more to checkout. Minimum order amount is ₱150.`
      );
      return;
    }

    setIsPrescriptionRequired(isPrescriptionRequired);

    setOrderSummary({
      ...orderSummary,
      // set id randomly
      id: `PBS-${Math.floor(Math.random() * 1000)}`,
      items: cartItems,
      paymentMethod: PaymentMethod.CashOnDelivery,
      deliveryAddress: "",
      deliveryFee: deliveryFee,
      totalAmount: totalAmount,
      orderStatus: OrderStatus.Pending,
      prescriptionValidationStatus: isPrescriptionRequired
        ? OrdersPrescriptionValidationStatus.Pending
        : OrdersPrescriptionValidationStatus.NotRequired,
      orderDate: new Date(),
      deliveryDate: deliveryDate,
    });
    // Simulate a delay randomly between 1 to 2 seconds
    // just to show the loading indicator
    navigation.navigate("Checkout");
    setTimeout(() => {
      setIsCheckingOut(false);
      setIsLoading(false);
    }, Math.floor(Math.random() * 1000) + 1000);
  };

  const nextStep = () => {
    setCurrentStep((prevStep) => {
      // go to the next step
      // if the current step is 0 and prescription is required
      // go to step 1
      // if the current step is 0 and prescription is not required
      // go to step 2
      // if the current step is 1
      // go to step 2
      // if the current step is 2
      // go to step 3

      if (prevStep === 0 && isPrescriptionRequired) {
        return 1;
      } else if (prevStep === 0 && !isPrescriptionRequired) {
        return 2;
      } else if (prevStep === 1) {
        return 2;
      } else if (prevStep === 2) {
        return 3;
      } else {
        return prevStep;
      }
    });
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => {
      // go to the previous step
      // if the current step is 1
      // go to step 0
      // if the current step is 2 and prescription is required
      // go to step 1
      // if the current step is 2 and prescription is not required
      // go to step 0
      // if the current step is 2
      // go to step 1
      // if the current step is 3
      // go to step 2
      // else stay on the current step
      if (prevStep === 1) {
        return 0;
      } else if (prevStep === 2 && isPrescriptionRequired) {
        return 1;
      } else if (prevStep === 2 && !isPrescriptionRequired) {
        return 0;
      } else if (prevStep === 2) {
        return 1;
      } else if (prevStep === 3) {
        return 2;
      } else {
        return prevStep;
      }
    });
  };

  const orderConfirmation = () => {
    if (isCheckoutSuccess) return;

    setIsLoading(true);
    addOrder(orderSummary);
    clearCartItems();
    setIsCheckoutSuccess(true);
    // Simulate a delay randomly between 1 to 3 seconds
    // just to show the loading indicator
    setTimeout(() => {
      setIsLoading(false);
      setIsCheckoutSuccess(false);
    }, Math.floor(Math.random() * 2000) + 1000);
  };

  return (
    <CheckoutContext.Provider
      value={{
        isLoading,
        isCheckingOut,
        currentStep,
        orderSummary,
        isPrescriptionRequired,
        setOrderSummary,
        startCheckout,
        nextStep,
        prevStep,
        orderConfirmation,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
};
