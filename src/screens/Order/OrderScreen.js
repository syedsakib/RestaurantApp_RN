import React from "react";
import { Text, TouchableOpacity } from "react-native";

import Screen from "../../components/Screen";

const OrderScreen = ({ navigation }) => {
  return (
    <Screen>
      <Text> Order Screen</Text>
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
    </Screen>
  );
};

export default OrderScreen;
