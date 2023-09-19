import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";

import { RestaurantsScreen } from "./src/restaurants/screens/restaurants.screen";

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <RestaurantsScreen />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
