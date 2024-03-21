import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import HomeTabScreen from "../screens/HomeTabScreen";
import CartTabScreen from "../screens/CartTabScreen";
import OrdersTabScreen from "../screens/OrdersTabScreen";
import SearchTabScreen from "../screens/SearchTabScreen";
import Colors from "../constants/Colors";

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "bold",
        },
        tabBarActiveTintColor: Colors.Lava,
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon name="home" focused={focused} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={SearchNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon name="search" focused={focused} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Cart"
        component={CartNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon name="cart" focused={focused} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Orders"
        component={OrdersNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon name="cube" focused={focused} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props) {
  return (
    <Ionicons
      size={props.focused ? 32 : 25}
      style={{ marginBottom: -3 }}
      {...props}
      color={props.focused ? Colors.Lava : Colors.BrightGray}
      name={`${props.name}${props.focused ? "" : "-outline"}`}
    />
  );
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomeStack = createStackNavigator();

function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeTabScreen}
        options={{ headerShown: false }}
      />
    </HomeStack.Navigator>
  );
}

const OrdersStack = createStackNavigator();

function OrdersNavigator() {
  return (
    <OrdersStack.Navigator>
      <OrdersStack.Screen
        name="OrdersScreen"
        component={OrdersTabScreen}
        options={{ headerShown: false }}
      />
    </OrdersStack.Navigator>
  );
}

const CartStack = createStackNavigator();

function CartNavigator() {
  return (
    <CartStack.Navigator>
      <CartStack.Screen
        name="CartScreen"
        component={CartTabScreen}
        options={{ headerShown: false }}
      />
    </CartStack.Navigator>
  );
}

const SearchStack = createStackNavigator();

function SearchNavigator() {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen
        name="SearchScreen"
        component={SearchTabScreen}
        options={{ headerShown: false }}
      />
    </SearchStack.Navigator>
  );
}
