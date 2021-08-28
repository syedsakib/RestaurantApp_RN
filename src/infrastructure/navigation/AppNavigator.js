import React from "react";

//NAVIGATIN(BOTTOM TAB):
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

//Screens
import { RestaurantNavigator } from "./restaurant.navigator";
import OrderNavigator from "./order.navigator";
import AccountNavigator from "./accout.navigator";
import CartNavigator from "./cart.navigator";

//BOTTOM TAB:
const Tab = createBottomTabNavigator();
const TAB_ICON = {
  Restaurants: "md-restaurant",
  Cart: "md-cart",
  Orders: "reorder-four",
  Settings: "md-settings",
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};

const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={createScreenOptions}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Restaurants" component={RestaurantNavigator} />
      <Tab.Screen name="Cart" component={CartNavigator} />
      <Tab.Screen name="Orders" component={OrderNavigator} />
      <Tab.Screen name="Settings" component={AccountNavigator} />
    </Tab.Navigator>
  );
};

export default AppNavigator;
