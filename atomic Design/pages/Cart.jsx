import React from "react";
import { View, FlatList, StyleSheet, Alert } from "react-native";
import CartProduct from "../organisms/CartProductCard";

import Header from "../organisms/Header/Header";
import CardItem from "../organisms/CardItem/CardItem";
import Text from "../../atomic Design/atoms/Text/Text";
import Button from "../../atomic Design/atoms/Button/Button";
import { useCart, getTotalPrice } from "../../hooks/useCart";

import ScrollContainer from "../atoms/ScrollContainer/ScrollContainer";
import { useQuery } from "react-query";
import { getAllCartProducts, deleteAllProductsInCart } from "../../api";
import { FontAwesome5 } from '@expo/vector-icons';
import { useFocusEffect } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

const renderItem = ({ item = {} }) => {
  const { images, price, name, id, amount, stock } = item;

  return (
    <View style={{ marginVertical: 5, marginHorizontal: 2 }} key={item.id}>
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
  const { data: cartProducts = [], refetch } = useCart();

  useFocusEffect(
    React.useCallback(() => {
      refetch();
    }, [])
  );

  const confirmEmptyCart = () => {
    Alert.alert(
      "Eliminar elementos múltiples",
      "¿Está seguro de que desea vaciar el carrito por completo?",
      [
        { 
          text: "Confirmar", 
          onPress: () => deleteAllProductsInCart().then(() => refetch())
        },
        {
          text: "Cancelar",
          onPress: () => null,
          style: "cancel"
        },
      ],
      { cancelable: false }
    );
  }

  return (
    <View style={styles.main}>
      <Header children={{ text: "Mi Carrito" }} />
      <TouchableOpacity onPress={confirmEmptyCart} style={styles.deleteIcon}>
       <FontAwesome5 name="trash-alt" size={20} color="#444D52" />
      </TouchableOpacity>
      <View style={styles.scroll}>
        <FlatList
          data={cartProducts || []}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />

        <View style={styles.header}>
          <Text style={{ color: "#707070" }} variant="subtitle2">
            Total
          </Text>
          <Text style={styles.price} variant="h6">
            ${getTotalPrice(cartProducts)}
          </Text>
        </View>
      </View>

      <View style={styles.button}>
        <Button
          onPress={() => navigation.navigate("Shipping")}
          children="Continuar"
          props={{ disabled: !cartProducts.length }}
          style={!cartProducts.length ? { backgroundColor: "#707070" } : {}}
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
    backgroundColor: "white"
  },
  scroll: {
    height: "87.6%"
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 50,
    marginBottom: 20,
    marginHorizontal: 15,
  },
  deleteIcon: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 0,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    paddingVertical: 5,
    backgroundColor: "#FFF"
  }
});
