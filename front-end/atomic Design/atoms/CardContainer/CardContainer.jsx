import React from "react";
import { TouchableOpacity } from "react-native";

const variants = {
  vertical: {
    backgroundColor: "white",
    width: 170,
    height: 262,
    borderRadius: 15,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 2,
  },
  horizontal: {
    backgroundColor: "white",
    width: 375,
    height: 105,
    borderRadius: 15,
    padding: 5,
  },
};

export default function CardContainer({
  children,
  style,
  onPress,
  variant = "vertical",
}) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={{ ...variants[variant], ...style }}
      onPress={onPress}
    >
      {children}
    </TouchableOpacity>
  );
}
