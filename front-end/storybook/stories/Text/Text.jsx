import React from "react";
import { Text } from "react-native";

const fontSize = 16;
const colors = { primary: "#E49012" };

const variants = {
  h1: {
    fontWeight: "300",
    fontSize: 6 * fontSize
  },
  h2: {
    fontWeight: "300",
    fontSize: 3.75 * fontSize
  },
  h3: {
    fontWeight: "400",
    fontSize: 3 * fontSize
  },
  h4: {
    fontWeight: "400",
    fontSize: 2.125 * fontSize
  },
  h5: {
    fontWeight: "400",
    fontSize: 1.5 * fontSize
  },
  h6: {
    fontWeight: "500",
    fontSize: 1.25 * fontSize
  },
  subtitle1: {
    fontWeight: "400",
    fontSize: 1 * fontSize
  },
  subtitle2: {
    fontWeight: "500",
    fontSize: 0.875 * fontSize
  },
  body1: {
    fontWeight: "400",
    fontSize: 1 * fontSize
  },
  body2: {
    fontWeight: "400",
    fontSize: 0.875 * fontSize
  },
  button: {
    fontWeight: "500",
    textTransform: "uppercase",
    fontSize: 0.875 * fontSize
  },
  caption: {
    fontWeight: "400",
    fontSize: 0.75 * fontSize
  },
  overline: {
    fontWeight: "400",
    fontSize: 0.75 * fontSize,
    textTransform: "uppercase"
  }
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
