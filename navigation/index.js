// If you are not familiar with React Navigation, check out the "Fundamentals" guide:
// https://reactnavigation.org/docs/getting-started
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import NotFoundScreen from "../screens/NotFoundScreen";
import BottomTabNavigator from "./BottomTabNavigator";
import CheckoutScreen from "../screens/CheckoutScreen";
import AddressBookScreen from "../screens/AddressBookTabScreen";
import ViewOrderScreen from "../screens/ViewOrderScreen";
import AuthScreen from "../screens/AuthScreen";
import RegisterScreen from "../screens/RegisterScreen";
import LoadingScreen from "../screens/LoadingScreen";

import LinkingConfiguration from "./LinkingConfiguration";
import { AuthProvider } from "../hooks/useAuthentication";
import { RegisterProvider } from "../context/registerContext";
import { CheckoutProvider } from "../context/checkoutContext";

export default function Navigation() {
  return (
    <NavigationContainer linking={LinkingConfiguration}>
      <AuthProvider>
        <RegisterProvider>
          <CheckoutProvider>
            <RootNavigator />
          </CheckoutProvider>
        </RegisterProvider>
      </AuthProvider>
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      options={{
        animationTypeForReplace: "none",
      }}
      initialRouteName="Loading"
    >
      <Stack.Screen name="Loading" component={LoadingScreen} />
      <Stack.Screen name="Auth" component={AuthScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Root" component={BottomTabNavigator} />
      <Stack.Screen name="Checkout" component={CheckoutScreen} />
      <Stack.Screen name="AddressBook" component={AddressBookScreen} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} />
      <Stack.Screen name="ViewOrder" component={ViewOrderScreen} />
    </Stack.Navigator>
  );
}
