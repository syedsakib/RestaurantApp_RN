import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import { Searchbar } from "react-native-paper";

import Screen from "../../components/Screen";
import RestaurantCard from "./../../components/RestaurantCard";
import Category from "../../components/category/Category";

import { useSelector, useDispatch } from "react-redux";
import { fetchRestaurants } from "../../store/restaurant/restaurantActions";

const RestaurantsScreen = ({ navigation }) => {
  const [searchValue, setSearchValue] = useState("");

  const restaurantsData = useSelector((state) => state.restaurants);
  const { error, loading, restaurants } = restaurantsData;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRestaurants());
  }, [restaurants]);

  //console.log(restaurants);

  const renderMainItem = ({ item }) => (
    <>
      <RestaurantCard
        propStyle={{ marginHorizontal: 10, marginVertical: 6 }}
        data={item}
      />
    </>
  );

  const renderHeader = () => (
    <>
      <Category />
      <View style={styles.titleContainer}>
        <Text style={styles.leftTitle}>All restaurants</Text>
      </View>
    </>
  );

  const renderFooter = () => (
    <>
      <View style={{ height: 70 }}></View>
    </>
  );

  return (
    <Screen>
      <>
        <View style={styles.searchbarContainer}>
          <Searchbar
            placeholder="Search for restaurants"
            value={searchValue}
            onChangeText={(text) => {
              setSearchValue(text);
            }}
          />
        </View>
        {restaurantsData && (
          <FlatList
            data={restaurants}
            keyExtractor={(item) => item.id}
            renderItem={renderMainItem}
            ListHeaderComponent={renderHeader}
            ListFooterComponent={renderFooter}
          />
        )}
      </>
    </Screen>
  );
};

export default RestaurantsScreen;

const styles = StyleSheet.create({
  searchbarContainer: {
    padding: 10,
  },
  titleContainer: {
    flexDirection: "row",
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
  leftTitle: {
    width: "80%",
    fontSize: 25,
    fontWeight: "700",
  },
});
