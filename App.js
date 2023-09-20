import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";

import { RestaurantsScreen } from "./src/restaurants/screens/restaurants.screen";

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <RestaurantsScreen />
        <ExpoStatusBar style="auto" />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
