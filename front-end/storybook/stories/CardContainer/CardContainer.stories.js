import * as React from "react";
import { storiesOf } from "@storybook/react-native";
import Card from "./CardContainer";
import { View } from "react-native";
import CenterView from "../CenterView";
import Text from "../Text/Text";

storiesOf("Card", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("vertical", () => (
    <View style={{ padding: 15, backgroundColor: "gray" }}>
      <Card>
        <Text variant="h5">Sample Text</Text>
        <Text variant="h6">Sample Text</Text>
      </Card>
    </View>
  ))
  .add("horizontal", () => (
    <View style={{ padding: 15, backgroundColor: "gray" }}>
      <Card variant="horizontal">
        <Text variant="h5">Sample Text</Text>
        <Text variant="h6">Sample Text</Text>
      </Card>
    </View>
  ));
