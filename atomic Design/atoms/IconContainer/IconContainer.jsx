import React from "react";
import { TouchableOpacity } from "react-native";

const styles = {
  backgroundColor: "white",
  width: 60,
  height: 60,
};

export default function CategoryContainer({ children, onPress, style, props }) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles, { ...style }]}
      onPress={onPress}
      {...props}
    >
      {children}
    </TouchableOpacity>
  );
}
