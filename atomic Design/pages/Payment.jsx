import React from "react";
import { View, StyleSheet } from "react-native";

import Header from "../organisms/Header/Header";
import Text from "../atoms/Text/Text";
import Button from "../atoms/Button/Button";

import { faTimes as CloseIcon } from "@fortawesome/free-solid-svg-icons";

export default function Payment({ navigation }) {
  return (
    <View style={styles.main}>
      <Header icon={CloseIcon} children={{ text: "¿Como vas a pagar?" }} />
      <View style={{ paddingHorizontal: 25, marginTop: 10 }}>
        <Text variant="h5" style={styles.text}>
          Pago en la entrega
        </Text>

        <Button
          onPress={() => navigation.push("Checkout")}
          style={[styles.align, { backgroundColor: "#52DB6C" }]}
          children="Efectivo"
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
    backgroundColor: "#FFF",
  },
  text: {
    fontWeight: "700",
    marginTop: 5,
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
});
