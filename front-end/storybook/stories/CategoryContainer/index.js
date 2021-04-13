import React from "react";
import { TouchableOpacity } from "react-native";

const styles = {
  backgroundColor: "white",
  width: 65,
  height: 50,
  borderRadius: 10,
  padding: 10,
};

export default function CategoryContainer({ children, onPress }) {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={styles}>
      {children}
    </TouchableOpacity>
  );
}
