import React from "react";
import { Text, TouchableOpacity } from "react-native";

import Screen from "../../components/Screen";

const RestaurantsScreen = ({ navigation }) => {
  return (
    <Screen>
      <Text> Restaurants Screen</Text>
      <TouchableOpacity
        style={{
          backgroundColor: "green",
          padding: 10,
          margin: 20,
        }}
        onPress={() => navigation.navigate("RestaurantDetails")}
      >
        <Text>Restaurant Details Screen</Text>
      </TouchableOpacity>
    </Screen>
  );
};

export default RestaurantsScreen;
