import * as React from "react";
import { storiesOf } from "@storybook/react-native";
import Input from ".";
import CenterView from "../CenterView";
import { View } from "react-native";

storiesOf("Input", module)
  .addDecorator((getStory) => (
    <CenterView>
      <View style={{ backgroundColor: "black", padding: 5, width: "100%" }}>
        {getStory()}
      </View>
    </CenterView>
  ))
  .add("Search", () => <Input variant="input" />)
  .add("Form", () => <Input variant="form" />)
  .add("Amount", () => <Input variant="amount" />);
