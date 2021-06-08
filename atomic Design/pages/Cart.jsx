import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import CartProduct from "../organisms/CartProductCard";

import Header from "../organisms/Header/Header";
import CardItem from "../organisms/CardItem/CardItem";
import Text from "../../atomic Design/atoms/Text/Text";
import Button from "../../atomic Design/atoms/Button/Button";
import { useQuery } from "react-query";
import { getAllCartProducts } from "../../api";
import { useFocusEffect } from "@react-navigation/native";

const random = Math.floor(Math.random() * 100 + 1);

const renderItem = ({ item = {} }) => {
  const { images, price, name, id, ProductInCart = {}, stock } = item;
  const { amount } = ProductInCart;

  return (
    <View style={{ marginVertical: 5, marginHorizontal: 15 }} key={item.id}>
      <CartProduct
        stock={stock}
        image={images[0]}
        price={price}
        name={name}
        productId={id}
        amount={amount}
      />
    </View>
  );
};

function Cart({ navigation }) {
  const { data: cartProducts = [], refetch } = useQuery(
    "cart items",
    getAllCartProducts
  );

  useFocusEffect(
    React.useCallback(() => {
      refetch();
    }, [])
  );

  // const reduceCart = (() => {
  //   let acc = 0;
  //   for (let a = 0; a < cartProducts.length; a++) {
  //     acc += cartProducts[a].ProductInCart.amount * cartProducts[a].price;
  //   }
  //   return acc;
  // })();

  return (
    <View style={styles.main}>
      <Header children={{ text: "Mi Carrito" }} />

      <FlatList
        data={cartProducts}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />

      <View style={{ paddingHorizontal: 20, backgroundColor: "#FFF" }}>
        <View style={styles.hr} />
        <View style={styles.content}>
          <Text style={{ color: "#707070" }} variant="subtitle2">
            Subtotal
          </Text>
          <Text style={styles.price} variant="h6">
            {/* $ {reduceCart} */}
          </Text>
        </View>
      </View>

      <View style={styles.button}>
        <Button
          onPress={() => navigation.navigate("Payment")}
          children="Continuar"
        />
      </View>
    </View>
  );
}

export default Cart;

const styles = StyleSheet.create({
  main: {
    height: "100%",
    width: "100%"
  },
  hr: {
    marginVertical: 10,
    borderBottomColor: "#A0A0A0",
    borderBottomWidth: 1.5,
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto"
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    paddingVertical: 5,
    backgroundColor: "#FFF"
  }
});
