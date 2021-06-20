import * as React from "react";
import { View } from "react-native";
import { storiesOf } from "@storybook/react-native";
import ModalCart from "../../../atomic Design/molecules/ModalCart/ModalCart";

import CenterView from "../CenterView";

storiesOf("ModalCart", module)
  .addDecorator((getStory) => (
    <CenterView>
      <View>{getStory()}</View>
    </CenterView>
  ))

  .add("default", () => <ModalCart children={3} onPress={alert} />);
