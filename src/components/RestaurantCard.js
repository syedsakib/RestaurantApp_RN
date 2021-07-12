import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { SvgXml } from "react-native-svg";

import star from "../../assets/star";

const RestaurantCard = ({ data, propStyle }) => {
  const { id, image, name, rating, requiredTime, howCostly, category } = data;

  const ratingArray = Array.from(new Array(rating));

  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          margin: propStyle.margin || 0,
          marginVertical: propStyle.marginVertical || 0,
          marginHorizontal: propStyle.marginHorizontal || 0,
        },
      ]}
    >
      <Image style={styles.image} source={image} />
      <View style={styles.textContainer}>
        <View style={styles.textLeftContainer}>
          <Text style={styles.title}>{name}</Text>
          <View style={styles.subTitleContainer}>
            <Text style={styles.rating}>
              {ratingArray.map((_, index) => (
                <SvgXml key={index} xml={star} width={20} height={20} />
              ))}
            </Text>
            <View style={styles.timeContainer}>
              <AntDesign
                name="clockcircleo"
                size={15}
                color="black"
                style={{ paddingTop: 3 }}
              />
              <Text style={styles.time}>{requiredTime}</Text>
            </View>
          </View>
        </View>
        <View style={styles.textRightContainer}>
          <Text style={styles.expensive}>{howCostly}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f8f4f4",
    height: 290,
    borderRadius: 15,
    overflow: "hidden",
  },
  image: {
    height: 200,
    width: "100%",
  },
  textContainer: {
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 8,
  },
  textLeftContainer: {
    width: "80%",
  },
  textRightContainer: {
    width: "20%",
    alignItems: "flex-end",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  subTitleContainer: {
    flexDirection: "row",
    paddingVertical: 10,
  },
  rating: {
    fontSize: 15,
    paddingTop: 1,
    paddingRight: 10,
    fontWeight: "600",
  },
  timeContainer: {
    flexDirection: "row",
  },
  time: {
    paddingLeft: 5,
    fontSize: 15,
    fontWeight: "600",
  },
  expensive: {
    fontSize: 20,
    fontWeight: "bold",
    paddingVertical: 5,
  },
});

export default RestaurantCard;
