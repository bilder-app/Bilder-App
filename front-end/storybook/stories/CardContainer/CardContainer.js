import React from "react";
import { TouchableOpacity } from "react-native";

const variants = {
  vertical: {
    backgroundColor: "white",
    width: 170,
    height: 225,
    borderRadius: 15,
    padding: 5
  },
  horizontal: {
    backgroundColor: "white",
    width: 374,
    height: 105,
    borderRadius: 15,
    padding: 5
  }
};

export default function CardContainer({
  children,
  style,
  variant = "vertical",
  ...textProps
}) {
  return (
    <TouchableOpacity {...textProps} style={{ ...variants[variant], ...style }}>
      {children}
    </TouchableOpacity>
  );
}
