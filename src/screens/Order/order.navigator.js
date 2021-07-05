import React from "react";
import OrderScreen from "./OrderScreen";
import OrderDetailsScreen from "./OrderDetailsScreen";

import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";

const OrderStack = createStackNavigator();

const OrderNavigator = ({ route, navigation }) => {
  return (
    <OrderStack.Navigator
      // headerMode="screen"
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <OrderStack.Screen name="Orders" component={OrderScreen} />
      <OrderStack.Screen name="OrderDetails" component={OrderDetailsScreen} />
    </OrderStack.Navigator>
  );
};

export default OrderNavigator;
