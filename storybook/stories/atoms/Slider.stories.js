import * as React from "react";
import { View } from "react-native";
import { storiesOf } from "@storybook/react-native";
import Slider from "../../../atomic Design/atoms/Slider/Slider";

import CenterView from "../CenterView";

storiesOf("Slider (a)", module)
  .addDecorator((getStory) => (
    <CenterView>
      <View>{getStory()}</View>
    </CenterView>
  ))

  .add("Slider", () => <Slider />);
