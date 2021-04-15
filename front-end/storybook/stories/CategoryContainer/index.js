import React from "react";
import { TouchableOpacity } from "react-native";

const styles = {
  backgroundColor: "white",
  width: 65,
  height: 50,
};

export default function CategoryContainer({ children, onPress, style }) {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={[styles, {...style}]}>
      {children}
    </TouchableOpacity>
  );
}
