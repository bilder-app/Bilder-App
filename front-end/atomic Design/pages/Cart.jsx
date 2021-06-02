import React from "react";
import { View, FlatList, StyleSheet } from "react-native";

import Header from "../organisms/Header/Header";
import CardItem from "../organisms/CardItem/CardItem";
import Text from "../../atomic Design/atoms/Text/Text";
import Button from "../../atomic Design/atoms/Button/Button";

 
const random =  Math.floor((Math.random() * 100) + 1)
const items = [
  {
    id: random,
    image: "https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg",
    description: "Muñeco de baby Joda coleccionable",
    price: Math.floor((Math.random() * 1000) + 1),
  },
  {
    id: random + 1,
    image: "https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg",
    description: "Muñeco de baby Joda coleccionable",
    price: Math.floor((Math.random() * 1000) + 1),
  },
  {
    id: random + 2,
    image: "https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg",
    description: "Muñeco de baby Joda coleccionable",
    price: Math.floor((Math.random() * 1000) + 1),
  },
  {
    id: random + 3,
    image: "https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg",
    description: "Muñeco de baby Joda coleccionable",
    price: Math.floor((Math.random() * 1000) + 1),
  },
  {
    id: random + 4,
    image: "https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg",
    description: "Muñeco de baby Joda coleccionable",
    price: Math.floor((Math.random() * 1000) + 1),
  },
  {
    id: random + 5,
    image: "https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg",
    description: "Muñeco de baby Joda coleccionable",
    price: Math.floor((Math.random() * 1000) + 1),
  },
  {
    id: random + 6,
    image: "https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg",
    description: "Muñeco de baby Joda coleccionable",
    price: Math.floor((Math.random() * 1000) + 1),
  },
];

const renderItem = ({ item }) => (
  <View style={{ marginVertical: 5, marginHorizontal: 15 }} key={item.id}>
    <CardItem variant="cart" children={item} onPress={alert}/>
  </View>
);

export default function Cart({ navigation }) {

  return (
    <View style={styles.main}>
      <Header children={{ text: "Mi Carrito" }}/>

      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
 
      <View style={{ paddingHorizontal: 20, backgroundColor: "#FFF" }}>
        <View style={styles.hr}/>
        <View style={styles.content}>
          <Text style={{ color: "#707070" }} variant="subtitle2">Subtotal</Text>
          <Text style={styles.price} variant="h6">$4400</Text>
        </View>
      </View>

      <View style={styles.button}>
        <Button onPress={() => navigation.navigate("Payment")} children="Continuar" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: { 
    height: "100%",
    width: "100%",
  },
  hr: {
    marginVertical: 10,
    borderBottomColor: "#A0A0A0",
    borderBottomWidth: 1.5,
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    paddingVertical: 5,
    backgroundColor: "#FFF",
  },
});

