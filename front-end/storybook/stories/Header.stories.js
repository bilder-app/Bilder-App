import * as React from "react";
import { storiesOf } from "@storybook/react-native";
import Header from "../../atomic/organisms/Header";

import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import CenterView from "./CenterView";

storiesOf("Header", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("default", () => <Header title={"Pedidos"} icon={faAngleLeft} />);
