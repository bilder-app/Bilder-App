import React from "react";
import { Image, Dimensions, ScrollView } from "react-native";

const url =
  "https://c8.alamy.com/comp/2D4MCPB/tools-background-horizontal-isolated-vector-objects-instuments-carpenter-home-master-handyman-repair-of-premises-buildings-2D4MCPB.jpg";
const { width } = Dimensions.get("window");

const styles = {
  scroll: {
    backgroundColor: "#7f7",
    height: 150,
    paddingVertical: 10,
    paddingLeft: 20,
    paddingRigth: 0,
  },
  image: {
    width: width - 61,
    height: "100%",
    resizeMode: "cover",
    borderRadius: 15,
    marginLeft: 0,
    marginRight: 20,
  },
};

export default function Slider({ children, onPress }) {
  return (
    <ScrollView
      pagingEnabled
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scroll}
      decelerationRate={0.6}
      snapToInterval={width - 40}
    >
      {[1, 2, 3, 4, 5].map((item, index) => {
        return <Image key={index} source={{ uri: url }} style={styles.image} />;
      })}
    </ScrollView>
  );
}
