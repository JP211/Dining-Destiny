import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";

import { theme } from "./src/infrastructure/theme";
import { RestaurantsScreen } from "./src/restaurants/screens/restaurants.screen";

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <ThemeProvider theme={theme}>
          <RestaurantsScreen />
          <ExpoStatusBar style="auto" />
        </ThemeProvider>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
