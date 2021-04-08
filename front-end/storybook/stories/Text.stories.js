import * as React from "react";
import { storiesOf } from "@storybook/react-native";
import Text from "../../atomic/atoms/Text";
import CenterView from "./CenterView";

storiesOf("Text", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("h1", () => <Text variant="h1">Sample Text</Text>)
  .add("h2", () => <Text variant="h2">Sample Text</Text>)
  .add("h3", () => <Text variant="h3">Sample Text</Text>)
  .add("h4", () => <Text variant="h4">Sample Text</Text>)
  .add("h5", () => <Text variant="h5">Sample Text</Text>)
  .add("h6", () => <Text variant="h6">Sample Text</Text>)
  .add("subtitle1", () => <Text variant="subtitle1">Sample Text</Text>)
  .add("subtitle2", () => <Text variant="subtitle2">Sample Text</Text>)
  .add("body1", () => <Text variant="body1">Sample Text</Text>)
  .add("body2", () => <Text variant="body2">Sample Text</Text>)
  .add("button", () => <Text variant="button">Sample Text</Text>)
  .add("caption", () => <Text variant="caption">Sample Text</Text>)
  .add("overline", () => <Text variant="h1">Sample Text</Text>);
