import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import axios from "axios";

const NationalizePage = () => {
  const [nationality, setNationality] = useState("---");
  const [userName, setUserName] = useState("");

  const handleSubmit = () => {
    console.log(
      `${userName}, getting nationality from : https://api.nationalize.io?name=${userName} `
    );

    axios
      .get(`https://api.nationalize.io?name=${userName}`)
      .then((res: any) => {
        if (res.data.country.length) {
          setNationality(res.data.country[0]["country_id"]);
        } else {
          setNationality("---");
        }
        console.log(res.data.country);
        console.log("");
      });
  };

  return (
    <View style={style.mainContainer}>
      <Text style={style.mainText}>{nationality}</Text>
      <View>
        <TextInput
          style={style.inputStyle}
          value={userName}
          onChangeText={setUserName}
        ></TextInput>
      </View>
      <Button title="Get Country" onPress={handleSubmit}></Button>
    </View>
  );
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
    height: 50,
    margin: 12,
    borderWidth: 2,
    padding: 10,
    width: 200,
    borderRadius: 4,
  },
});

export default NationalizePage;
