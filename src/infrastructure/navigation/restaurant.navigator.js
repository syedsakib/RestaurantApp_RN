import React from "react";

import RestaurantsScreen from "../../screens/Restaurants/RestaurantsScreen";
import RestaurantDetailsScreen from "../../screens/Restaurants/RestaurantDetailsScreen";

import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

const RestaurantStack = createStackNavigator();

export const RestaurantNavigator = ({ route, navigation }) => {
  return (
    <RestaurantStack.Navigator
      headerMode="none"
      screenOptions={{
        ...TransitionPresets.ModalPresentationIOS,
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

//export default RestaurantNavigator;
