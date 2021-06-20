import React, { useCallback } from "react";
import { View, StyleSheet, ScrollView, StatusBar } from "react-native";
import { useQuery } from "react-query";

import Header from "../../atomic Design/organisms/Header/Header";
import CardItem from "../../atomic Design/organisms/CardItem/CardItem";

import HorizontalItemSkeleton from "../organisms/HorizontalItemSkeleton";
import { 
  getFavoriteProducts,
  postProductToCart,
 } from "../../api";
import { useFocusEffect } from "@react-navigation/native";

function Favourites() {
  const { 
    data: favoriteProductsData = [], 
    isLoading, 
    refetch: refetchFavorites
  } = useQuery(
    "favorite products",
    getFavoriteProducts
  );


  useFocusEffect(
    useCallback(() => {
      refetchFavorites()
    }, [])
  );


  const postProductToCartAsync = async (id) => postProductToCart(id); 

  return (
    <View style={styles.main}>
      <StatusBar animated={true} backgroundColor="#FF8000" />
      <Header children={{ text: "Favoritos" }} hideBackIcon/>
      <ScrollView
        style={{ width: "100%" }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ width: "100%", marginTop: 5, marginBottom: 15, paddingHorizontal: 15 }}>
          {isLoading
            ? [1, 2, 3, 4].map((i) => <HorizontalItemSkeleton key={i} />)
            : favoriteProductsData.map((product, i) => {
                return (
                  <CardItem
                    key={i}
                    variant="favourite"
                    children={product}
                    onPress={postProductToCartAsync}
                    redirect
                  />
                );
              })}
        </View>
      </ScrollView>
    </View>
  );
}

export default Favourites;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white"
  }
});
