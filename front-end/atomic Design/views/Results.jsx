import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Button } from "react-native";

import SearchBar from "../../atomic Design/organisms/SearchBar/SearchBar";
import HorizontalProductCard from "../../atomic/components/HorizontalProductCard/HorizontalProductCard";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { searchProducts } from "../../api";
import ProductCard from "../organisms/ProductCard/ProductCard";

const PRODUCTS_LIMIT = 50;

export default function Result({ route }) {
  const [productsData, setProductsData] = useState({
    products: [
      {
        brand: "El sol",
        contentType: "Kilos (kg)",
        content: 15,
        name: "Clavos",
        price: 15,
        images: ["https://picsum.photos/id/237/500/500"]
      },
      {
        brand: "El sol",
        contentType: "Kilos (kg)",
        content: 15,
        name: "Martillo",
        price: 30,
        images: ["https://picsum.photos/id/27/500/500"]
      },
      {
        brand: "El sol",
        contentType: "Kilos (kg)",
        content: 15,
        name: "Test",
        price: 30,
        images: ["https://picsum.photos/id/27/500/500"]
      },
      {
        brand: "El sol",
        contentType: "Kilos (kg)",
        content: 15,
        name: "Producto",
        price: 30,
        images: ["https://picsum.photos/id/27/500/500"]
      },
      {
        brand: "El sol",
        contentType: "Kilos (kg)",
        content: 15,
        name: "Producto",
        price: 30,
        images: ["https://picsum.photos/id/27/500/500"]
      },
      {
        brand: "El sol",
        contentType: "Kilos (kg)",
        content: 15,
        name: "Producto",
        price: 30,
        images: ["https://picsum.photos/id/27/500/500"]
      },
      {
        brand: "El sol",
        contentType: "Kilos (kg)",
        content: 15,
        name: "Producto",
        price: 30,
        images: ["https://picsum.photos/id/27/500/500"]
      },
      {
        brand: "El sol",
        contentType: "Kilos (kg)",
        content: 15,
        name: "Producto",
        price: 30,
        images: ["https://picsum.photos/id/27/500/500"]
      },
      {
        brand: "El sol",
        contentType: "Kilos (kg)",
        content: 15,
        name: "Producto",
        price: 30,
        images: ["https://picsum.photos/id/27/500/500"]
      },
      {
        brand: "El sol",
        contentType: "Kilos (kg)",
        content: 15,
        name: "Producto",
        price: 30,
        images: ["https://picsum.photos/id/27/500/500"]
      }
    ]
  });
  //   const [page, setPage] = useState(1);

  //   useEffect(() => {
  //     searchProducts(route.params, 1, PRODUCTS_LIMIT).then((resp) =>
  //       setProductsData(resp)
  //     );
  //   }, []);

  return (
    <View style={styles.container}>
      <View>
        <SearchBar />
      </View>

      <View style={styles.content}>
        <View>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            {productsData.products.length} Resultados
          </Text>
        </View>
        <View style={styles.icons}>
          <FontAwesomeIcon icon={faFilter} color={"#AAA"} size={20} />
          <Text style={{ fontSize: 15 }}>Filtros</Text>
        </View>
      </View>

      <View style={styles.results}>
        <ScrollView
          contentContainerStyle={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap"
          }}
        >
          {productsData.products.map((props, index) => {
            return (
              <ProductCard
                key={index}
                style={{
                  marginLeft: "auto",
                  marginRight: "auto",
                  marginBottom: 10,
                  marginTop: 10
                }}
                children={props}
              />
            );
          })}

          {/* {productsData.next && (
            <Button
              onPress={() => {
                setPage(page + 1);
                searchProducts(route.params, page + 1, PRODUCTS_LIMIT).then(
                  (resp) =>
                    setProductsData({
                      products: [...productsData.products, ...resp.products],
                      next: resp.next
                    })
                );
              }}
              color="#E49012"
              title="Mas resultados"
            />
          )} */}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    display: "flex"
  },
  content: {
    height: 40,
    width: "100%",
    flexDirection: "row",
    backgroundColor: "#fff",
    borderTopWidth: 0.5,
    borderTopColor: "#707070",
    alignItems: "center",
    paddingHorizontal: 15
  },
  icons: {
    width: "25%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginLeft: "auto"
  },
  results: {
    width: "100%",
    flexGrow: 1,
    flex: 1
  }
});
