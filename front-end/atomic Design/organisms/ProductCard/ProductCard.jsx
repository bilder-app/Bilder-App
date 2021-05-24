import React from "react";
import { View } from "react-native";
import CardContainer from "../../atoms/CardContainer/CardContainer";
import Text from "../../atoms/Text/Text";
import Image from "../../atoms/Image/Image";

const styles = {
  content: {
    width: "100%",
    height: "46%"
  },
  boton: {
    marginTop: 5,
    marginLeft: "auto",
    marginRight: "auto"
  }
};

export default function ProductCard({ children, onPress, style }) {
  const { price, name, brand, contentType, content } = children;
  const images = [
    "https://ingcoecuador.com/wp-content/uploads/2020/04/uni.png",
    "https://http2.mlstatic.com/D_NQ_NP_868738-MLA31322428821_072019-V.jpg"
  ];
  const id = Math.floor(Math.random() * 100 + 1);

  return (
    <CardContainer onPress={() => onPress(id)} style={style}>
      <View style={styles.content}>
        <Image variant="small" children={images[0]} />
      </View>
      <Text variant="h6" style={{ color: "#E49012", fontWeight: "bold" }}>
        ${price}
      </Text>
      <Text
        variant="subtitle1"
        style={{ color: "#444D52", fontWeight: "bold" }}
      >
        {name}
      </Text>
      <Text
        variant="subtitle2"
        style={{ color: "#898C8E", fontWeight: "bold" }}
      >
        {`${content} ${contentType}`}
      </Text>
      <Text
        variant="subtitle2"
        style={{ color: "#898C8E", fontWeight: "bold" }}
      >
        {brand}
      </Text>
    </CardContainer>
  );
}
