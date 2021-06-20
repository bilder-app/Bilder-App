import * as React from "react";
import { storiesOf } from "@storybook/react-native";
import TabBar from "../../../atomic Design/molecules/TabBar/TabBar";
import CenterView from "../CenterView";

storiesOf("TabBar (m)")
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("TabBar", () => <TabBar />);
