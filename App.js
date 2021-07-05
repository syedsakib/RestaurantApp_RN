import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Screen from "./src/components/Screen";
import Navigation from "./src/infrastructure/navigation";

export default function App() {
  return <Navigation />;
}

const styles = StyleSheet.create({});
