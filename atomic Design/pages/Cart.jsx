import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import CartProduct from "../organisms/CartProductCard";

import Header from "../organisms/Header/Header";
import CardItem from "../organisms/CardItem/CardItem";
import Text from "../../atomic Design/atoms/Text/Text";
import Button from "../../atomic Design/atoms/Button/Button";

import ScrollContainer from "../atoms/ScrollContainer/ScrollContainer";
import { useQuery } from "react-query";
import { getAllCartProducts } from "../../api";
import { useFocusEffect } from "@react-navigation/native";

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

  return (
    <View style={styles.main}>
      <Header children={{ text: "Mi Carrito" }} />
      <View style={styles.scroll}>
        <ScrollContainer>
          <FlatList
            data={cart}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
          />

          <View style={styles.header}>
            <Text style={{ color: "#707070" }} variant="subtitle2">
              Subtotal
            </Text>
            <Text style={styles.price} variant="h6">
              $
              {cartProducts.length
                ? cartProducts.reduce(
                    (prev, next) =>
                      next.price * next.ProductInCart.amount + prev,
                    0
                  )
                : 0}
            </Text>
          </View>
        </ScrollContainer>
      </View>

      <View style={styles.button}>
        <Button
          onPress={() => navigation.navigate("Shipping")}
          children="Continuar"
          props={{ disabled: !cart.length }}
          style={!cart.length ? { backgroundColor: "#707070" } : {}}
        />
      </View>
    </View>
  );
}

export default Cart;

const styles = StyleSheet.create({
  main: {
    height: "100%",
    width: "100%",
  },
  scroll: {
    height: "87.6%",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 50,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    paddingVertical: 5,
    backgroundColor: "#FFF",
  },
});
