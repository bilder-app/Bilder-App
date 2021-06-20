import React from "react";
import { StyleSheet } from "react-native";

import ProductCard from "../ProductCard/ProductCard";
import ScrollContainer from "../../atoms/ScrollContainer/ScrollContainer";


export default function ProductSlider({ children = [], style }) {
  if (children.length) {
    return (
      <ScrollContainer position="horizontal" style={[styles.default, style]}>
        {children.map((product, i) => {
          return <ProductCard key={i} children={product} style={styles.card} />;
        })}
      </ScrollContainer>
    );
  }
  return null;
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
