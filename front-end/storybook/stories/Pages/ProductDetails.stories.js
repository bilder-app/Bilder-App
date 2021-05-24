import * as React from "react";
import { storiesOf } from "@storybook/react-native";
import ProductDetails from "../../../atomic Design/views/ProductDetails";
import { Provider } from "react-redux";
import configureStore from "../../../store";
import { createStackNavigator } from "@react-navigation/stack";
const store = configureStore();

storiesOf("Product Detail view")
  .addDecorator((getStory) => <Provider store={store}>{getStory()}</Provider>)
  .add("default", () => <ProductDetails />);
