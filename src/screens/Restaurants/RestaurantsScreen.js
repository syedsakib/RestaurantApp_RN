import React, { useEffect } from "react";
import { Text, TouchableOpacity, FlatList } from "react-native";

import Screen from "../../components/Screen";
import RestaurantCard from "./../../components/RestaurantCard";

import { useSelector, useDispatch } from "react-redux";
import { fetchRestaurants } from "../../store/restaurant/restaurantActions";

const RestaurantsScreen = ({ navigation }) => {
  const restaurantsData = useSelector((state) => state.restautants);
  const { error, loading, restaurants } = restaurantsData;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRestaurants());
  }, [restaurantsData]);

  console.log(restaurants);

  const renderItem = ({ item }) => (
    <RestaurantCard
      propStyle={{ marginHorizontal: 10, marginVertical: 6 }}
      data={item}
    />
  );

  return (
    <Screen>
      <FlatList
        data={restaurants}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
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
