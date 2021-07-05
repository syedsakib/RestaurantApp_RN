import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Screen from "../../components/Screen";

const UpdateAddress = ({ navigation }) => {
  return (
    <Screen>
      <Text>Update Address</Text>
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

export default UpdateAddress;
