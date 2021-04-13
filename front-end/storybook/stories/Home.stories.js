import * as React from "react";
import { storiesOf } from "@storybook/react-native";
import SearchBar from "../../atomic/organisms/SearchBar";


import { faShoppingCart, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import CenterView from "./CenterView";




storiesOf("SearchBar", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("SearcBar Home", () => (
    <SearchBar position='left' icon={faShoppingCart} props={{onPress: () => alert('redirect to Cart'), }}/>
  ))
  .add("SearchBar Search", () => (
    <SearchBar position='right' icon={faAngleLeft}/>
  ))
