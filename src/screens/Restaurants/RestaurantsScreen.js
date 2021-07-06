import React, { useEffect } from "react";
import { Text, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import Screen from "../../components/Screen";
import { fetchRestaurants } from "../../store/restaurant/restaurantActions";

const RestaurantsScreen = ({ navigation }) => {
  const restaurants = useSelector((state) => state.restautants);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRestaurants());
  }, []);

  console.log(restaurants);

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
