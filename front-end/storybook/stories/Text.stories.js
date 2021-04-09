import * as React from "react";
import { storiesOf } from "@storybook/react-native";
import Text from "../../atomic/atoms/Text";
import CenterView from "./CenterView";

storiesOf("Text", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("All", () => (
    <>
      <Text variant="h1">h1. Heading</Text>
      <Text variant="h2">h2. Heading</Text>
      <Text variant="h3">h3. Heading</Text>
      <Text variant="h4">h4. Heading</Text>
      <Text variant="h5">h5. Heading</Text>
      <Text variant="h6">h6. Heading</Text>
      <Text variant="subtitle1">subtitle1. Sample Text</Text>
      <Text variant="subtitle2">subtitle2. Sample Text</Text>
      <Text variant="body1">body1. Sample Text</Text>
      <Text variant="body2">body2. Sample Text</Text>
      <Text variant="button">button. Sample Text</Text>
      <Text variant="caption">caption. Sample Text</Text>
    </>
  ))
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
