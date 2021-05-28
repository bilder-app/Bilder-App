import React, { useState } from "react";
import { Pressable } from "react-native";

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

  const [shadown, setShadown] = useState(2)

  return (
    <Pressable
      activeOpacity={0.8}
      style={[variants[variant], { elevation: shadown }, {...style} ]}
      onPress={onPress}
      onPressIn={() => setShadown(0)}
      onPressOut={() => setShadown(2)}
    >
      {children}
    </Pressable>
  );
}
