import * as React from "react";
import { storiesOf } from "@storybook/react-native";
import Home from "../../../atomic/screen/Home";
import { View } from "react-native";
import CenterView from "../CenterView";

storiesOf("Test atoms", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("All", () => (
    <View style={{ padding: 20 }}>
      <Home />
    </View>
  ));
