import React from "react";
import { Image, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export default function ImageAtom({ children, variant, style }) {
  return (
    <Image
      source={{ uri: children }}
      style={[styles[variant || "default"], { ...style }]}
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
  default: {
    backgroundColor: "#FFF",
    height: 28,
    borderRadius: 14,
    paddingHorizontal: 28,
    justifyContent: "center",
  },
  mini: {
    width: width * 0.16,
    maxWidth: 65,
    height: width * 0.16,
    maxHeight: 65,
  },
  small: {
    width: width * 0.25,
    maxWidth: 120,
    height: width * 0.25,
    maxHeight: 120,
  },
  medium: {
    width: width * 0.5,
    maxWidth: 200,
    height: width * 0.5,
    maxHeight: 200,
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
