import React from "react";
import CardContainer from "../CardContainer";
import Text from "../Text/Text";
import Button from "../Button/";
import { View, Image } from "react-native";

const styles = {
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  content: {
    width: "100%",
    height: "55%",
  },
  boton: {
    marginTop: 5,
    marginLeft: "auto",
    marginRight: "auto",
  },
};

export default function Card({ props }) {
  const { price, title, shortDescription } = props;
  if (title.length > 14) return "hola";
  const images = [
    "https://ingcoecuador.com/wp-content/uploads/2020/04/uni.png",
    "https://http2.mlstatic.com/D_NQ_NP_868738-MLA31322428821_072019-V.jpg",
  ];
  return (
    <CardContainer>
      <View style={styles.content}>
        <Image style={styles.image} source={{ uri: images[0] }} />
      </View>
      <Text variant="h6">{price}</Text>
      <Text variant="h6">{title}</Text>
      <Text variant="subtitle2">{shortDescription}</Text>
      <Button style={styles.boton} type="small">
        Agregar al carrito
      </Button>
    </CardContainer>
  );
}
