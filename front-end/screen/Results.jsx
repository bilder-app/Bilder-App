import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, Button } from "react-native";

import SearchBar from "../components/SearchBar.jsx";
import FavouriteItem from "../components/Favourites/FavouriteItem.jsx";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { searchProducts } from "../api";

const PRODUCTS_LIMIT = 50;

export default function Result({ route }) {
  const [productsData, setProductsData] = useState();
  const [page, setPage] = useState(1);

  useEffect(() => {
    searchProducts(route.params, 1, PRODUCTS_LIMIT).then((resp) =>
      setProductsData(resp)
    );
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <SearchBar />
      </View>

      {productsData ? (
        <>
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
            <ScrollView showsVerticalScrollIndicator={false}>
              {productsData.products.map((props, index) => {
                return <FavouriteItem product={props} key={index} />;
              })}
              {productsData.next && (
                <Button
                  onPress={() => {
                    setPage(page + 1);
                    searchProducts(route.params, page + 1, PRODUCTS_LIMIT).then(
                      (resp) =>
                        setProductsData({
                          products: [
                            ...productsData.products,
                            ...resp.products
                          ],
                          next: resp.next
                        })
                    );
                  }}
                  color="#E49012"
                  title="Mas resultados"
                />
              )}
            </ScrollView>
          </View>
        </>
      ) : (
        [1, 2, 3, 4, 5].map((i) => (
          <SkeletonPlaceholder key={i}>
            <View
              style={{
                width: "100%",
                height: 110,
                padding: 20,
                flexDirection: "row"
              }}
            >
              <View style={{ width: 90, height: 90, borderRadius: 25 }} />

              <View
                style={{
                  marginLeft: 20,
                  flexGrow: 1,
                  height: "100%",
                  flexDirection: "column"
                }}
              >
                <View style={{ width: "80%", height: 20 }} />
                <View style={{ width: 80, marginTop: 8, height: 25 }} />
                <View
                  style={{
                    height: "100%",
                    width: "100%",
                    flexDirection: "row",
                    marginTop: 8,
                    flexGrow: 1
                  }}
                >
                  <View style={{ width: 80, height: 25, borderRadius: 25 }} />
                  <View
                    style={{
                      width: 120,
                      marginLeft: 30,
                      height: 25,
                      borderRadius: 25
                    }}
                  />
                </View>
              </View>
            </View>
          </SkeletonPlaceholder>
        ))
      )}
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
    paddingHorizontal: 15,
    flexGrow: 1,
    flex: 1,
    marginBottom: 15
  }
});
