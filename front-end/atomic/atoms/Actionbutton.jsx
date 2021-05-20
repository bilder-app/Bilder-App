import React from "react";
import { View } from "react-native";
import Button from "../../atomic Design/atoms/Button/Button";

function ActionButton({ text }) {
  return (
    <View style={{ width: "100%" }}>
      <Button style={{ width: "100%" }}>{text}</Button>
    </View>
  );
}

export default ActionButton;
