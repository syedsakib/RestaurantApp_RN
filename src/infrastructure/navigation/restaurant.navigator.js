import React from "react";

import RestaurantsScreen from "../../screens/Restaurants/RestaurantsScreen";
import RestaurantDetailsScreen from "../../screens/Restaurants/RestaurantDetailsScreen";

import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";

const RestaurantStack = createStackNavigator();

const RestaurantNavigator = ({ route, navigation }) => {
  return (
    <RestaurantStack.Navigator
      // headerMode="screen"
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <RestaurantStack.Screen
        name="Restaurants"
        component={RestaurantsScreen}
      />
      <RestaurantStack.Screen
        name="RestaurantDetails"
        component={RestaurantDetailsScreen}
      />
    </RestaurantStack.Navigator>
  );
};

export default RestaurantNavigator;
