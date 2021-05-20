import * as React from "react";
import { storiesOf } from "@storybook/react-native";
import CategorySearch from "./";
import { View } from "react-native";
import CenterView from "../CenterView";
import Text from "../../../atomic Design/atoms/Text/Text.jsx";

storiesOf("CategorySearch", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("default", () => (
    <View style={{ backgroundColor: "gray" }}>
      <CategorySearch />
    </View>
  ));
