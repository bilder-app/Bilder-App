import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function FavouriteItem() {
  const url =
    "http://d3ugyf2ht6aenh.cloudfront.net/stores/275/838/products/recuplast_amarillo_fibrado11-89ccd7611873fbc37416031322367954-640-0.jpg";

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: url }} />
      </View>
      <View style={styles.content}>
        <View style={{ width: "100%" }}>
          <Text style={styles.name}>Nombre del producto</Text>
        </View>
        <View style={styles.info}>
          <View>
            <Text style={{ fontSize: 15, color: "#707070" }}>
              Descripción del producto
            </Text>
          </View>
          <View>
            <Text style={{ fontSize: 17, fontWeight: "bold" }}>$999.50</Text>
          </View>
        </View>

        <View style={styles.buttons}>
          <TouchableOpacity style={styles.delete}>
            <Text style={{ color: "#E49012", fontSize: 13 }}>Eliminar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.add}>
            <Text style={{ color: "#fff", fontSize: 13 }}>
              Agregar al carrito
            </Text>
          </TouchableOpacity>
        </View>
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
    borderRadius: 15
  }
});
