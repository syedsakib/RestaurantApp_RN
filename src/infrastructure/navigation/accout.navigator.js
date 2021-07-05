import React from "react";
import ProfileScreen from "../../screens/Settings/ProfileScreen";
import UpdateProfileScreen from "../../screens/Settings/UpdateProfileScreen";
import OrderDetailsScreen from "../../screens/Settings/OrderDetailsScreen";
import FavouritesScreen from "../../screens/Settings/FavouritesScreen";
import UpdateAddress from "../../screens/Settings/UpdateAddress";

import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";

const ProfileStack = createStackNavigator();

const AccountNavigator = ({ route, navigation }) => {
  return (
    <ProfileStack.Navigator
      // headerMode="screen"
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <ProfileStack.Screen name="Profile" component={ProfileScreen} />
      <ProfileStack.Screen
        name="UpdateProfile"
        component={UpdateProfileScreen}
      />
      <ProfileStack.Screen name="Favourites" component={FavouritesScreen} />
      <ProfileStack.Screen name="OrderDetails" component={OrderDetailsScreen} />
      <ProfileStack.Screen name="UpdateAddress" component={UpdateAddress} />
    </ProfileStack.Navigator>
  );
};

export default AccountNavigator;
