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

import { getCartItems } from "../redux/actions/products";

function Cart() {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.productsList.cart);

  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  return (
    <View style={styles.container}>
      <Header title={"Carrito"} />
      <View style={{ width: "93%", height: "88%" }}>
        <ScrollView
          style={{ width: "100%" }}
          showsVerticalScrollIndicator={false}
        >
          <View style={{ width: "100%", marginTop: 10, marginBottom: 15 }}>
            {cartData.map((prod) => {
              return <FavouriteItem key={prod.id} product={prod} />;
            })}
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
    alignItems: 'center',
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
