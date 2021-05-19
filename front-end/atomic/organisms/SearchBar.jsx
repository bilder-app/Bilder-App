import React from "react";
import Input from "../../atomic Design/molecules/Input";
import Icon from "../atoms/Icon";
import { View } from "react-native";

const styles = {
  container: {
    width: "100%",
    height: 50,
    alignItems: "center",
    justifyContent: "space-between",
    top: 0,
    backgroundColor: "#E5E5E5",
    flexDirection: "row",
    paddingHorizontal: 15
  }
};

export default function SearchBar({ position, icon, props }) {
  return (
    <View style={styles.container}>
      {position === "right" && (
        <Icon
          icon={icon}
          onPress={() => alert("redirect to home")}
          {...props}
        />
      )}
      <Input
        variant="input"
        style={{ width: "88%" }}
        props={{ placeholder: "Buscar" }}
      />
      {position === "left" && (
        <Icon
          icon={icon}
          onPress={() => alert("redirect to home")}
          {...props}
        />
      )}
    </View>
  );
}
