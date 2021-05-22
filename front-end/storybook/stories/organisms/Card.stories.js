import * as React from "react";
import { storiesOf } from "@storybook/react-native";
import ProductCard from "../../../atomic Design/organisms/ProductCard/ProductCard";
import { View } from "react-native";
import CenterView from "../CenterView";

storiesOf("ProductCard (o)", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("example1", () => (
    <View style={{ padding: 15, backgroundColor: "gray" }}>
      <ProductCard
        children={{
          price: "175",
          name: "Martillo de 3/4 pulgadas ",
          contentType: "Metro (m)",
          content: "6",
          brand: "Hierros Jr",
        }}
        onPress={alert}
      />
    </View>
  ))
  .add("example2", () => (
    <View style={{ padding: 15, backgroundColor: "gray" }}>
      <ProductCard
        children={{
          price: "280",
          name: "Bolsa de arena",
          contentType: "Unidad (u)",
          content: "1",
          brand: "Corralón de materiales",
        }}
        onPress={alert}
      />
    </View>
  ));
