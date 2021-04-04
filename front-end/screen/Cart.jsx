import React, { useEffect, useState } from "react";
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
import Modal from "react-native-modal";

import { getCartItems, clearCartItems } from "../redux/actions/products";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

function Cart() {
  const dispatch = useDispatch();
  const { cart: cartData, isFetchingCartItems } = useSelector(
    (state) => state.productsList
  );

  const [isConfirmationModalOpen, setisConfirmationModalOpen] = useState(false);

  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  const handleConfirmClearCart = () => {
    dispatch(clearCartItems());
    setisConfirmationModalOpen(false);
  };

  return (
    <>
      <View style={styles.container}>
        <Header
          title={"Carrito"}
          other={
            <TouchableOpacity
              onPress={() => setisConfirmationModalOpen(true)}
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

      <Modal
        isVisible={isConfirmationModalOpen}
        backdropOpacity={0.5}
        onBackdropPress={() => setisConfirmationModalOpen(false)}
        backdropTransitionOutTiming={500}
        style={styles.modalContainer}
        onBackButtonPress={() => hideModal()}
      >
        <Text style={styles.modalText}>
          Esta seguro de que quiere vaciar su carrito?
        </Text>
        <View style={styles.modalButtons}>
          <TouchableOpacity
            onPress={() => setisConfirmationModalOpen(false)}
            style={styles.cancelModalButton}
          >
            <Text style={{ fontSize: 16, color: "#fff" }}>Cancelar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleConfirmClearCart}
            style={styles.confirmModalButton}
          >
            <Text style={{ fontSize: 16, color: "#fff" }}>Vaciar</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </>
  );
}

export default Cart;

const styles = StyleSheet.create({
  confirmModalButton: {
    width: "85%",
    height: 35,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "auto",
    marginRight: "auto"
  },
  modalText: {
    textAlign: "center",
    marginBottom: 10
  },
  modalButtons: {
    display: "flex",
    flexDirection: "row"
  },
  confirmModalButton: {
    backgroundColor: "#E49012",
    width: "45%",
    height: 35,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "auto",
    marginRight: "auto"
  },
  cancelModalButton: {
    backgroundColor: "red",
    width: "45%",
    height: 35,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "auto",
    marginRight: "auto"
  },
  modalContainer: {
    maxHeight: 115,
    width: "90%",
    backgroundColor: "#fff",
    marginTop: "auto",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "auto",
    paddingHorizontal: 15,
    borderRadius: 20,
    display: "flex"
  },
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
