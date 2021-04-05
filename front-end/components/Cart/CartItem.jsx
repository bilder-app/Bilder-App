import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { showModal } from "../../redux/actions/products";
import { useDispatch } from "react-redux";

export default function CartItem({ product }) {
  const auxiliar = {
    name: "Nombre del producto",
    shortDescription: "Descripción del producto",
    price: 999.5,
  };
  const dispatch = useDispatch();

  const { name, shortDescription, price } = product || auxiliar;

  const images = [
    "https://ingcoecuador.com/wp-content/uploads/2020/04/uni.png",
  ];

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: images[0] }} />
      </View>
      <View style={styles.content}>
        <View style={{ width: "100%" }}>
          <Text style={styles.name}>{name}</Text>
        </View>

        <View style={styles.info}>
          <View>
            <Text style={{ fontSize: 15, color: "#707070" }}>
              {shortDescription}
            </Text>
          </View>
        </View>
        <View style={styles.column}>
          <View>
            <Text style={{ fontSize: 12, color: "#707070" }}>
              Precio Unitario
            </Text>
          </View>
          <View>
            <Text style={{ fontSize: 15, color: "#707070" }}>$ 1000</Text>
          </View>
        </View>
        <View style={styles.buttons}>
          <View>
            <TouchableOpacity style={styles.delete}>
              <Text style={{ color: "#E49012", fontSize: 13 }}>Eliminar</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={styles.add}
              onPress={() => dispatch(showModal(product))}
            >
              <Text style={{ color: "#707070", fontSize: 13 }}>14</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={{ fontSize: 23, fontWeight: "bold" }}>${price}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 130,
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingLeft: 15,
    paddingRight: 10,
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 10,
    marginTop: 10,
  },
  imageContainer: {
    height: "87%",
    width: "23%",
    marginRight: 10,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  content: {
    width: "73%",
    height: "87%",
    justifyContent: "space-between",
  },
  name: {
    fontSize: 19,
    fontWeight: "bold",
  },
  info: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  column: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttons: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-around",
    width: "100%",
  },
  delete: {
    paddingHorizontal: 14,
    paddingVertical: 4,
    borderRadius: 15,
    borderColor: "#E49012",
    borderWidth: 0.5,
  },
  add: {
    borderColor: "#707070",
    borderWidth: 1,
    paddingHorizontal: 14,
    paddingVertical: 4,
    borderRadius: 5,
  },
});
