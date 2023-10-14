import React from "react";

import { View, Text, StyleSheet } from "react-native";


const App = () => {
  return (
    
    <View style={styles.mainContainer}>
      <Text style={styles.textContainer}>Lab Day 04</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    fontWeight: "700",
    fontFamily: "Arial",
    fontSize: 16,
  },
});

export default App;
