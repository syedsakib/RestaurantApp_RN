import React from "react";

import CartScreen from "../../screens/Cart/CartScreen";

import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";

const CartStack = createStackNavigator();

const CartNavigator = ({ route, navigation }) => {
  return (
    <CartStack.Navigator
      // headerMode="screen"
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <CartStack.Screen name="Cart" component={CartScreen} />
    </CartStack.Navigator>
  );
};

export default CartNavigator;
