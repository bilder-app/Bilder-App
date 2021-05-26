import * as React from "react";
import { storiesOf } from "@storybook/react-native";
import IconContainer from "../../../atomic Design/atoms/IconContainer/IconContainer";
import { View } from "react-native";
import CenterView from "../CenterView";
import Text from "../../../atomic Design/atoms/Text/Text";

storiesOf("IconContainer (a)")
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("default", () => (
    <View>
      <IconContainer onPress={() => console.log("On Press")}>
        <Text variant="h5">icon</Text>
      </IconContainer>
    </View>
  ));
