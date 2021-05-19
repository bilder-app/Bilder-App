import * as React from "react";
import { storiesOf } from "@storybook/react-native";
import Text from "./Text";
import { View } from "react-native";
import CenterView from "../CenterView";

storiesOf("Text", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("All", () => (
    <View style={{ padding: 20 }}>
      <Text variant="h1" style={{ color: "#ff8000" }}>
        (h1) $ 1000
      </Text>
      <Text variant="h2" style={{ color: "#ff8000" }}>
        Categorias
      </Text>
      <Text variant="h3" style={{ color: "#444D52" }}>
        Hierro estructural
      </Text>
      <Text variant="h4" style={{ color: "#444D52" }}>
        Latex Interior Albalatex Ultra Lavable Blanco{" "}
      </Text>
      <Text variant="h5" style={{ color: "#707070" }}>
        Látex para Interiores mate de alto desempeño y durabilidad. Gracias a su
        innovadora TECNOLOGÍA ULTRA RESIST, es 3 veces más resistente al lavado,
        antimanchas, repele líquidos y no deja aureola. Fácil de limpiar
      </Text>
      <Text variant="h6" style={{ color: "#ff8000" }}>
        $ 1200
      </Text>
      <Text variant="subtitle1">Continuar </Text>
      <Text variant="subtitle2">subtitle2. Sample Text</Text>
      <Text variant="body1">body1. Sample Text</Text>
      <Text variant="body2">body2. Sample Text</Text>
      <Text variant="button">button. Sample Text</Text>
    </View>
  ))
  .add("h1", () => <Text variant="h1">Sample Text</Text>)
  .add("h2", () => <Text variant="h2">Sample Text</Text>)
  .add("h3", () => <Text variant="h3">Sample Text</Text>)
  .add("h4", () => <Text variant="h4">Sample Text</Text>)
  .add("h5", () => <Text variant="h5">Sample Text</Text>)
  .add("h6", () => <Text variant="h6">Sample Text</Text>)
  .add("subtitle1", () => <Text variant="subtitle1">Sample Text</Text>)
  .add("subtitle2", () => <Text variant="subtitle2">Sample Text</Text>)
  .add("body1", () => <Text variant="body1">Sample Text</Text>)
  .add("body2", () => <Text variant="body2">Sample Text</Text>)
  .add("button", () => <Text variant="button">Sample Text</Text>)
  .add("caption", () => <Text variant="caption">Sample Text</Text>)
  .add("overline", () => <Text variant="h1">Sample Text</Text>);
