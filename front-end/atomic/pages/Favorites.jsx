import React, { useEffect } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";

import Header from "../components/Header.jsx";
import FavouriteItem from "../components/Favourites/FavouriteItem.jsx";

import { useDispatch, useSelector } from "react-redux";
import { getFavoriteProducts } from "../redux/actions/products";
import HorizontalItemSkeleton from "../components/HorizontalItemSkeleton";

function Favourites() {
  const dispatch = useDispatch();
  const { favoriteProducts, isFetchingFavoriteItems } = useSelector(
    (state) => state.productsList
  );

  useEffect(() => {
    dispatch(getFavoriteProducts());
  }, []);

  return (
    <View style={styles.main}>
      <Header title="Favoritos" redirectHome={true} />
      <View style={{ width: "93%", height: "88%" }}>
        <ScrollView
          style={{ width: "100%" }}
          showsVerticalScrollIndicator={false}
        >
          <View style={{ width: "100%", marginTop: 10, marginBottom: 15 }}>
            {favoriteProducts.length
              ? favoriteProducts.map((product) => {
                  return <FavouriteItem product={product} key={product.id} />;
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
