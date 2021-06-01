import React, { useEffect } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";

import Header from "../../atomic Design/organisms/Header/Header";
import CardItem from "../../atomic Design/organisms/CardItem/CardItem";

// import { useDispatch, useSelector } from "react-redux";
// import { getFavoriteProducts } from "../redux/actions/products";
// import HorizontalItemSkeleton from "../components/HorizontalItemSkeleton";

function Favourites() {
  // const dispatch = useDispatch();
  // const { favoriteProducts, isFetchingFavoriteItems } = useSelector(
  //   (state) => state.productsList
  // );

  // useEffect(() => {
  //   dispatch(getFavoriteProducts());
  // }, []);

  const products = [
    { 
      id: Math.floor((Math.random() * 100) + 1),
      image: "https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg",
      description: "Muñeco de baby Joda coleccionable",
      price: Math.floor((Math.random() * 1000) + 1),
    },
    { 
      id: Math.floor((Math.random() * 100) + 1),
      image: "https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg",
      description: "Muñeco de baby Joda coleccionable",
      price: Math.floor((Math.random() * 1000) + 1),
    },
    { 
      id: Math.floor((Math.random() * 100) + 1),
      image: "https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg",
      description: "Muñeco de baby Joda coleccionable",
      price: Math.floor((Math.random() * 1000) + 1),
    },
  ]
/*
  children: {
    text: "Carrito",
    id: productId,
  },
  onPress: {
    favouriteAction: function,
    shareAction: function,
  }
   */

  return (
    <View style={styles.main}>
      <Header children={{ text: "Favoritos" }}/>
      <View style={{ width: "93%", height: "88%" }}>
        <ScrollView
          style={{ width: "100%" }}
          showsVerticalScrollIndicator={false}
        >
          <View style={{ width: "100%", marginTop: 10, marginBottom: 15 }}>
            {/* {favoriteProducts.length
              ? favoriteProducts.map((product, i) => { */}
            {products.length
              ? products.map((product, i) => {
                  return (
                    <CardItem
                      key={i}
                      variant="favourite" 
                      children={product}
                      onPress={console.log}
                    />
                  );
                })
              : isFetchingFavoriteItems &&
                [1, 2, 3, 4].map((i) => <HorizontalItemSkeleton key={i} />)}
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

export default Favourites;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: "center"
  }
});
