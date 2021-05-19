import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "./style.jsx";

export default function Button({
  onPress,
  children,
  size,
  outline,
  color,
  style,
}) {
  const styleButton = [
      styles.center,
      styles[size || "large"],
      outline && styles.outline,
      outline ? styles[color || "primary"][1] : styles[color || "primary"][0],
      style,
    ],
    styleText = [
      styles.textSize(size || "large"),
      styles.textColor(outline, color || "primary"),
    ];

  return (
    <TouchableOpacity onPress={onPress} style={styleButton} activeOpacity={0.7}>
      <Text style={styleText}>{children}</Text>
    </TouchableOpacity>
  );
}
