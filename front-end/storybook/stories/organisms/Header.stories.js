import * as React from "react";
import { storiesOf } from "@storybook/react-native";
import Header from "../../../atomic Design/organisms/Header/Header";

import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import CenterView from "../CenterView";

storiesOf("Header (o)", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("default", () => <Header title={"Pedidos"} icon={faAngleLeft} />);
