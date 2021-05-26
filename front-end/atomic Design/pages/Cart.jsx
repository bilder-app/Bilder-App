import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import Header from "../organisms/Header/Header";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import ProductCard from "../organisms/ProductCard/ProductCard";
import Text from "../../atomic Design/atoms/Text/Text";
import Button from "../../atomic Design/atoms/Button/Button";

const items = [
  {
    id: 1,
    title: "Listones de Madera de pino",
    shortDescription: "Medidas de 120 x 240",
    total: 400,
    singlePrice: 200,
    inOrder: 2,
  },
  {
    id: 2,
    title: "Listones de Madera",
    shortDescription: "Medidas de 120 x 240",
    total: 400,
    singlePrice: 200,
    inOrder: 2,
  },
  {
    id: 3,
    title: "Listones de Madera",
    shortDescription: "Medidas de 120 x 240",
    total: 400,
    singlePrice: 200,
    inOrder: 2,
  },
  {
    id: 4,
    title: "Listones de Madera",
    shortDescription: "Medidas de 120 x 240",
    total: 400,
    singlePrice: 200,
    inOrder: 2,
  },
  {
    id: 5,
    title: "Listones de Madera",
    shortDescription: "Medidas de 120 x 240",
    total: 400,
    singlePrice: 200,
    inOrder: 2,
  },
  {
    id: 6,
    title: "Listones de Madera",
    shortDescription: "Medidas de 120 x 240",
    total: 400,
    singlePrice: 200,
    inOrder: 2,
  },
  {
    id: 7,
    title: "Listones de Madera",
    shortDescription: "Medidas de 120 x 240",
    total: 400,
    singlePrice: 200,
    inOrder: 2,
  },
  {
    id: 8,
    title: "Listones de Madera",
    shortDescription: "Medidas de 120 x 240",
    total: 400,
    singlePrice: 200,
    inOrder: 2,
  },
  {
    id: 9,
    title: "Listones de Madera",
    shortDescription: "Medidas de 120 x 240",
    total: 400,
    singlePrice: 200,
    inOrder: 2,
  },
  {
    id: 10,
    title: "Listones de Madera",
    shortDescription: "Medidas de 120 x 240",
    total: 400,
    singlePrice: 200,
    inOrder: 2,
  },
  {
    id: 11,
    title: "Listones de Madera",
    shortDescription: "Medidas de 120 x 240",
    total: 400,
    singlePrice: 200,
    inOrder: 2,
  },
  {
    id: 12,
    title: "Listones de Madera",
    shortDescription: "Medidas de 120 x 240",
    total: 400,
    singlePrice: 200,
    inOrder: 2,
  },
];

const renderItem = ({
  item: { title, shortDescription, total, singlePrice, inOrder },
}) => (
  <View style={{ marginVertical: 10, marginLeft: "auto", marginRight: "auto" }}>
    <ProductCard
      title={title}
      shortDescription={shortDescription}
      total={total}
      singlePrice={singlePrice}
      inOrder={inOrder}
    />
  </View>
);

function Cart() {
  return (
    <View style={styles.wrapper}>
      <Header icon={faAngleLeft} title="Carrito" />
      <FlatList
        style={styles.list}
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <View style={styles.totalContainer}>
        <View style={styles.hr} />
        <View style={styles.totalPrice}>
          <Text>Subtotal</Text>
          <Text style={styles.price} variant="h5">
            $4400
          </Text>
        </View>
        <Button
          style={{
            backgroundColor: "#878585",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 15,
          }}
        >
          Agregar más products
        </Button>
      </View>
      <View style={styles.bottomButton}>
        <Button text="Continuar" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { height: "100%", display: "flex" },
  list: { flexGrow: 0 },
  totalPrice: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  price: {
    marginLeft: "auto",
  },
  totalContainer: {
    marginBottom: "auto",
    paddingHorizontal: 25,
  },
  hr: {
    paddingTop: 5,
    borderBottomColor: "#a0a0a0",
    borderBottomWidth: 1,
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  bottomButton: {
    marginRight: "auto",
    marginLeft: "auto",
    width: "90%",
    paddingVertical: 15,
    backgroundColor: "white",
    marginTop: "auto",
  },
});

export default Cart;
