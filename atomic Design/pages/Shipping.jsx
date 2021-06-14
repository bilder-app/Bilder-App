import React from "react";
import { View, StyleSheet } from "react-native";

import Header from "../organisms/Header/Header";
import Text from "../atoms/Text/Text";
import Button from "../atoms/Button/Button";
import CardItem from "../organisms/CardItem/CardItem";
import ScrollContainer from "../atoms/ScrollContainer/ScrollContainer";
import { useQuery } from "react-query";
import { getCheckoutCartProducts } from "../../api";
import { map } from "ramda";
import { remap } from "../../ramdaHelperFns";

const getProductsData = (data) => {
  let packageNumber = 1;
  const resp = [];
  for (let businessProducts of Object.values(data)) {
    resp.push([
      packageNumber,
      map(
        // individual item
        remap({
          name: ["name"],
          price: ["price"],
          image: ["images", 0],
          units: ["ProductInCart", "amount"]
        }),
        businessProducts
      )
    ]);
    packageNumber++;
  }
  return resp;
};

export default function Shipping({ navigation }) {
  const { data, isLoading } = useQuery(
    "checkout cart products",
    getCheckoutCartProducts
  );
  const children = {
    id: Math.floor(Math.random() * 100 + 1),
    images: ["https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"],
    name: "Muñeco de baby Joda coleccionable",
    price: Math.floor(Math.random() * 1000 + 1),
    units: Math.floor(Math.random() * 50 + 2)
  };

  if (isLoading) return null;

  const computedData = getProductsData(data);

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
            {computedData.map(([packageNumber, products]) => (
              <View style={{ marginBottom: 20 }}>
                <Text variant="h4">Paquete {packageNumber}</Text>
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
                  <Text variant="h5">Envio a domicilio</Text>
                </View>
                {products.map((productData) => (
                  <CardItem
                    variant="shippingDetail"
                    children={{ ...productData, images: [productData.image] }}
                    onPress={console.log}
                  />
                ))}
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    backgroundColor: "white"
                  }}
                >
                  <Text variant="h3">Costo de Envio</Text>
                  <Text variant="h3">$1000</Text>
                </View>
              </View>
            ))}

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
