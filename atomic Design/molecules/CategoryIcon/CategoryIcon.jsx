import React, { useState } from "react";
import { View, Pressable } from "react-native";
import Text from "../../../atomic Design/atoms/Text/Text";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

export default function CategoryIcon({ children, onPress, style }) {
  const { icon, title } = children;
  const [shadown, setShadown] = useState(1.2);

  return (
    <Pressable
      activeOpacity={0.8}
      style={[styles.base, style]}
      onPressIn={() => setShadown(0)}
      onPress={onPress}
      onPressOut={() => setShadown(2)}
    >
      <View style={[styles.icon, { elevation: shadown }]}>
        <FontAwesomeIcon icon={icon} color={"#444D52"} size={30} />
      </View>
      <Text variant="caption" style={{ fontSize: 10, textAlign: "center" }}>
        {title}
      </Text>
    </Pressable>
  );
}

const styles = {
  base: {
    width: 65,
    height: 75,
    marginVertical: 5,
    marginHorizontal: 3,
    alignItems: "center",
    justifyContent: "space-between",
  },
  icon: {
    backgroundColor: "white",
    borderRadius: 10,
    width: "90%",
    height: "75%",
    alignItems: "center",
    justifyContent: "center",
  },
};
