import * as React from "react";
import { storiesOf } from "@storybook/react-native";
import CenterView from "../CenterView";
import ProductSlider from "../../../atomic Design/organisms/ProductSlider/ProductSlider.jsx";

storiesOf("ProductSlider", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("default", () => (
    <ProductSlider/>
  ));
