import * as React from "react";
import { storiesOf } from "@storybook/react-native";
import SearchCard from "./index";
import CenterView from "../CenterView";

storiesOf("SearchCard")
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("default", () => (
    <SearchCard
      shortDescription={"Medidas de 120 x 240"}
      title={"Listones de Madera"}
      price={"200$"}
    />
  ));
