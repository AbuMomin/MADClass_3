import React, { useState } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const LoginPage = (props: any) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [loggedIn, setloggedIn] = useState(false);

  const handleSubmit = () => {
    // console.log(`email = ${email}\nPass = ${pass}`);
    email === "win@gmail.com" && pass === "123"
      ? setloggedIn(true)
      : setloggedIn(false);
  };

  const showLoggedInText = () => {
    return (
      <View style={style.mainContainer}>
        <Text> Login Succesful !</Text>
      </View>
    );
  };

  const showLoggedInComponent = () => {
    return (
      <View style={style.mainContainer}>
        <Text style={style.mainText}>Login</Text>
        <View style={style.inputField}>
          <Text>Email</Text>
          <TextInput
            style={style.inputStyle}
            value={email}
            onChangeText={setEmail}
          ></TextInput>
        </View>
        <View style={style.inputField}>
          <Text>Password</Text>
          <TextInput
            secureTextEntry={true}
            style={style.inputStyle}
            value={pass}
            onChangeText={setPass}
          ></TextInput>
        </View>
        <Button title="Login to Account" onPress={handleSubmit}></Button>
      </View>
    );
  };

  return <>{loggedIn ? showLoggedInText() : showLoggedInComponent()}</>;
};

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  mainText: {
    fontSize: 80,
    fontWeight: "700",
    color: "purple",
  },
  inputStyle: {
    height: 40,
    margin: 12,
    borderWidth: 2,
    padding: 10,
    width: 200,
    borderRadius: 4,
  },
  inputField: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default LoginPage;
