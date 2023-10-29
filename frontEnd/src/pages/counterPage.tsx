import React, { useState } from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";

// THese are functional component , We are not using Class Component here
const CounterPage = (props: any) => {
  //   let counter = 0;
  const [counter, setCounter] = useState(0);
  //   `useState` is a react HOOK !!

  const increaseHandler = () => {
    setCounter(counter + 1);
    console.log(`Current Value: ${counter}`);
  };
  const decreaseHandler = () => {
    setCounter(counter - 1);
    console.log(`Current Value: ${counter}`);
  };
  const restartHandler = () => {
    setCounter(0);
    console.log(`Current Value: ${counter}`);
  };

  const navHandler = () => {
    props.navigation.navigate("Login");
  };

  return (
    // Shift + Enter --> to auto import
    <View style={style.mainCointainer}>
      <Image
        style={style.imgStyle}
        source={require("../../assets/react.png")}
      />
      <Text style={style.counterContainer}>{counter}</Text>
      <View style={style.buttonContainer}>
        <Button title="Increase" onPress={increaseHandler}></Button>
        <Button title="Decrease" onPress={decreaseHandler} />
        <Button title="Restart" onPress={restartHandler} />
      </View>
      <View>
        <Button title="LOGIN" onPress={navHandler} />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  mainCointainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  counterContainer: {
    fontSize: 80,
    fontWeight: "700",
    color: "red",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  imgStyle: {
    height: 100,
    width: 100,
  },
});

// Must write this use this component to somewhere
export default CounterPage;
