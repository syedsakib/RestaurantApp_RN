import React from "react";
import { Text, TouchableOpacity } from "react-native";

import Screen from "../../components/Screen";

const ProfileScreen = ({ navigation }) => {
  return (
    <Screen>
      <TouchableOpacity
        style={{
          backgroundColor: "green",
          padding: 10,
          margin: 20,
        }}
        onPress={() => navigation.navigate("UpdateProfile")}
      >
        <Text>Update Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          backgroundColor: "green",
          padding: 10,
          margin: 20,
        }}
        onPress={() => navigation.navigate("Favourites")}
      >
        <Text>Favourites</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          backgroundColor: "green",
          padding: 10,
          margin: 20,
        }}
        onPress={() => navigation.navigate("OrderDetails")}
      >
        <Text>Order Details Screen</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          backgroundColor: "green",
          padding: 10,
          margin: 20,
        }}
        onPress={() => navigation.navigate("UpdateAddress")}
      >
        <Text>Update Address Screen</Text>
      </TouchableOpacity>
    </Screen>
  );
};

export default ProfileScreen;
