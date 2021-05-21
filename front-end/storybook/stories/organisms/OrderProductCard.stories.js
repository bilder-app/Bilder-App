import * as React from "react";
import { storiesOf } from "@storybook/react-native";
import OrderProductCard from "../../../atomic Design/organisms/OrderProductCard/OrderProductCard";
import CenterView from "../CenterView";

storiesOf("Order Product Card")
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("default", () => (
    <OrderProductCard
      title={"Listones de Madera"}
      shortDescription={"Medidas de 120 x 240"}
      total={400}
      singlePrice={200}
      inOrder={2}
    />
  ));
