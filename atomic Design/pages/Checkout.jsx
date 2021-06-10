import React from "react";
import { View, StyleSheet } from "react-native";

import Header from "../organisms/Header/Header";
import Text from "../atoms/Text/Text";
import Button from "../atoms/Button/Button";

import { faTimes as CloseIcon } from "@fortawesome/free-solid-svg-icons";

export default function Checkout() {
  return (
    <View style={styles.main}>
      <Header icon={CloseIcon} children={{ text: "Último paso" }} />

      <View style={{ paddingHorizontal: 25, marginTop: 15 }}>
        <Text variant="h2">Productos</Text>
        <Text variant="h5">Dirrección de Envio</Text>
        <Text variant="h5">Metodo de Pago</Text>
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={{ color: "#707070" }} variant="subtitle2">
              Subtotal
            </Text>
            <Text style={styles.price} variant="h6">
              $ 0
            </Text>
          </View>
          <View style={styles.header}>
            <Text style={{ color: "#707070" }} variant="subtitle2">
              Costo de Entrega Total
            </Text>
            <Text style={styles.price} variant="h6">
              $ 0
            </Text>
          </View>
          <View style={styles.header}>
            <Text style={{ color: "#707070" }} variant="subtitle2">
              Total
            </Text>
            <Text style={styles.price} variant="h6">
              $ 0
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.button}>
        <Button children="Confirmar Pedido" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    height: "100%",
    width: "100%",
    display: "flex",
    backgroundColor: "white",
  },
  text: {
    fontWeight: "700",
    marginTop: 15,
    marginBottom: 10,
  },
  align: {
    height: 43,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 15,
  },
  button: {
    marginTop: "auto",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    paddingVertical: 5,
    backgroundColor: "#FFF",
  },
  content: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
  },
});
