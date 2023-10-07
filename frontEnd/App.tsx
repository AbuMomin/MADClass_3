import React from "react";
import { View, Text, StyleSheet } from "react-native";

// Can not write JSX within a function without returning it.
// A single function can not return more than one JSX element
// function App(){}
const App = () => {
  return (
    // view == div
    // These tags are case-sensitive
    <View style={styles.mainContainer}>
      <Text style={styles.textContainer}>Hello World !!!</Text>
      <Text style={styles.textContainer}>
        TO save All the the files together.. Cmd + K --- S
      </Text>
    </View>

    // Can not write another sibling component
    // ! <view></view>
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
