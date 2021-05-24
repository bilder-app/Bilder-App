import * as React from "react";
import { storiesOf } from "@storybook/react-native";
import SearchBar from "../../../atomic Design/organisms/SearchBar/SearchBar";

storiesOf("SearchBar")
  .add("alert", () => {
    return (
      <SearchBar 
        onPress={alert}
      />
    )
  });
