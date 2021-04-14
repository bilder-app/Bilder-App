import React from "react";
import { TouchableOpacity } from "react-native";

const variants = {
  vertical: {
    backgroundColor: "white",
    width: 170,
    height: 262,
    borderRadius: 15,
    padding: 10,
  },
  horizontal: {
    backgroundColor: "white",
    width: 374,
    height: 105,
    borderRadius: 15,
    padding: 5,
  },
};

export default function CardContainer({
  children,
  style,
  variant = "vertical",
  ...textProps
}) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      {...textProps}
      style={{ ...variants[variant], ...style }}
    >
      {children}
    </TouchableOpacity>
  );
}
