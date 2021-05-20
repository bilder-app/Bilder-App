import React from "react";
import CardContainer from "../CardContainer";
import Text from "../../../atomic Design/atoms/Text/Text.jsx";
import { View, Image } from "react-native";

const styles = {
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  content: {
    width: "100%",
    height: "45%",
  },
  boton: {
    marginTop: 5,
    marginLeft: "auto",
    marginRight: "auto",
  },
};

export default function Card({ props }) {
  const { price, title, marca, medidas, nada } = props;
  const images = [
    "https://ingcoecuador.com/wp-content/uploads/2020/04/uni.png",
    "https://http2.mlstatic.com/D_NQ_NP_868738-MLA31322428821_072019-V.jpg",
  ];
  return (
    <CardContainer>
      <View style={styles.content}>
        <Image style={styles.image} source={{ uri: images[0] }} />
      </View>
      <Text variant="h6" style={{ color: "#E49012", fontWeight: "bold" }}>
        {price}
      </Text>
      <Text
        variant="subtitle1"
        style={{ color: "#444D52", fontWeight: "bold" }}
      >
        {title}
      </Text>
      <Text
        variant="subtitle2"
        style={{ color: "#898C8E", fontWeight: "bold" }}
      >
        {medidas}
      </Text>
      <Text
        variant="subtitle2"
        style={{ color: "#898C8E", fontWeight: "bold" }}
      >
        {marca}
      </Text>
    </CardContainer>
  );
}
