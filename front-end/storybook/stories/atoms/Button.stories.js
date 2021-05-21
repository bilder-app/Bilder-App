import { storiesOf } from "@storybook/react-native";
import React from "react";
import Button from "../../../atomic Design/atoms/Button/Button";
import CenterView from "../CenterView";

storiesOf("Button atoms", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("default", () => (
    <Button onPress={() => console.log("Agregar")} children="Agregar" />
  ))
  .add("medium styled", () => (
    <Button
      onPress={() => console.log("Iniciar sesión")}
      children="Iniciar sesión"
      size="medium"
      style={{ height: 40 }}
    />
  ))
  .add("small outline styled", () => (
    <Button
      onPress={() => console.log("Producto agregado")}
      children="+"
      size="small"
      style={{ width: 25, borderRadius: 15 }}
      outline
    />
  ))
  .add("small success outline", () => (
    <Button
      onPress={() => console.log("Aceptar")}
      children="Aceptar"
      size="small"
      color="success"
      outline
    />
  ));
