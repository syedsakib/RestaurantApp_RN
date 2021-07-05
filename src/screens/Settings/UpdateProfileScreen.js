import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Screen from "../../components/Screen";

const UpdateProfileScreen = ({ navigation }) => {
  return (
    <Screen>
      <Text>Update Profile</Text>
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

export default UpdateProfileScreen;
