import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { View, StyleSheet } from "react-native";

import Modal from "../../molecules/ModalCart/Modal";
import CardContainer from "../../atoms/CardContainer/CardContainer";
import Text from "../../atoms/Text/Text";
import Image from "../../atoms/Image/Image";

import { useNavigation } from "@react-navigation/native";

export default function ProductCard({ children, onPress, style }) {
  const {
    price,
    name,
    brand,
    contentType,
    content,
    id,
    stock,
    images = [
      "https://ingcoecuador.com/wp-content/uploads/2020/04/uni.png",
      "https://http2.mlstatic.com/D_NQ_NP_868738-MLA31322428821_072019-V.jpg"
    ]
  } = children; 
  const navigation = useNavigation();

  const [value, setValue] = useState();
  const cart = useSelector(state => state.cartList.cart);

  useEffect(() => {
    cart.map((product) => {
      product.id === id && setValue(product.ProductInCart.amount)
    })
  }, [cart])

  return (
    <CardContainer
      onPress={() => {
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
        <Text variant="subtitle1" style={{ color: "#444D52", fontWeight: "bold" }} >
          {name}
        </Text>
        <Text variant="subtitle2" style={{ color: "#898C8E" }} >
          {`${content || 1} ${contentType}`}
        </Text>
        <Text variant="subtitle2" style={{ color: "#898C8E" }} >
          {/* {brand} */}
          Stock: {stock}
          , Id: {id}
        </Text>
      </View>

      <Modal 
        style={{ marginLeft: "auto" }} 
        children={{ 
          id: id, 
          stock: stock,
          amount: value || 0
        }}
      />
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
  }
});
