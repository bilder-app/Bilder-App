import React from "react";
import { View, ScrollView } from "react-native";

const styles = {
  vertical: {
    backgroundColor: "",
    width: "100%",
    height: '100%',
    paddingHorizontal: 15,
    flexDirection: "column",
  },
  horizontal: {
    backgroundColor: '',
    width: "100%",
    height: '100%',
    maxHeight: 350,
    height: '100%',
    paddingVertical: 15,
    flexDirection: "row",
  }
};

export default function ScrollContainer({ position, style, children }) {

  return (
    <ScrollView
      vertical={'vertical' === position}
      horizontal={'horizontal' === position}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}  
    >
      <View style={{ ...styles[position || 'vertical'], ...style }}>
        {children}
      </View>
    </ScrollView>
  );
}
