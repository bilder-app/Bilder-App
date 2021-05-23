import { storiesOf } from "@storybook/react-native";
import React from "react";
import Header from "../../../atomic Design/organisms/Header/Header.jsx";
import CenterView from "../CenterView";


storiesOf("Header", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("title", () => (
    <Header 
      children={{ text: "Carrito" }} 
      variant="title" 
    />
  ))
  .add("icons", () => (
    <Header 
      variant="icons" 
      children={{ id: Math.floor((Math.random() * 100) + 1) }} 
      onPress={{
        favouriteAction: alert,
        shareAction: console.log
      }}
    />
  ))
