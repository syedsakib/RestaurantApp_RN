import React from "react";
import { StyleSheet } from "react-native";
import { Provider } from "react-redux";

import Navigation from "./src/infrastructure/navigation";
import store from "./src/store/store";

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

const styles = StyleSheet.create({});
