import React from "react";
import { StyleSheet } from "react-native";
import { Card, Text } from "react-native-paper"

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "restaurant name",
    icon,
    photos = ["https://i.imgur.com/SsKamJE.jpg"],
    address = "1234 Main Street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;
  return (
    <Card>
      <Card.Cover style={styles.cardPhoto} source={photos} />
      <Card.Content>
        <Text style={styles.cardText} variant="bodyMedium">
          {name}
        </Text>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  cardPhoto: {
    paddingTop: 25,
  },
  cardText: {
    paddingTop: 25,
  },
});
