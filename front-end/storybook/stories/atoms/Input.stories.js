import * as React from "react";
import { storiesOf } from "@storybook/react-native";
import Input from "../../../atomic Design/atoms/Input/Input";
import CenterView from "../CenterView";
import { View } from "react-native";

storiesOf("Input (a)", module)
  .addDecorator((getStory) => (
    <CenterView>
      <View>{getStory()}</View>
    </CenterView>
  ))
  .add("Search", () => <Input variant="input" />)
  .add("Form", () => <Input variant="form" />)
  .add("Amount", () => <Input variant="amount" />);
