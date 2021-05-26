import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, Button } from "react-native";

import SearchBar from "../organisms/SearchBar/SearchBar";
import ProductCard from "../organisms/ProductCard/ProductCard";
// import HorizontalProductCard from "../../atomic Design/organisms/HorizontalProductCard";
// import SkeletonPlaceholder from "react-native-skeleton-placeholder";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { searchProducts } from "../../api.js";

const PRODUCTS_LIMIT = 50;


export default function Result({ route }) {
  // const [productsData, setProductsData] = useState();
  // const [page, setPage] = useState(1);

  // useEffect(() => {
  //   searchProducts(route.params, 1, PRODUCTS_LIMIT).then((resp) =>
  //     setProductsData(resp)
  //   );
  // }, []);
  const productsData = [
    {
      price: "175",
      name: "Martillo de 3/4 pulgadas ",
      contentType: "Metro (m)",
      content: "6",
      brand: "Hierros Jr",
    },
    {
      price: "175",
      name: "Martillo de 3/4 pulgadas ",
      contentType: "Metro (m)",
      content: "6",
      brand: "Hierros Jr",
    },
        {
      price: "175",
      name: "Martillo de 3/4 pulgadas ",
      contentType: "Metro (m)",
      content: "6",
      brand: "Hierros Jr",
    },
    {
      price: "175",
      name: "Martillo de 3/4 pulgadas ",
      contentType: "Metro (m)",
      content: "6",
      brand: "Hierros Jr",
    },
        {
      price: "175",
      name: "Martillo de 3/4 pulgadas ",
      contentType: "Metro (m)",
      content: "6",
      brand: "Hierros Jr",
    },
  ]


  return (
    <View style={styles.container}>
      <SearchBar onPress={alert} style={{ elevation: 0 }}/>

      {productsData && (
        <>
          <View style={styles.content}>
            <View>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                {productsData.length} Resultados
              </Text>
            </View>
            <View style={styles.icons}>
              <FontAwesomeIcon icon={faFilter} color={"#AAA"} size={20} />
              <Text style={{ fontSize: 15 }}>Filtros</Text>
            </View>
          </View>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.results}>
                {productsData.map((props, index) => {
                  return <ProductCard children={props} onPress={alert} key={index} style={{ marginVertical: 5 }}/>;
                })}
              </View>
            </ScrollView>
            <View style={{ backgroundColor: "grey", height: 50 }}>
            </View>
        </>
      ) }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  content: {
    height: 40,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
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
    justifyContent: "space-between",
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 15,
    paddingVertical: 15,
  }
});
