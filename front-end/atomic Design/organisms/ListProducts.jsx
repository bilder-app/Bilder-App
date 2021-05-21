import React, { useEffect } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { connect } from "react-redux";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

import {
  getProducts,
  showModal,
  hideModal,
} from "../../../redux/actions/products";
import Product from "./Product.jsx";
import CartModal from "../CartModal.jsx";

function ListProducts({ products, modal, getProducts, showModal, hideModal }) {
  useEffect(() => {
    getProducts();
  }, []);
  const { isVisible, product } = modal;

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.products}>
          {products.length
            ? products.map((props, index) => (
                <Product product={props} showModal={showModal} key={index} />
              ))
            : [1, 2, 3, 4].map((i) => (
                <SkeletonPlaceholder key={i}>
                  <View
                    style={{
                      width: 170,
                      paddingLeft: 10,
                      paddingRight: 10,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <View
                      style={{ width: "100%", height: 110, borderRadius: 15 }}
                    />
                    <View style={{ width: "50%", height: 25, marginTop: 5 }} />
                    <View style={{ width: "50%", height: 30, marginTop: 5 }} />
                    <View
                      style={{
                        width: "100%",
                        height: 30,
                        marginTop: 35,
                        marginLeft: 5,
                        marginRight: 5,
                        borderRadius: 25,
                      }}
                    />
                  </View>
                </SkeletonPlaceholder>
              ))}
        </View>
        {isVisible && <CartModal product={product} hideModal={hideModal} />}
      </ScrollView>
    </View>
  );
}

function mapStateToProps(state) {
  return {
    products: state.productsList.products,
    modal: state.productsList.modal,
  };
}
export default connect(mapStateToProps, { getProducts, showModal, hideModal })(
  ListProducts
);

const styles = StyleSheet.create({
  container: {
    height: 250,
    width: "100%",
    marginBottom: 25,
  },
  products: {
    height: "100%",
    paddingLeft: 5,
    paddingRight: 5,
    flexDirection: "row",
  },
});
