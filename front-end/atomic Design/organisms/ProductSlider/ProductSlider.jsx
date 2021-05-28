import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import ScrollContainer from "../../atoms/ScrollContainer/ScrollContainer";

const styles = {
  default: {
    width: "100%",
    paddingHorizontal: 10,
  },
  card: {
    marginHorizontal: 5,
    justifyContent: "center",
  }
};

export default function ProductSlider({ children, style }) {
  
  return (
      <ScrollContainer position='horizontal' style={styles.default}>
        {[1,2,3,4,5].map((item) => {
          return(
            <ProductCard
              key={item}
              children={{
                price: "280",
                name: "Bolsa de arena",
                contentType: "Unidad (u)",
                content: "1",
                brand: "Corralón de materiales",
              }}
              onPress={console.log}
              style={styles.card}
            />
          )
        })}
      </ScrollContainer>
  );
}
