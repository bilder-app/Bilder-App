import React from "react";
import { Text } from "react-native";

const fontSize = 10;
const colors = { primary: "#FF8000" };

const variants = {
  h1: {
    fontWeight: "bold",
    fontSize: 3.6 * fontSize,
  },
  h2: {
    fontWeight: "700",
    fontSize: 2.2 * fontSize,
  },
  h3: {
    fontWeight: "bold",
    fontSize: 1.6 * fontSize,
  },
  h4: {
    fontWeight: "700",
    fontSize: 2.4 * fontSize,
  },
  h5: {
    fontWeight: "400",
    fontSize: 1.5 * fontSize,
  },
  h6: {
    fontWeight: "bold",
    fontSize: 2 * fontSize,
  },
  subtitle1: {
    fontWeight: "400",
    fontSize: 1.8 * fontSize,
  },
  subtitle2: {
    fontWeight: "500",
    fontSize: 1.4 * fontSize,
  },
  body1: {
    fontWeight: "400",
    fontSize: 1 * fontSize,
  },
  body2: {
    fontWeight: "400",
    fontSize: 0.875 * fontSize,
  },
  button: {
    fontWeight: "500",
    fontSize: 0.875 * fontSize,
  },
  caption: {
    fontWeight: "400",
    fontSize: 0.75 * fontSize,
  },
};

export default function Typography({
  children,
  variant,
  color,
  style,
  ...textProps
}) {
  return (
    <Text
      style={{ ...variants[variant], ...{ color: colors[color] }, ...style }}
      {...textProps}
    >
      {children}
    </Text>
  );
}
