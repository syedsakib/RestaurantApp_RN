import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Screen from "../../components/Screen";

const FavouritesScreen = ({ navigation }) => {
  return (
    <Screen>
      <Text>Favourites Screen</Text>
      <TouchableOpacity
        style={{
          backgroundColor: "green",
          padding: 10,
          margin: 20,
        }}
        onPress={() => navigation.goBack()}
      >
        <Text>Go Back</Text>
      </TouchableOpacity>
    </Screen>
  );
};

export default FavouritesScreen;
