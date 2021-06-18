import React from "react";
import { View, StyleSheet } from "react-native";

import Header from "../organisms/Header/Header";
import Text from "../atoms/Text/Text";
import Button from "../atoms/Button/Button";
import useCheckoutCartDetailsStore from "../../hooks/useCheckoutCartDetailsStore";
import { useCheckoutCart, getTotalProducts } from "../../hooks/useCheckoutCart";

import { faTimes as CloseIcon } from "@fortawesome/free-solid-svg-icons";
import { useUserData } from "../../hooks/useUserData";

const getTotalPriceOfProducts = (products) =>
  products.reduce((acc, { units, price }) => {
    return acc + units * price;
  }, 0);

export default function Checkout() {
  const store = useCheckoutCartDetailsStore();
  const { data, isLoading } = useCheckoutCart();
  const { data: userData } = useUserData();

  if (isLoading) return null;

  const subtotal = data.reduce((total, { products }) => {
    return (
      total + products.reduce((acc, next) => acc + next.units * next.price, 0)
    );
  }, 0);

  const deliveryCost = data.reduce((acc, { business, products }) => {
    const productsTotal = getTotalPriceOfProducts(products);
    const isDelivering = store.details[business.id].delivery;
    if (isDelivering && productsTotal < business.freeDeliveryAt)
      return acc + business.deliveryPrice;
    else return acc;
  }, 0);

  const finalTotalCost = subtotal + deliveryCost;

  const getBusinessAddress = (packageNum) => {
    const prodData = data.find(
      (prodData) => prodData.packageNumber === packageNum
    );
    return prodData.business.address;
  };

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
              marginTop: 5
            }}
          >
            <Text variant="h5">{getTotalProducts(data)}</Text>
          </View>

          {Object.values(store.details).map(({ packageNumber, delivery }) => (
            <>
              <Text variant="h3">Paquete {packageNumber}</Text>

              <View
                style={{
                  backgroundColor: "#F6F6F6",
                  height: 40,
                  justifyContent: "center",
                  padding: 10,
                  borderRadius: 10,
                  marginTop: 5
                }}
              >
                <Text variant="h5">
                  {delivery ? "Envio a domicilio" : "Retiro en el local"}
                </Text>
              </View>
              {!delivery && (
                <Text variant="h5">{getBusinessAddress(packageNumber)}</Text>
              )}
            </>
          ))}
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
              marginTop: 5
            }}
          >
            <Text variant="h5">{userData?.address}</Text>
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
              marginTop: 5
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
              $ {subtotal}
            </Text>
          </View>
          <View style={styles.header}>
            <Text style={{ color: "#707070" }} variant="h4">
              Costo de Entrega Total
            </Text>
            <Text style={styles.price} variant="h4">
              $ {deliveryCost}
            </Text>
          </View>
          <View style={styles.header}>
            <Text style={{ color: "#707070" }} variant="h4">
              Total
            </Text>
            <Text style={styles.price} variant="h4">
              $ {finalTotalCost}
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
    backgroundColor: "white"
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
    marginBottom: 15
  },
  button: {
    marginTop: "auto",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    paddingVertical: 5,
    backgroundColor: "#FFF"
  },
  content: {
    flexDirection: "column",
    justifyContent: "space-between"
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white"
  }
});
