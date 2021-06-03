import * as React from "react";
import { View } from "react-native";
import { storiesOf } from "@storybook/react-native";
import CategoryIcon from "../../../atomic Design/molecules/CategoryIcon/CategoryIcon";
import { faPaintRoller } from "@fortawesome/free-solid-svg-icons";
import CenterView from "../CenterView";

storiesOf("CategoryIcon", module)
  .addDecorator((getStory) => (
    <CenterView>
      <View>{getStory()}</View>
    </CenterView>
  ))
  .add("faPaint", () => {
    return(
      <CategoryIcon
        children={{
          icon: faPaintRoller,
          title: "Pinturas"
        }}
        onPress={alert}
      />
    )
  });
