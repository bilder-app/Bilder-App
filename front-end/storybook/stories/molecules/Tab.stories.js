import * as React from "react";
import { useState } from "react";
import { View } from "react-native";
import { storiesOf } from "@storybook/react-native";
import Tab from "../../../atomic Design/molecules/Tab/Tab";
import CenterView from "../CenterView";

const Tabs = () => {
  const [selected, setSelected] = useState(0);

  return (
    <View style={{ display: "flex", flexDirection: "row" }}>
      <Tab onPress={() => setSelected(0)} selected={selected === 0}>
        Pendientes
      </Tab>
      <Tab onPress={() => setSelected(1)} selected={selected === 1}>
        Completados
      </Tab>
      <Tab onPress={() => setSelected(2)} selected={selected === 2}>
        Cancelados
      </Tab>
    </View>
  );
};

storiesOf("Tab (m)", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("Tab", () => <Tabs />);
