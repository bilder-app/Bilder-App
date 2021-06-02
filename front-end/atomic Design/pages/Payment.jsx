import React from "react";
import { View, StyleSheet } from "react-native";

import Header from "../organisms/Header/Header";
import Text from "../atoms/Text/Text";
import Button from "../atoms/Button/Button";

import { faTimes as CloseIcon } from "@fortawesome/free-solid-svg-icons";

export default function Payment() {
  
  return (
    <View style={styles.main}>
      <Header icon={CloseIcon} children={{ text: "Pasarelas de pago" }}/>

      <View style={{ paddingHorizontal: 25, marginTop: 15 }}>
        <Text variant="h2" style={{ fontWeight: "700", marginBottom: 25 }}>
          Elegi una forma de pago
        </Text>

        <Text variant="h6" style={styles.text}>Pago online</Text>
        <Button
          style={[ styles.align, {backgroundColor: "#878585"} ]}
          children="Agregar tarjeta"
        />

        <Text variant="h6" style={styles.text}>MercadoPago</Text>
        <Button
          style={[ styles.align, {backgroundColor: "#568EFC"} ]}
          children="Link de pago"
        />

        <Text variant="h6" style={styles.text}>Pago en la entrega</Text>
        <Button
          style={[ styles.align, {backgroundColor: "#52DB6C"} ]}
          children="Efectivo"
        />
      </View>
      <View style={styles.button}>
        <Button onPress={() => alert("Compra realizada con exito")} children="Continuar" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: { 
    height: "100%", 
    width: "100%",
    display: "flex",
  },
  text: {
    fontWeight: "700",
    marginTop: 15, 
    marginBottom: 10 
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
