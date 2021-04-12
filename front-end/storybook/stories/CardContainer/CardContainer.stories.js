import * as React from "react";
import { storiesOf } from "@storybook/react-native";
import CardContainer from ".";
import { View } from "react-native";
import CenterView from "../CenterView";
import Text from "../Text/Text";

storiesOf("CardContainer", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("vertical", () => (
    <View style={{ padding: 15, backgroundColor: "gray" }}>
      <CardContainer>
        <Text variant="h5">Sample Text</Text>
        <Text variant="h6">Sample Text</Text>
      </CardContainer>
    </View>
  ))
  .add("horizontal", () => (
    <View style={{ padding: 15, backgroundColor: "gray" }}>
      <CardContainer variant="horizontal">
        <Text variant="h5">Sample Text</Text>
        <Text variant="h6">Sample Text</Text>
      </CardContainer>
    </View>
  ));
