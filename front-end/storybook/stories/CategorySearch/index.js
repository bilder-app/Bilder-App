import React from "react";
import Text from "../Text/Text";

import SearchBar from "../../../atomic/organisms/SearchBar";
import { View, Image } from "react-native";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

const styles = {
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  content: {
    width: "100%",
    height: "55%",
  },
  boton: {
    marginTop: 5,
    marginLeft: "auto",
    marginRight: "auto",
  },
};

export default function Card() {
  return (
    <View>
      <SearchBar
        position="right"
        icon={faAngleLeft}
        props={{ onPress: () => alert("redirect to Cart") }}
      />
      <Text variant="h6">Pinturas</Text>
    </View>
  );
}
