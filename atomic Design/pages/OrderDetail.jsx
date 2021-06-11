import React, { useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { connect } from "react-redux";

import Header from "../organisms/Header/Header";
// import { getFavoriteProducts } from "../redux/actions/products";
import CardItem from "../organisms/CardItem/CardItem";

const children = {
  id: Math.floor(Math.random() * 100 + 1),
  images: ["https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"],
  name: "Muñeco de baby Joda coleccionable",
  price: Math.floor(Math.random() * 1000 + 1),
  units: Math.floor(Math.random() * 50 + 2),
};

export default function OrderDetail({
  orderProducts = [1, 2, 3, 4, 5],
  getFavoriteProducts,
  route,
}) {
  // useEffect(() => {
  //   getFavoriteProducts()
  // }, []);

  return (
    <View style={styles.main}>
      <Header children={{ text: `Orden #000${children.id}` }} />

      <View style={{ paddingHorizontal: 15, height: "100%" }}>
        <View style={styles.scroll}>
          <ScrollView
            style={{ width: "100%", height: "90%" }}
            showsVerticalScrollIndicator={false}
          >
            <View style={{ marginTop: 10, marginBottom: 10 }}>
              {orderProducts &&
                orderProducts.map((product, i) => {
                  return (
                    <CardItem
                      variant="shippingDetail"
                      children={children}
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
            <Text style={{ fontSize: 20 }}>$4400</Text>
          </View>
          <View style={styles.text}>
            <Text>Costo de envío</Text>
            <Text style={{ fontSize: 20 }}>$600</Text>
          </View>
          <View style={styles.text}>
            <Text>Total</Text>
            <Text style={{ fontSize: 21, fontWeight: "bold" }}>$5000</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

// function mapStateToProps(state) {
//   return {
//     orderProducts: state.productsList.favoriteProducts
//   };
// }
// export default connect(mapStateToProps, { getFavoriteProducts })(OrderDetail);

const styles = StyleSheet.create({
  main: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    backgroundColor: "white",
  },
  scroll: {
    height: "75%",
  },
  data: {
    paddingHorizontal: 15,
    paddingTop: 15,
    borderColor: "#BBB",
    borderTopWidth: 1.5,
  },
  text: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
});
