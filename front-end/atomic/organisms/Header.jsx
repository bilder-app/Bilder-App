import React from "react";
import Text from "../../storybook/stories/Text/Text";
import Icon from "../atoms/Icon";
import { View } from "react-native";

const styles = {
  container: {
    width: "100%",
    height: 50,
    alignItems: "center",
    top: 0,
    backgroundColor: "#fff",
    flexDirection: "row",
    paddingHorizontal: 15
  }
};

export default function Header({ icon, title, style }) {
  return (
    <View style={{ ...styles.container, ...style }}>
      {icon && <Icon icon={icon} onPress={() => alert("redirect to home")} />}
      <Text variant="h6">{title}</Text>
    </View>
  );
}
