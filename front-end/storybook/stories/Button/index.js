import React from "react";
import PropTypes from "prop-types";
import { TouchableOpacity, Text } from "react-native";
import styles from "./style.js";

export default function Button({
  onPress,
  children,
  variant,
  outline,
  color,
  style,
}) {
  const styleButton = [
      styles.center,
      styles[variant || "large"],
      outline && styles.outline,
      outline ? styles[color || "primary"][1] : styles[color || "primary"][0],
      style,
    ],
    styleText = [
      styles.textSize(variant || "large"),
      styles.textColor(outline, color),
    ];

  return (
    <TouchableOpacity onPress={onPress} style={styleButton} activeOpacity={0.7}>
      <Text style={styleText}>{children}</Text>
    </TouchableOpacity>
  );
}
