import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator, TransitionSpecs } from "@react-navigation/stack";

import HomeTabScreen from "../screens/HomeTabScreen";
import CartTabScreen from "../screens/CartTabScreen";
import OrdersTabScreen from "../screens/OrdersTabScreen";
import SearchTabScreen from "../screens/SearchTabScreen";
import MenuTabScreen from "../screens/MenuTabScreen";
import Colors from "../constants/Colors";
import { View, Text } from "react-native";


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
        tabBarInactiveTintColor: Colors.QuickSilver,
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
      <BottomTab.Screen
        name="Menu"
        component={AccountNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <AccountIcon name="Jann Leo" focused={focused} />
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
      size={27}
      style={{ marginBottom: -3 }}
      {...props}
      color={props.focused ? Colors.Lava : Colors.QuickSilver}
      name={`${props.name}${props.focused ? "" : "-outline"}`}
    />
  );
}

// a circle icon with the user's first name initial like
// John Leo -> J
// Jann Leo Gadil -> J
// Alyssa Mae -> A
function AccountIcon(props) {
  return (
    <View
      style={{
        width: 27,
        height: 27,
        borderRadius: 20,
        backgroundColor: props.focused ? Colors.Lava : Colors.BrightGray,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ color: Colors.White, fontSize: 16 }}>{props.name[0]}</Text>
    </View>
  );
}

const slideAnimation = {
  gestureDirection: 'horizontal',
  transitionSpec: {
    open: TransitionSpecs.TransitionIOSSpec,
    close: TransitionSpecs.TransitionIOSSpec,
  },
  cardStyleInterpolator: ({ current, next, layouts }) => ({
    cardStyle: {
      transform: [
        {
          translateX: current.progress.interpolate({
            inputRange: [0, 1],
            outputRange: [layouts.screen.width, 0],
          }),
        },
        {
          translateX: next
            ? next.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [0, -layouts.screen.width],
              })
            : 0,
        },
      ],
    },
  }),
};

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomeStack = createStackNavigator();

function HomeNavigator() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        ...slideAnimation,
      }}
    >
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
    <OrdersStack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        ...slideAnimation,
      }}
    >
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
    <CartStack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        ...slideAnimation,
      }}
    >
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
    <SearchStack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        ...slideAnimation,
      }}
    >
      <SearchStack.Screen
        name="SearchScreen"
        component={SearchTabScreen}
        options={{ headerShown: false }}
      />
    </SearchStack.Navigator>
  );
}

const AccountStack = createStackNavigator();

function AccountNavigator() {
  return (
    <AccountStack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        ...slideAnimation,
      }}
    >
      <AccountStack.Screen
        name="AccountAndSettingsScreen"
        component={MenuTabScreen}
        options={{ headerShown: false }}
      />
    </AccountStack.Navigator>
  );
}
