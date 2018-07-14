import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    padding: 10,
    // backgroundColor: "#c32727",
    borderRadius: 1
  },
  buttonText: {
    color: "#ffffff",
    textAlign: "center",
    fontWeight: "700"
  }
});

const Button = ({
  text = "text",
  backgroundColor = "gray",
  color = "black",
  submitAction = () => {}
}) => {
  let { buttonContainer, buttonText } = styles;
  const handleSubmit = () => {
    //TODO handle submit
    submitAction();
  };

  return (
    <TouchableOpacity
      style={[buttonContainer, { backgroundColor }]}
      onPress={handleSubmit}
    >
      <Text style={[buttonText, { color }]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
