import React from "react";
import { Image, Dimensions, ScrollView, Pressable } from "react-native";

const { width } = Dimensions.get("window");

const styles = {
  scroll: {
    height: 150,
    paddingVertical: 10,
    paddingLeft: 15,
    paddingRight: 0,
  },
  image: {
    width: width - 55,
    height: "100%",
    resizeMode: "stretch",
    marginLeft: 0,
    marginRight: 15,
    borderColor: "#EEE",
    borderWidth: 0.8,
  },
};

export default function Slider({ onPress, source }) {
  return (
    <ScrollView
      pagingEnabled
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scroll}
      decelerationRate={0.6}
      snapToInterval={width - 40}
    >
      {source.map((item, index) => {
        return (
          <Pressable onPress={() => onPress(item)} key={index}>
            <Image source={item} style={styles.image} />
          </Pressable>
        );
      })}
    </ScrollView>
  );
}
