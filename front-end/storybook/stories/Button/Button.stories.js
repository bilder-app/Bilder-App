import { action } from "@storybook/addon-actions";
import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react-native";
import React from "react";
import { Text } from "react-native";
import Button from ".";
import CenterView from "../CenterView";

storiesOf("Button", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("default", () => (
    <Button onPress={action("continue")} children="Continuar" />
  ))
  .add("medium secondary", () => (
    <Button
      onPress={action("continue")}
      children="Agregar más productos"
      type="medium"
      color="secondary"
    />
  ))
  .add("small success outline", () => (
    <Button
      onPress={action("continue")}
      children="Agregar al carrito"
      type="small"
      color="success"
      outline
    />
  ))
  .add("large danger outline", () => (
    <Button
      onPress={action("continue")}
      children="Eliminar"
      type="large"
      color="danger"
      outline
    />
  ))
  .add("small", () => (
    <Button
      onPress={action("continue")}
      children="Agregar al carrito"
      type="small"
    />
  ));
