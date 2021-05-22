import React from "react";
import CardContainer from "../../../atomic Design/atoms/CardContainer/CardContainer";
import Text from "../../../atomic Design/atoms/Text/Text.jsx";
import Button from "../../../atomic Design/atoms/Button/Button.jsx";
import { View, Image } from "react-native";

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
  content: {
    paddingLeft: 5,
    display: "flex",
    flexGrow: 1,
    flex: 1
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
  }
};

export default function SearchCard({ title, shortDescription, price, id }) {
  return (
    <CardContainer variant="horizontal">
      <View style={styles.wrapper}>
        <Image
          style={styles.image}
          source={{
            uri: "https://ingcoecuador.com/wp-content/uploads/2020/04/uni.png"
          }}
        />
        <View style={styles.content}>
          <Text variant="h6">{title}</Text>
          <View style={styles.middle}>
            <Text>{shortDescription}</Text>
            <Text style={styles.price} variant="h6">
              {price}
            </Text>
          </View>
          <View style={styles.buttonsContainer}>
            <Button size="small">Agregar al carrito</Button>
          </View>
        </View>
      </View>
    </CardContainer>
  );
}
