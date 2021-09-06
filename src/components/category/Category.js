import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Image,
} from "react-native";

import Icons from "./Icons";

const Category = () => {
  const categoryData = [
    {
      id: 1,
      name: "Donut",
      icon: Icons.donut,
    },
    {
      id: 2,
      name: "Drinks",
      icon: Icons.drink,
    },
    {
      id: 3,
      name: "Snacks",
      icon: Icons.fries,
    },
    {
      id: 4,
      name: "Burgers",
      icon: Icons.hamburger,
    },
    {
      id: 5,
      name: "Hot Dogs",
      icon: Icons.hotdog,
    },
    {
      id: 6,
      name: "Noodles",
      icon: Icons.noodle,
    },
    {
      id: 7,
      name: "Pizza",
      icon: Icons.pizza,
    },
    {
      id: 8,
      name: "Rice",
      icon: Icons.ricebowl,
    },
    {
      id: 9,
      name: "Salads",
      icon: Icons.salad,
    },
    {
      id: 10,
      name: "Sushi",
      icon: Icons.sushi,
    },
  ];

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.categoryContainer}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={item.icon} resizeMode="contain" />
        </View>
        <Text style={styles.title}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ paddingHorizontal: 5 }}>
      <View style={styles.titleContainer}>
        <Text style={styles.leftTitle}>Cuisines</Text>
        <Text style={styles.rightTitle}>View All</Text>
      </View>
      <FlatList
        data={categoryData}
        keyExtractor={(item) => `${item.id}`}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    paddingBottom: 10,
    paddingLeft: 5,
  },
  leftTitle: {
    width: "80%",
    fontSize: 25,
    fontWeight: "700",
  },
  rightTitle: {
    width: "20%",
    textAlign: "center",
    fontSize: 17,
    fontWeight: "600",
    paddingTop: 6,
    color: "#898C95",
  },
  categoryContainer: {
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 1,
  },
  imageContainer: {
    width: 130,
    height: 130,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#CDCDD2",
    borderWidth: 1,
    borderRadius: 10,
  },
  image: {
    width: 90,
    height: 90,
  },
  title: {
    color: "#1E1F20",
    marginTop: 4,
    fontSize: 18,
    fontWeight: "800",
  },
});
