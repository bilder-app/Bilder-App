import React, { useEffect } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity
} from "react-native";
import { useDispatch, useSelector } from "react-redux";

import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import FavouriteItem from "../components/Favourites/FavouriteItem.jsx";
import HorizontalItemSkeleton from "../components/HorizontalItemSkeleton";

import { getCartItems, clearCartItems } from "../redux/actions/products";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

function Cart() {
  const dispatch = useDispatch();
  const { cart: cartData, isFetchingCartItems } = useSelector(
    (state) => state.productsList
  );

  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  return (
    <View style={styles.container}>
      <Header
        title={"Carrito"}
        other={
          <TouchableOpacity
            onPress={() => dispatch(clearCartItems())}
            style={{ marginLeft: "auto", marginRight: 15 }}
          >
            <FontAwesomeIcon icon={faTrash} color={"#707070"} size={20} />
          </TouchableOpacity>
        }
      />
      <View style={{ width: "93%", height: "88%" }}>
        <ScrollView
          style={{ width: "100%" }}
          showsVerticalScrollIndicator={false}
        >
          <View style={{ width: "100%", marginTop: 10, marginBottom: 15 }}>
            {cartData && Array.isArray(cartData) && !isFetchingCartItems
              ? cartData.map((prod) => {
                  return <FavouriteItem key={prod.id} product={prod} />;
                })
              : [1, 2, 3, 4].map((i) => <HorizontalItemSkeleton key={i} />)}
          </View>
          <View style={styles.content}>
            <View style={styles.text}>
              <Text style={{ fontSize: 15 }}>Subtotal</Text>
              <Text style={{ fontSize: 22, fontWeight: "bold" }}>$ 9000</Text>
            </View>
            <View style={{ width: "100%", alignItems: "center" }}>
              <TouchableOpacity style={styles.button}>
                <Text style={{ fontSize: 16, color: "#fff" }}>
                  Agregar más productos
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>

      <Footer title={"Continuar"} />
    </View>
  );
}

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  content: {
    width: "100%",
    height: 100,
    paddingHorizontal: 15,
    justifyContent: "space-around"
  },
  text: {
    width: "100%",
    borderTopColor: "#707070",
    borderTopWidth: 0.8,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row"
  },
  button: {
    width: "85%",
    height: 35,
    borderRadius: 20,
    backgroundColor: "#707070",
    alignItems: "center",
    justifyContent: "center"
  }
});
