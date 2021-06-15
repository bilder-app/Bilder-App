import React, { useEffect, useState } from "react";
import { View, StyleSheet, Switch } from "react-native";

import Header from "../organisms/Header/Header";
import Text from "../atoms/Text/Text";
import Button from "../atoms/Button/Button";
import CardItem from "../organisms/CardItem/CardItem";
import ScrollContainer from "../atoms/ScrollContainer/ScrollContainer";
import { useQuery } from "react-query";
import { getCheckoutCartProducts } from "../../api";

const getTotalPriceOfProducts = (products) =>
  products.reduce((acc, { units, price }) => {
    return acc + units * price;
  }, 0);

export default function Shipping({ navigation }) {
  const [checkoutDetails, setCheckoutDetails] = useState({});
  const { data, isLoading } = useQuery(
    "checkout cart products",
    getCheckoutCartProducts
  );

  useEffect(() => {
    if (data) {
      data.forEach(({ business }) => {
        setCheckoutDetails((prev) => {
          const newObj = { ...prev };
          newObj[business.id] = {
            delivery: business.delivery // delivery === true, takeAway === false
          };
          return newObj;
        });
      });
    }
  }, [data]);

  const toggleSwitch = (businessId) => {
    setCheckoutDetails((prev) => {
      const newObj = { ...prev };
      newObj[businessId].delivery = !prev[businessId].delivery;
      return newObj;
    });
  };

  if (!Object.keys(checkoutDetails).length) return null;

  const subtotal = data.reduce((total, { products }) => {
    return (
      total + products.reduce((acc, next) => acc + next.units * next.price, 0)
    );
  }, 0);

  const deliveryCost = data.reduce((acc, { business, products }) => {
    const productsTotal = getTotalPriceOfProducts(products);
    const isDelivering = checkoutDetails[business.id].delivery;
    if (isDelivering && productsTotal < business.freeDeliveryAt)
      return acc + business.deliveryPrice;
    else return acc;
  }, 0);

  const finalTotalCost = subtotal + deliveryCost;

  return (
    <View style={styles.main}>
      <Header children={{ text: "¿Lo buscas o te lo llevamos?" }} />
      <View style={styles.scroll}>
        <ScrollContainer>
          <View style={{ marginTop: 10 }}>
            <View style={{ marginBottom: 20 }}>
              <Text variant="h4">Dirrección de Envio</Text>
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
                <Text variant="h5">Av.De Mayo 789</Text>
              </View>
            </View>
            {data.map(({ packageNumber, products, business }) => (
              <View key={business.id} style={{ marginBottom: 20 }}>
                <Text variant="h4">Paquete {packageNumber}</Text>
                <View
                  style={{
                    backgroundColor: "#F6F6F6",
                    height: 40,
                    justifyContent: "center",
                    padding: 10,
                    borderRadius: 10,
                    marginTop: 5,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between"
                  }}
                >
                  <Text variant="h5">
                    {business.delivery
                      ? "Envio a domicilio"
                      : "Retiro en el local"}
                  </Text>
                  <Switch
                    onValueChange={() => toggleSwitch(business.id)}
                    value={checkoutDetails[business.id].delivery}
                  />
                </View>
                {products.map((productData, i) => (
                  <CardItem
                    key={i}
                    variant="shippingDetail"
                    children={{ ...productData, images: [productData.image] }}
                    onPress={console.log}
                  />
                ))}
                {business.deliveryPrice &&
                  checkoutDetails[business.id].delivery && (
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        backgroundColor: "white"
                      }}
                    >
                      <Text variant="h3">Costo de Envio</Text>
                      <Text variant="h3">
                        $
                        {getTotalPriceOfProducts(products) >
                        business.freeDeliveryAt
                          ? 0
                          : business.deliveryPrice}
                      </Text>
                    </View>
                  )}
              </View>
            ))}

            <View style={styles.content}>
              <View style={styles.header}>
                <Text style={{ color: "#707070" }} variant="subtitle2">
                  Subtotal
                </Text>
                <Text style={styles.price} variant="h6">
                  $ {subtotal}
                </Text>
              </View>
              <View style={styles.header}>
                <Text style={{ color: "#707070" }} variant="subtitle2">
                  Costo de Entrega Total
                </Text>
                <Text style={styles.price} variant="h6">
                  $ {deliveryCost}
                </Text>
              </View>
              <View style={styles.header}>
                <Text style={{ color: "#707070" }} variant="subtitle2">
                  Total
                </Text>
                <Text style={styles.price} variant="h6">
                  $ {finalTotalCost}
                </Text>
              </View>
            </View>
          </View>
        </ScrollContainer>
      </View>
      <View style={styles.button}>
        <Button
          children="Continuar"
          onPress={() => navigation.push("Payment")}
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
  scroll: {
    height: "87.6%"
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
  },
  results: {
    width: "100%"
  }
});
