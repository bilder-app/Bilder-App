import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function OrderProduct({ product, cantidad }) {
  const { name, shortDescription, price, images, cant = cantidad + 2 } = product;


  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: images[0] }} />
      </View>
      <View style={styles.content}>

        <View style={styles.spacing}>
          <Text style={styles.title}>
            {name}
          </Text>
          <Text style={styles.subtitle}>
            Precio{"\n"}Unitario
          </Text>
        </View>

        <View style={styles.spacing}>
          <Text style={styles.mid}>
            {shortDescription}
          </Text>
          <Text style={styles.mid}>
            ${price}
          </Text>
        </View>

        <View style={styles.spacing}>
          <Text style={styles.mid}>
            Cantidad: {cant}
          </Text>
          <Text style={styles.bottom}>
            ${price * cant}
          </Text>
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
    justifyContent: "space-around"
  },

  spacing: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  title: {
    fontSize: 19,
    fontWeight: "bold",
    color: '#404040',
  },
  subtitle: {
    textAlign: 'center',
    color: '#707070',
    fontSize: 12,
  },

  mid: {
    fontSize: 15, 
    color: "#555",
  },
  bottom: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#222'
  },
});
