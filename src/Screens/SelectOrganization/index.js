import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import Button from "./Button";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center"
  },
  buttonContainer: {
    flex: 0.75,
    maxHeight: 60,
    minWidth: 250,
    maxWidth: 350,
    elevation: 4,
    paddingTop: 10,
    paddingBottom: 10
  }
});

class SelectOrganization extends Component {
  render() {
    let { container, buttonContainer } = styles;
    return (
      <View style={container}>        
        <View style={buttonContainer}>
          <Button text={"USG"} backgroundColor={"#c23616"} color={"#ffffff"} />
        </View>
        <View style={buttonContainer}>
          <Button text={"GOK"} backgroundColor={"#192a56"} color={"#ffffff"} />
        </View>
      </View>
    );
  }
}

export default SelectOrganization;
