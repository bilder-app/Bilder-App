import React from "react";
import { StyleSheet } from "react-native";

import ProductCard from "../ProductCard/ProductCard";
import ScrollContainer from "../../atoms/ScrollContainer/ScrollContainer";

export default function ProductSlider({ children = [], style }) {
  if (children.length) {
    return (
      <ScrollContainer position="horizontal" style={styles.default}>
        {children.map((product, i) => {
          return <ProductCard key={i} children={product} style={styles.card} />;
        })}
      </ScrollContainer>
    );
  }
  return null;
  // return (
  //   <ScrollContainer position="horizontal" style={styles.default}>
  //     {[1, 2, 3].map((item) => {
  //       return (
  //         <ProductCard
  //           key={item}
  //           children={{
  //             price: "280",
  //             name: "Bolsa de arena",
  //             contentType: "Unidad (u)",
  //             content: "1",
  //             brand: "Corralón de materiales"
  //           }}
  //           style={styles.card}
  //         />
  //       );
  //     })}
  //   </ScrollContainer>
  // );
}

const styles = StyleSheet.create({
  default: {
    width: "100%",
    paddingHorizontal: 10,
    marginBottom: 10
  },
  card: {
    marginHorizontal: 5,
    justifyContent: "space-between"
  }
});
