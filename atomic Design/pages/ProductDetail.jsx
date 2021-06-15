import React, { useEffect } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   showModal,
//   getFavoriteProducts,
//   addProductToFavorites,
//   removeProductFromFavorites
// } from "../../redux/actions/products";
import Header from "../organisms/Header/Header";
import Slider from "../organisms/Slider";
import Footer from "../organisms/Footer/Footer";
import Text from "../atoms/Text/Text";
import Chip from "../atoms/Chip/Chip";
import {
  postProductToCart,
  getProductDetails,
  addProductToFavorites,
  getFavoriteProduct,
  removeProductFromFavorites,
  getCartProduct,
} from "../../api";
import { useQueryClient, useQuery } from "react-query";
import { useFocusEffect } from "@react-navigation/native";

export default function ProductDetails({ route }) {
  const queryClient = useQueryClient();
  const { productId } = route.params;
  const {
    data: productData = {},
    isFetching,
    refetch: refetchProductData,
  } = useQuery(["product data", productId], () => getProductDetails(productId));
  const {
    name,
    price,
    description,
    images,
    stock,
    model,
    content,
    brand,
    contentType,
  } = productData;

  const { data: favoriteProductData, refetch: refetchFavoriteProduct } =
    useQuery(["get favorited product", productId], () =>
      getFavoriteProduct(productId)
    );

  const { data: cartProductData, refetch: refetchCartProduct } = useQuery(
    ["cart product", productId],
    () => getCartProduct(productId)
  );

  useFocusEffect(
    React.useCallback(() => {
      refetchProductData();
      refetchFavoriteProduct();
      refetchCartProduct();
    }, [])
  );

  const isFavorited = !!favoriteProductData;
  const isInCart = !!cartProductData;

  if (isFetching) return null;

  return (
    <View style={styles.main}>
      <Header
        variant="icons"
        children={{ id: productId }}
        isFavorited={isFavorited}
        onPress={{
          favouriteAction: () => {
            if (isFavorited) {
              removeProductFromFavorites(productId).then(() => {
                queryClient.invalidateQueries("favorite products");
                queryClient.invalidateQueries("get favorited product");
              });
            } else {
              addProductToFavorites(productId).then(() => {
                queryClient.invalidateQueries("favorite products");
                queryClient.invalidateQueries("get favorited product");
              });
            }
          },
          shareAction: alert,
        }}
      />

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Slider images={images} />
        <View style={styles.data}>
          <Text variant="h1" style={{ color: "#FF8000" }}>
            $ {price}
          </Text>
          <Text variant="h4">{name}</Text>
          <Text variant="subtitle1" style={{ color: "#707070" }}>
            {description}
          </Text>

          <Text variant="h4" style={{ marginTop: 15 }}>
            Información General
          </Text>
          {!brand && (
            <Text variant="subtitle1" style={{ color: "#707070" }}>
              Marca: {brand || "Black&Decker"}
            </Text>
          )}
          {contentType && (
            <Text variant="subtitle1" style={{ color: "#707070" }}>
              Contenido: {content || 1} {contentType}
            </Text>
          )}
          {!model && (
            <Text variant="subtitle1" style={{ color: "#707070" }}>
              Modelo: {model || "700GH B&D"}
            </Text>
          )}
          {stock && (
            <Text variant="subtitle1" style={{ color: "#707070" }}>
              Stock: {stock}
            </Text>
          )}

          {/* <Text variant="h4" style={{ marginTop: 15 }}>
            Categorias
          </Text>
          <View style={styles.categories}>
            {categories.length ? (
              categories.map((title, i) => (
                <Chip key={i} children={title} style={styles.chip} />
              ))
            ) : (
              <Text variant="subtitle1" style={{ color: "#707070" }}>
                Este producto no tiene categorías
              </Text>
            )} 
          </View> */}
        </View>
      </ScrollView>

      {!isInCart && (
        <Footer
          onPress={() => {
            postProductToCart(productId).then(() => {
              queryClient.invalidateQueries("cart items");
              queryClient.invalidateQueries(["cart product", productId], {
                exact: true,
              });
            });
          }}
          title="Comprar ahora"
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    width: "100%",
    height: "100%",
  },
  content: {
    width: "100%",
    paddingHorizontal: 15,
    backgroundColor: "white",
  },
  data: {
    width: "100%",
    marginBottom: 5,
  },
  chip: {
    marginVertical: 5,
    elevation: 0,
    borderColor: "#CCC",
    borderWidth: 0.5,
  },
  categories: {
    marginTop: 10,
    marginBottom: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
});
