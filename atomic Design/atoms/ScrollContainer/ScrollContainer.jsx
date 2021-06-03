import React from "react";
import { View, ScrollView } from "react-native";

const styles = {
  vertical: {
    width: "100%",
    height: "100%",
    paddingHorizontal: 20,
    flexDirection: "column",
  },
  horizontal: {
    width: "100%",
    height: "100%",
    maxHeight: 325,
    paddingVertical: 5,
    flexDirection: "row",
  },
};

export default function ScrollContainer({
  position,
  style,
  children,
  scrollProps,
}) {
  return (
    <ScrollView
      vertical={"vertical" === position}
      horizontal={"horizontal" === position}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      {...scrollProps}
    >
      <View style={{ ...styles[position || "vertical"], ...style }}>
        {children}
      </View>
    </ScrollView>
  );
}
