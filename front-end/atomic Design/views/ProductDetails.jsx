import React, { useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import Header from "../organisms/Header/Header";
import Footer from "../../atomic/components/Footer.jsx";
import Slider from "../../atomic/components/ProductDetail/Slider.jsx";
import {
  showModal,
  getFavoriteProducts,
  addProductToFavorites,
  removeProductFromFavorites
} from "../../redux/actions/products";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faHeart as faHeartFill,
  faShareAlt
} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

function ProductDetails({
  route = { params: { images: ["https://picsum.photos/seed/picsum/900/900"] } },
  navigation
}) {
  const {
    images,
    name = "Nombre",
    description = "Descripción del producto",
    price = 150,
    id = 1
  } = route.params;
  const dispatch = useDispatch();
  const showModalDispatched = () => dispatch(showModal(route.params));
  const { favoriteProducts } = useSelector((state) => state.productsList);

  const isFavorite = !!favoriteProducts.find((prod) => prod.id === id);

  useEffect(() => {
    dispatch(getFavoriteProducts());
  }, []);

  return (
    <View style={styles.main}>
      <View style={{ width: "100%", height: 50, flexDirection: "row" }}>
        <Header text={"Detalle del producto"} />
        <View style={styles.icons}>
          <TouchableOpacity
            style={styles.item}
            onPress={() => {
              if (isFavorite) {
                dispatch(removeProductFromFavorites(id)).then(() =>
                  dispatch(getFavoriteProducts())
                );
              } else {
                dispatch(addProductToFavorites(id)).then(() =>
                  dispatch(getFavoriteProducts())
                );
              }
            }}
          >
            <FontAwesomeIcon
              icon={isFavorite ? faHeartFill : faHeart}
              color={"#E49012"}
              size={25}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.item}
            onPress={() => alert("Compartir")}
          >
            <FontAwesomeIcon icon={faShareAlt} color={"#E49012"} size={25} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.content}>
        <Slider images={images} />
        <View style={styles.data}>
          <Text style={{ fontSize: 34 }}>$ {price}</Text>
          <Text style={{ fontSize: 23, fontWeight: "bold" }}>{name}</Text>
          <Text style={{ color: "#707070" }}>{description}</Text>
        </View>
      </View>

      {/* <Footer title={"Agregar al carrito"} onPress={showModalDispatched} /> */}
    </View>
  );
}

export default ProductDetails;

const styles = StyleSheet.create({
  main: {
    width: "100%",
    height: "100%"
  },
  content: {
    width: "100%",
    paddingHorizontal: 15,
    borderTopWidth: 0.5,
    borderTopColor: "#707070",
    backgroundColor: "#fff"
  },
  icons: {
    height: 50,
    width: 75,
    left: -90,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  data: {
    width: "100%",
    marginBottom: 15
  }
});
