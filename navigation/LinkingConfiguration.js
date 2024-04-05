/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */
import * as Linking from "expo-linking";

export default {
  prefixes: [Linking.createURL("/")],
  config: {
    screens: {
      Auth: "auth",
      Register: "register",
      Checkout: "checkout",
      AddressBook: "addressbook",
      ViewOrder: "vieworder",
      Root: {
        screens: {
          HomeTabScreen: "home",
          SearchTabScreen: "search",
          CartTabScreen: "cart",
          OrdersTabScreen: "orders",
          CheckoutScreen: "checkout",
        },
      },
      NotFound: "*",
    },
  },
};
