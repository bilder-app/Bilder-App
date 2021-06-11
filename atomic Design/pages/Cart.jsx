import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { View, FlatList, StyleSheet } from "react-native";

import Header from "../organisms/Header/Header";
import CardItem from "../organisms/CardItem/CardItem";
import Text from "../../atomic Design/atoms/Text/Text";
import Button from "../../atomic Design/atoms/Button/Button";

import { getCartItems } from "../../redux/actions/cart";
import ScrollContainer from "../atoms/ScrollContainer/ScrollContainer";

const renderItem = ({ item }) => {
  return (
    <View style={{ marginVertical: 5 }} key={item.id}>
      <CardItem variant="cart" children={item} onPress={alert} />
    </View>
  );
};

function Cart({ navigation, cart, getCartItems }) {
  useEffect(() => {
    getCartItems(); // redux
  }, []);

  const reduceCart = (() => {
    let acc = 0;
    for (let a = 0; a < cart.length; a++) {
      acc += cart[a].ProductInCart.amount * cart[a].price;
    }
    return acc;
  })();

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
            <Text style={{ color: "#444D52" }} variant="h4">
              Total
            </Text>
            <Text style={{ color: "#444D52" }} variant="h6">
              $ {reduceCart}
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

function mapStateToProps(state) {
  return {
    cart: state.cartList.cart,
  };
}
export default connect(mapStateToProps, { getCartItems })(Cart);

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#fff",
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
