import { storiesOf } from "@storybook/react-native";
import React from "react";
import { View } from "react-native";
import CardItem from "../../../atomic Design/organisms/CardItem/CardItem.jsx";
import CenterView from "../CenterView";


storiesOf("CardItem", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  /*
  children: {
    id: number,
    image: string,
    description: string,
    price: number,
    units: number (only shippingDetail),
  }
  ----- OR -----
  children: {
    idOrder: number,
    date: date,
    state: string, 
  }
  */
  .add("favourite", () => (
    <CardItem 
      variant="favourite" 
      children={{ 
        id: Math.floor((Math.random() * 100) + 1),
        image: "https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg",
        description: "Muñeco de baby Joda coleccionable",
        price: Math.floor((Math.random() * 1000) + 1),
      }} 
      onPress={console.log}
    />
  ))
  .add("cart", () => (
    <CardItem 
      variant="cart" 
      children={{ 
        id: Math.floor((Math.random() * 100) + 1),
        image: "https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg",
        description: "Muñeco de baby Joda coleccionable",
        price: Math.floor((Math.random() * 1000) + 1),
      }} 
      onPress={console.log}
    />
  ))
  .add("shippingCard", () => (
    <CardItem 
      variant="shippingCard" 
      children={{ 
        idOrder: Math.floor((Math.random() * 100) + 1),
      }} 
      onPress={console.log}
    />
  ))
  .add("shippingDetail", () => (
    <CardItem 
      variant="shippingDetail" 
      children={{ 
        id: Math.floor((Math.random() * 100) + 1),
        image: "https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg",
        description: "Muñeco de baby Joda coleccionable",
        price: Math.floor((Math.random() * 1000) + 1),
        units: Math.floor((Math.random() * 50) + 2),
      }} 
      onPress={console.log}
    />
  ))
  .add("example", () => (
    <View style={{ width: "100%", paddingHorizontal: 20 }}>
      <CardItem 
        variant="favourite" 
        children={{ price: Math.floor((Math.random() * 1000) + 1) }} 
      />
      <CardItem 
        variant="cart" 
        children={{ id: Math.floor((Math.random() * 100) + 1) }} 
      />
      <CardItem 
        variant="shippingCard" 
        children={{ id: Math.floor((Math.random() * 100) + 1) }} 
      />
      <CardItem 
        variant="shippingDetail" 
        children={{ id: Math.floor((Math.random() * 100) + 1) }} 
      />
    </View>
  ))