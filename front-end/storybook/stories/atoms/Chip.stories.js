import * as React from "react";
import { storiesOf } from "@storybook/react-native";
import Chip from "../../../atomic Design/atoms/Chip/Chip.jsx";
import CenterView from "../CenterView";
import { View } from "react-native";

storiesOf("Chip atoms", module)
  .addDecorator((getStory) => (
    <CenterView>
      <View>{getStory()}</View>
    </CenterView>
  ))
  .add("Chip", () => <Chip children="Pinturas" />);
