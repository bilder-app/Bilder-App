import React from "react";
import CardContainer from "../../storybook/stories/CardContainer";
import Text from "../../storybook/stories/Text/Text";
import Button from "../../storybook/stories/Button";
import { View, Image, Pressable } from "react-native";

const styles = {
  image: {
    height: "100%",
    width: "23%",
    resizeMode: "contain"
  },
  wrapper: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 5
  },
  middle: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    flexGrow: 1,
    alignItems: "center"
  },
  price: { marginLeft: "auto" },
  buttonsContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    flexGrow: 1,
    flex: 1
  },
  middleCol: {
    justifyContent: "space-between",
    paddingBottom: 5
  },
  totalOrdered: {
    marginLeft: "auto",
    borderWidth: 1,
    borderColor: "#b4b4b4",
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingTop: 2
  },
  lastCol: {
    display: "flex",
    alignItems: "center",
    marginLeft: "auto",
    paddingRight: 10,
    justifyContent: "space-between"
  }
};

export default function Card({
  title,
  shortDescription,
  total,
  singlePrice,
  inOrder
}) {
  return (
    <CardContainer variant="horizontal">
      <View style={styles.wrapper}>
        <Image
          style={styles.image}
          source={{
            uri: "https://ingcoecuador.com/wp-content/uploads/2020/04/uni.png"
          }}
        />
        <View style={styles.middleCol}>
          <Text variant="h6">{title}</Text>
          <Text style={{ color: "#5f5f5f" }}>{shortDescription}</Text>
          <Text style={styles.totalOrdered}>{inOrder}</Text>
        </View>
        <View style={styles.lastCol}>
          <Text style={{ textAlign: "center", color: "#5f5f5f" }}>
            Precio{"\n"} Unitario
          </Text>
          <Text style={{ color: "#5f5f5f" }}>${singlePrice}</Text>
          <Text variant="h5">${total}</Text>
        </View>
      </View>
    </CardContainer>
  );
}
