import React from "react";
import { View, StyleSheet, ScrollView, StatusBar } from "react-native";
import { useQuery } from "react-query";

import Header from "../../atomic Design/organisms/Header/Header";
import CardItem from "../../atomic Design/organisms/CardItem/CardItem";

import HorizontalItemSkeleton from "../organisms/HorizontalItemSkeleton";
import { getFavoriteProducts } from "../../api";

function Favourites() {
  const { data: favoriteProductsData = [], isLoading } = useQuery(
    "favorite products",
    getFavoriteProducts
  );

  return (
    <View style={styles.main}>
      <StatusBar animated={true} backgroundColor="#FF8000" />
      <Header children={{ text: "Favoritos" }} hideBackIcon/>

      <View
        style={{
          width: "94%",
          height: "88%"
        }}
      >
        <ScrollView
          style={{ width: "100%" }}
          showsVerticalScrollIndicator={false}
        >
          <View style={{ width: "100%", marginTop: 10, marginBottom: 15 }}>
            {isLoading
              ? [1, 2, 3, 4].map((i) => <HorizontalItemSkeleton key={i} />)
              : favoriteProductsData.map((product, i) => {
                  return (
                    <CardItem
                      key={i}
                      variant="favourite"
                      children={product}
                      onPress={console.log}
                    />
                  );
                })}
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
    alignItems: "center",
    backgroundColor: "white"
  }
});
