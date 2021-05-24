import React, { useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { connect } from "react-redux";

import Header from "../components/Header.jsx";
import { getFavoriteProducts } from "../redux/actions/products.js";
import OrderProduct from '../components/Order/OrderProduct.jsx'


function OrderDetail({ orderProducts, getFavoriteProducts, route }) {

  useEffect(() => {
    getFavoriteProducts()
  }, []);

  return (
    <View style={styles.main}>
      <Header title={`Orden #000${route.params}`} />  

      <View style={{ paddingHorizontal: 15, height: '100%' }}>
        <View style={styles.scroll}>
          <ScrollView
            style={{ width: "100%", height: '90%' }}
            showsVerticalScrollIndicator={false}
          >
            <View style={{ marginTop: 10, marginBottom: 10 }}>
              {orderProducts && orderProducts.map((item, index) => {
                return(<OrderProduct product={item} cantidad={index} key={index}/>)
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
            <Text style={{ fontSize: 21, fontWeight: 'bold' }}>$5000</Text>
          </View>
        </View>
      </View>
     
    </View>
  );
}


function mapStateToProps(state) {
  return {
    orderProducts: state.productsList.favoriteProducts
  };
}
export default connect(mapStateToProps, { getFavoriteProducts })(OrderDetail);

const styles = StyleSheet.create({
  main: {
      width: "100%",
      height: "100%",
    alignItems: 'center',
  },
  scroll: {
    height: "75%",
  },
  data: {
    paddingHorizontal: 15,
    paddingTop: 15,
    borderColor: '#BBB',
    borderTopWidth: 1.5,
  },
  text: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  }
});
