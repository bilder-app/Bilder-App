import React from "react";
import { View } from "react-native";
import Text from "../Text/Text.jsx";

export default function Chip({ children, style }) {
  return (
    <View style={[styles.default, style]}>
      <Text variant="subtitle2" style={styles.text}>{children}</Text>
    </View>
  );
}

const styles = {
  default: {
    backgroundColor: "#FFF",
    height: 28,
    borderRadius: 14,
    paddingHorizontal: 28,
    justifyContent: "center",
    elevation: 1,
  },
  text: {
    color: "#FF8000",
  }
};
