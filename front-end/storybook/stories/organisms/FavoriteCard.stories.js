import * as React from "react";
import { storiesOf } from "@storybook/react-native";
import FavoriteCard from "../../../atomic Design/organisms/FavouriteCard/FavoriteCard";
import CenterView from "../CenterView";

storiesOf("FavoriteCard (o)")
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("default", () => (
    <FavoriteCard
      shortDescription={"Medidas de 120 x 240"}
      title={"Listones de Madera"}
      price={"200$"}
    />
  ));
