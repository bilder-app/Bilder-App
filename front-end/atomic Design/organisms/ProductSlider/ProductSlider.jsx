import React from "react";
import { View } from "react-native";
import ProductCard from "../ProductCard/ProductCard";
import ScrollContainer from "../../atoms/ScrollContainer/ScrollContainer";

const styles = {
  default: {
    width: "100%",
    height: 300,
    marginTop: "auto",
    marginBottom: "auto",
    backgroundColor: "grey",
  },
  card: {
    marginHorizontal: 7,
    justifyContent: "center",
  }
};

export default function ProductSlider({ children, style }) {
  
  return (
      <ScrollContainer position='horizontal' style={styles.default}>
        {[1,2,3,4,5].map((item) => {
          return(
            <ProductCard
              children={{
                price: "280",
                name: "Bolsa de arena",
                contentType: "Unidad (u)",
                content: "1",
                brand: "Corralón de materiales",
              }}
              onPress={alert}
              style={styles.card}
            />
          )
        })}
      </ScrollContainer>
  );
}
