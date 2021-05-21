import * as React from "react";
import { storiesOf } from "@storybook/react-native";
import Image from "../../../atomic Design/atoms/Image/Image.jsx";
import CenterView from "../CenterView";
import { View } from "react-native";

storiesOf("Image atoms", module)
  .addDecorator((getStory) => (
    <CenterView>
      <View>{getStory()}</View>
    </CenterView>
  ))
  .add("mini", () => {
    return (
      <Image
        variant="mini"
        children="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
      />
    );
  })
  .add("small", () => {
    return (
      <Image
        variant="small"
        children="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
      />
    );
  })
  .add("medium styled", () => {
    return (
      <Image
        variant="medium"
        style={{ borderRadius: 170 }}
        children="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
      />
    );
  })
  .add("big", () => {
    return (
      <Image
        variant="big"
        children="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
      />
    );
  })
  .add("custumized", () => {
    return (
      <View style={{ width: 385, height: 385, backgroundColor: "#f00" }}>
        <Image
          variant="max"
          children="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
        />
      </View>
    );
  });
