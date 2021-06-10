import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, Button } from "react-native";

import SearchBar from "../organisms/SearchBar/SearchBar";
import ProductCard from "../organisms/ProductCard/ProductCard";
// import HorizontalProductCard from "../../atomic Design/organisms/HorizontalProductCard";
// import SkeletonPlaceholder from "react-native-skeleton-placeholder";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { searchProducts } from "../../api.js";
import { useInfiniteQuery } from "react-query";

// const PRODUCTS_LIMIT = 50;
const PRODUCTS_LIMIT = 3;

export default function Result({ route }) {
  const {
    params: { searchTerm }
  } = route;

  const { data } = useInfiniteQuery(
    "products search results",
    ({ pageParam = 1 }) =>
      searchProducts({
        name: searchTerm,
        limit: PRODUCTS_LIMIT,
        page: pageParam
      }),
    {
      getNextPageParam: (lastPage) => lastPage.next?.page
    }
  );
  const productsData = [
    {
      price: "175",
      name: "Martillo de 3/4 pulgadas ",
      contentType: "Metro (m)",
      content: "6",
      brand: "Hierros Jr"
    },
    {
      price: "175",
      name: "Martillo de 3/4 pulgadas ",
      contentType: "Metro (m)",
      content: "6",
      brand: "Hierros Jr"
    },
    {
      price: "175",
      name: "Martillo de 3/4 pulgadas ",
      contentType: "Metro (m)",
      content: "6",
      brand: "Hierros Jr"
    },
    {
      price: "175",
      name: "Martillo de 3/4 pulgadas ",
      contentType: "Metro (m)",
      content: "6",
      brand: "Hierros Jr"
    },
    {
      price: "175",
      name: "Martillo de 3/4 pulgadas ",
      contentType: "Metro (m)",
      content: "6",
      brand: "Hierros Jr"
    }
  ];

  return (
    <View style={styles.container}>
      <SearchBar onPress={alert} style={{ elevation: 0 }} />

      {productsData && (
        <>
          <View style={styles.content}>
            <View>
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                {productsData.length} Resultados
              </Text>
            </View>
            <View style={styles.icons}>
              <FontAwesomeIcon icon={faFilter} color={"#AAA"} size={18} />
              <Text style={{ fontSize: 16 }}> Filtros</Text>
            </View>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            {data && (
              <View style={styles.results}>
                {data.pages.map(({ results }) =>
                  results.map((data) => (
                    <ProductCard
                      children={data}
                      onPress={alert}
                      key={data.id}
                      style={{ marginVertical: 5 }}
                    />
                  ))
                )}
              </View>
            )}
          </ScrollView>
          {/* <View style={{ backgroundColor: "grey", height: 50 }}></View> */}
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%"
  },
  content: {
    height: 40,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    borderBottomColor: "grey",
    borderBottomWidth: 1
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
    paddingVertical: 15
  }
});
