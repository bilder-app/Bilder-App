import React from "react";
import { Image, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export default function ImageAtom({ children, variant, style }) {
  return (
    <Image
      source={{ uri: children }}
      style={[styles.base, styles[variant], { ...style }]}
    />
  );
}
const styles = {
  base: {
    marginTop: "auto",
    marginBottom: "auto",
    marginLeft: "auto",
    marginRight: "auto",
  },
  mini: {
    width: width * 0.19,
    maxWidth: 75,
    height: width * 0.19,
    maxHeight: 75,
  },
  small: {
    width: width * 0.25,
    maxWidth: 120,
    height: width * 0.25,
    maxHeight: 120,
  },
  medium: {
    width: width * 0.43,
    maxWidth: 160,
    height: width * 0.43,
    maxHeight: 160,
  },
  big: {
    width: width * 0.85,
    height: width * 0.85,
  },
  max: {
    width: "100%",
    height: "100%",
  },
};
