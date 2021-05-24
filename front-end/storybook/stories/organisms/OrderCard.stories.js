import * as React from "react";
import { storiesOf } from "@storybook/react-native";
import OrderCard from "../../../atomic Design/organisms/OrderCard/OrderCard";
import CenterView from "../CenterView";

storiesOf("Order Card (o)")
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("default", () => (
    <OrderCard
      orderNumber={"0003"}
      date={"Abril 5, 2020 - 19:32"}
      status={"En preparación"}
    />
  ));
