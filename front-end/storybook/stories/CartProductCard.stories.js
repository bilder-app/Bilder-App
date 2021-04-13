import * as React from "react";
import { storiesOf } from "@storybook/react-native";
import CartProductCard from "../../atomic/organisms/CartProductCard";
import CenterView from "./CenterView";

storiesOf("Cart Product Card")
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("default", () => (
    <CartProductCard
      title={"Listones de Madera"}
      shortDescription={"Medidas de 120 x 240"}
      total={400}
      singlePrice={200}
      inOrder={2}
    />
  ));
