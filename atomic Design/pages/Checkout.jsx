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
        <View style={{ marginBottom: 20 }}>
          <Text variant="h3">Productos</Text>
          <View
            style={{
              backgroundColor: "#F6F6F6",
              height: 40,
              justifyContent: "center",
              padding: 10,
              borderRadius: 10,
              marginTop: 5,
            }}
          >
            <Text variant="h5">8</Text>
          </View>
          <Text variant="h3">Paquete 1</Text>
          <View
            style={{
              backgroundColor: "#F6F6F6",
              height: 40,
              justifyContent: "center",
              padding: 10,
              borderRadius: 10,
              marginTop: 5,
            }}
          >
            <Text variant="h5">Envio a Domicilio</Text>
          </View>
          <Text variant="h3">Paquete 2</Text>
          <View
            style={{
              backgroundColor: "#F6F6F6",
              height: 40,
              justifyContent: "center",
              padding: 10,
              borderRadius: 10,
              marginTop: 5,
            }}
          >
            <Text variant="h5">Retiro en el Local</Text>
          </View>
          <Text variant="h5">Av.Directorio 1234</Text>
        </View>
        <View style={{ marginBottom: 20 }}>
          <Text variant="h3">Dirrección de Envio</Text>
          <View
            style={{
              backgroundColor: "#F6F6F6",
              height: 40,
              justifyContent: "center",
              padding: 10,
              borderRadius: 10,
              marginTop: 5,
            }}
          >
            <Text variant="h5">Av.De Mayo 789</Text>
          </View>
        </View>
        <View style={{ marginBottom: 20 }}>
          <Text variant="h3">Metodo de Pago</Text>
          <View
            style={{
              backgroundColor: "#F6F6F6",
              height: 40,
              justifyContent: "center",
              padding: 10,
              borderRadius: 10,
              marginTop: 5,
            }}
          >
            <Text variant="h5">Efectivo</Text>
          </View>
        </View>

        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={{ color: "#707070" }} variant="h4">
              Subtotal
            </Text>
            <Text style={styles.price} variant="h4">
              $ 0
            </Text>
          </View>
          <View style={styles.header}>
            <Text style={{ color: "#707070" }} variant="h4">
              Costo de Entrega Total
            </Text>
            <Text style={styles.price} variant="h4">
              $ 0
            </Text>
          </View>
          <View style={styles.header}>
            <Text style={{ color: "#707070" }} variant="h4">
              Total
            </Text>
            <Text style={styles.price} variant="h4">
              $ 0
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.button}>
        <Button
          children="Confirmar Pedido"
          onPress={() => alert("Tu pedido ha sido confirmado")}
        />
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
