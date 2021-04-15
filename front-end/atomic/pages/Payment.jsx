import React from "react";
import { View, StyleSheet } from "react-native";
import Header from "../organisms/Header";
import { faTimes as CloseIcon } from "@fortawesome/free-solid-svg-icons";
import Text from "../../storybook/stories/Text/Text";
import Button from "../../storybook/stories/Button";
import ActionButton from "../atoms/Actionbutton";

function Cart() {
  return (
    <View style={styles.wrapper}>
      <Header icon={CloseIcon} />
      <View style={{ paddingHorizontal: 25 }}>
        <Text variant="h5" style={{ fontWeight: "700" }}>
          Elegi una forma de pago
        </Text>
        <Text variant="h6" style={{ fontWeight: "700", marginVertical: 15 }}>
          Pago online
        </Text>
        <Button
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            backgroundColor: "#878585"
          }}
        >
          Agregar tarjeta
        </Button>
        <Text variant="h6" style={{ fontWeight: "700", marginVertical: 15 }}>
          Pago en la entrega
        </Text>
        <Button
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            backgroundColor: "#52DB6C"
          }}
        >
          Efectivo
        </Button>
      </View>
      <View style={styles.bottomButton}>
        <ActionButton text="Continuar" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { height: "100%", display: "flex" },
  bottomButton: {
    marginRight: "auto",
    marginLeft: "auto",
    width: "90%",
    paddingVertical: 15,
    backgroundColor: "white",
    marginTop: "auto"
  }
});

export default Cart;
