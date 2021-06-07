import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { View, FlatList, StyleSheet } from "react-native";

import Header from "../organisms/Header/Header";
import CardItem from "../organisms/CardItem/CardItem";
import Text from "../../atomic Design/atoms/Text/Text";
import Button from "../../atomic Design/atoms/Button/Button";

import { getCartItems } from "../../redux/actions/cart";

const random =  Math.floor((Math.random() * 100) + 1)

const renderItem = ({ item }) => {
  return (
    <View style={{ marginVertical: 5, marginHorizontal: 15 }} key={item.id}>
      <CardItem variant="cart" children={item} onPress={alert}/>
    </View>
  ) 
};

function Cart({ navigation, cart, getCartItems }) {
  useEffect(() => {
    getCartItems();   // redux
  }, [cart])

  const reduceCart = (() => {
    let acc = 0;
    for(let a = 0; a < cart.length; a++){
      acc += cart[a].ProductInCart.amount * cart[a].price
    }
    return acc;
  })();

  return (
    <View style={styles.main}>
      <Header children={{ text: "Mi Carrito" }}/>

      <FlatList
        data={cart}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
 
      <View style={{ paddingHorizontal: 20, backgroundColor: "#FFF" }}>
        <View style={styles.hr}/>
        <View style={styles.content}>
          <Text style={{ color: "#707070" }} variant="subtitle2">Subtotal</Text>
          <Text style={styles.price} variant="h6">$ {reduceCart}</Text>
        </View>
      </View>

      <View style={styles.button}>
        <Button onPress={() => navigation.navigate("Payment")} children="Continuar" />
      </View>
    </View>
  );
}

function mapStateToProps(state) {
  return {
    cart: state.cartList.cart
  };
}
export default connect(mapStateToProps, { getCartItems })(Cart);


const styles = StyleSheet.create({
  main: { 
    height: "100%",
    width: "100%",
  },
  hr: {
    marginVertical: 10,
    borderBottomColor: "#A0A0A0",
    borderBottomWidth: 1.5,
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    paddingVertical: 5,
    backgroundColor: "#FFF",
  },
});

