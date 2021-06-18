import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useOrder, getProducts } from "../../hooks/useOrder";

import Header from "../organisms/Header/Header";
import CardItem from "../organisms/CardItem/CardItem";

export default function OrderDetail({ route }) {
  const { data: orderData, isLoading } = useOrder(route.params);
  if (isLoading) return null;

  const productsData = getProducts(orderData);

  return (
    <View style={styles.main}>
      <Header children={{ text: `Orden #000${orderData.id}` }} />

      <View style={{ paddingHorizontal: 15, height: "100%" }}>
        <View style={styles.scroll}>
          <ScrollView
            style={{ width: "100%", height: "90%" }}
            showsVerticalScrollIndicator={false}
          >
            <View style={{ marginTop: 10, marginBottom: 10 }}>
              {productsData.map((product, i) => {
                return (
                  <CardItem
                    variant="shippingDetail"
                    children={product}
                    onPress={console.log}
                    key={i}
                  />
                );
              })}
            </View>
          </ScrollView>
        </View>

        <View style={styles.data}>
          <View style={styles.text}>
            <Text>Subtotal</Text>
            <Text style={{ fontSize: 20 }}>${orderData.productsPrice}</Text>
          </View>
          <View style={styles.text}>
            <Text>Costo de envío</Text>
            <Text style={{ fontSize: 20 }}>${orderData.shippingPrice}</Text>
          </View>
          <View style={styles.text}>
            <Text>Total</Text>
            <Text style={{ fontSize: 21, fontWeight: "bold" }}>
              ${orderData.shippingPrice + orderData.productsPrice}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    backgroundColor: "white"
  },
  scroll: {
    height: "75%"
  },
  data: {
    paddingHorizontal: 15,
    paddingTop: 15,
    borderColor: "#BBB",
    borderTopWidth: 1.5
  },
  text: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row"
  }
});
