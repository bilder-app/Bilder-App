import * as React from "react";
import { storiesOf } from "@storybook/react-native";
import RecentHistory from "../../../atomic Design/molecules/RecentHistory/RecentHistory";
import CenterView from "../CenterView";

storiesOf("Recent Historial (m)")
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("default", () => <RecentHistory />);
