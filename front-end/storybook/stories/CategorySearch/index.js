import React from "react";
import Text from "../../../atomic Design/atoms/Text/Text.jsx";
import SearchBar from "../../../atomic Design/molecules/SearchBar/SearchBar";
import ScrollContainer from "../../../atomic Design/atoms/ScrollContainer/ScrollContainer.jsx";
import { View } from "react-native";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import SearchCard from "../SearchCard/index";

const styles = {
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain"
  },
  content: {
    width: "100%",
    height: "55%"
  },
  boton: {
    marginTop: 5,
    marginLeft: "auto",
    marginRight: "auto"
  }
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
      <ScrollContainer>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => {
          return (
            <View
              style={{
                borderRadius: 20,
                height: 120,
                width: "100%",
                backgroundColor: "white",
                marginVertical: 10
              }}
              key={item}
            >
              <SearchCard
                shortDescription={"Medidas de 120 x 240"}
                title={"Listones de Madera"}
                price={"200$"}
              />
            </View>
          );
        })}
      </ScrollContainer>
    </View>
  );
}
