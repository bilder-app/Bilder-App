import * as React from "react";
import { storiesOf } from "@storybook/react-native";
import Card from "./";
import { View } from "react-native";
import CenterView from "../CenterView";
import Text from "../Text/Text";

storiesOf("Card", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("horizontal", () => (
    <View style={{ padding: 15, backgroundColor: "gray" }}>
      <Card
        props={{
          price: "$100",
          title: "Martillo de 3/4 pulgadas ",
          medidas: "Largo: 6 metros",
          marca: "hierros Jr",
        }}
      />
    </View>
  ));
