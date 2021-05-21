import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function FavouriteItem({ product }) {
  const { name, shortDescription, price, images } = product;

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
          <View>
            <Text style={{ fontSize: 17, fontWeight: "bold" }}>${price}</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.add}>
          <Text style={{ color: "#fff", fontSize: 13, textAlign: "center" }}>
            Agregar al carrito
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 110,
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingLeft: 15,
    paddingRight: 10,
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 10,
    marginTop: 10
  },
  imageContainer: {
    height: "87%",
    width: "23%",
    marginRight: 10
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain"
  },
  content: {
    width: "73%",
    height: "87%",
    justifyContent: "space-between"
  },
  name: {
    fontSize: 19,
    fontWeight: "bold"
  },
  info: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%"
  },
  delete: {
    paddingHorizontal: 14,
    paddingVertical: 4,
    borderRadius: 15,
    borderColor: "#E49012",
    borderWidth: 0.5
  },
  add: {
    backgroundColor: "#E49012",
    paddingHorizontal: 14,
    paddingVertical: 4,
    borderRadius: 15,
    width: "100%"
  }
});
