import * as React from "react";
import { storiesOf } from "@storybook/react-native";
import CategoryContainer from "./";
import { View } from "react-native";
import CenterView from "../CenterView";
import Text from "../Text/Text";

storiesOf("CategoryContainer", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("default", () => (
    <View>
      <CategoryContainer onPress={() => console.log("On Press")}>
        <Text variant="h5">icon</Text>
      </CategoryContainer>
    </View>
  ));
