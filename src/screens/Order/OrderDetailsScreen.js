import React from "react";
import { Text, TouchableOpacity } from "react-native";
import Screen from "../../components/Screen";

const OrderDetailsScreen = ({ navigation }) => {
  return (
    <Screen>
      <Text>Order Details Screen</Text>
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

export default OrderDetailsScreen;
