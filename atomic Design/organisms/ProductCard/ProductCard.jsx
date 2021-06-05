import React from "react";
import { View, StyleSheet } from "react-native";

import CardContainer from "../../atoms/CardContainer/CardContainer";
import Text from "../../atoms/Text/Text";
import Image from "../../atoms/Image/Image";
import IconContainer from "../../atoms/IconContainer/IconContainer";

import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { postProductToCart } from "../../../api";

export default function ProductCard({ children, onPress, style }) {
  const {
    price,
    name,
    brand,
    contentType,
    content,
    id,
    images = [
      "https://ingcoecuador.com/wp-content/uploads/2020/04/uni.png",
      "https://http2.mlstatic.com/D_NQ_NP_868738-MLA31322428821_072019-V.jpg",
    ],
  } = children;
  const navigation = useNavigation();

  return (
    <CardContainer
      onPress={() => {
        onPress(id);
        navigation.navigate("ProductDetail", children);
      }}
      style={style}
    >
      <View style={styles.content}>
        <Image variant="max" children={images[0]} />
      </View>

      <View style={styles.body}>
        <Text variant="h6" style={{ color: "#FF8000", fontWeight: "bold" }}>
          ${price}
        </Text>
        <Text variant="h5" style={{ color: "#444D52" }}>
          {name}
        </Text>
      </View>

      <IconContainer
        style={styles.button}
        onPress={() => {
          postProductToCart(id);
          alert("Se ha añadido al carrito");
        }}
      >
        <AntDesign name="pluscircleo" size={25} color="#FF8000" />
      </IconContainer>
    </CardContainer>
  );
}
const styles = StyleSheet.create({
  content: {
    width: "100%",
    height: "46%",
    resizeMode: "contain",
  },
  body: {
    flex: 1,
    marginTop: 3,
    justifyContent: "center",
  },
  button: {
    width: "30%",
    height: 30,
    marginLeft: "auto",
    justifyContent: "center",
    alignItems: "flex-end",
    marginTop: 3,
  },
});
