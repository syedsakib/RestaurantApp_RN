import React from "react";

//NAVIGATIN(BOTTOM TAB):
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

//Screens
import RestaurantsScreen from "../../screens/RestaurantsScreen";
import CartScreen from "../../screens/CartScreen";
import OrderScreen from "../../screens/OrderScreen";
import AccountNavigator from "../../screens/Settings/accout.navigator";

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
      <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />

      <Tab.Screen name="Orders" component={OrderScreen} />
      <Tab.Screen name="Settings" component={AccountNavigator} />
    </Tab.Navigator>
  );
};

export default AppNavigator;
