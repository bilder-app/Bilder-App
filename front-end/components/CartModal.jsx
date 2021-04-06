import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet,
} from "react-native";
import Modal from "react-native-modal";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions/products";
import { showMessage } from "react-native-flash-message";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

export default function CartModal({ product, hideModal }) {
  const dispatch = useDispatch();
  const productData = {
    ...product,
    images: ["https://ingcoecuador.com/wp-content/uploads/2020/04/uni.png"],
  };
  const { name, stock, price, images, id } = productData;

  const [input, setInput] = useState({ value: 1 });

  let a = price * input.value || 1400 * input.value,
    subTotal = a > 100000 ? Math.floor(a / 1000) + "," + (a % 1000) / 100 : a;

  const handleAddToCart = () => {
    hideModal();
    dispatch(addToCart(id, input.value));
  };

  return (
    <Modal
      isVisible={true}
      backdropOpacity={0.5}
      backdropTransitionOutTiming={500}
      style={styles.container}
      onBackButtonPress={() => hideModal()}
    >
      <View style={styles.modal}>
        <View style={styles.content}>
          <View style={styles.box}>
            <Text style={styles.title}>{name}</Text>
            <Image source={{ uri: images[0] }} style={styles.image} />
          </View>
          <View style={styles.box}>
            <Text style={styles.title}>Cantidad</Text>
            <View style={styles.cant}>
              <TouchableOpacity
                onPress={() => setInput({ value: input.value - 1 })}
                disabled={input.value === 1}
              >
                <FontAwesomeIcon icon={faMinus} color="#E49012" size={23} />
              </TouchableOpacity>
              <TextInput
                style={styles.input}
                defaultValue={`${input.value}`}
                keyboardType="numeric"
                onChange={({ nativeEvent }) => {
                  const number = parseInt(nativeEvent.text, 10);
                  const conditions = () => {
                    if (number >= stock) return stock;
                    else if (number >= 1) return number;
                    else return 1;
                  };
                  setInput({ value: conditions() });
                }}
              />
              <TouchableOpacity
                onPress={() => setInput({ value: input.value + 1 })}
                disabled={input.value === stock}
              >
                <FontAwesomeIcon icon={faPlus} color="#E49012" size={23} />
              </TouchableOpacity>
            </View>
            <Text
              style={{ color: "#707070", fontSize: 13, fontWeight: "bold" }}
            >
              Stock: {stock}
            </Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.title}>Total</Text>
            <Text style={styles.price}>${subTotal}</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            handleAddToCart()
            showMessage({
              message: `Se ha añadido ${name} al carrito!`,
              type: "success",
              backgroundColor: "#33bd4e", // background color
              color: "#fff", // text color
            });
          }}
          activeOpacity={0.7}
        >
          <Text style={styles.cart}>Agregar al carrito</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    maxHeight: 170,
    width: "100%",
    backgroundColor: "#fff",
    marginLeft: 0,
    marginTop: "auto",
    marginBottom: 0,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modal: {
    width: "100%",
    height: "100%",
    justifyContent: "space-around",
    alignItems: "center",
  },
  content: {
    width: "100%",
    height: "70%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  box: {
    width: "33%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 17,
    fontWeight: "bold",
    textAlign: "center",
  },
  image: {
    width: "95%",
    height: "75%",
    resizeMode: "contain",
    marginTop: "auto",
    marginRight: "auto",
    marginBottom: "auto",
    marginLeft: "auto",
  },
  cant: {
    height: "45%",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    width: 30,
    textAlign: "center",
    fontSize: 15,
  },
  price: {
    color: "#F5943E",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    position: "absolute",
    top: "40%",
  },
  button: {
    backgroundColor: "#E49012",
    width: "100%",
    height: "27%",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  cart: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
  },
});
