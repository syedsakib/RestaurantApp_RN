import React, { useEffect } from "react";
import { Text, TouchableOpacity, FlatList, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import RestaurantCard from "../../components/RestaurantCard";

import Screen from "../../components/Screen";

import { fetchRestaurants } from "../../store/restaurant/restaurantActions";

const RestaurantsScreen = ({ navigation }) => {
  const restaurantsDta = useSelector((state) => state.restautants);
  const { error, loading, restaurants } = restaurantsDta;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRestaurants());
  }, [restaurantsDta]);

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
