import React from "react";
import { View, TouchableOpacity, Pressable } from "react-native";
import Text from "../../atoms/Text/Text";
import { faArrowRight, faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

export default function RecentHistoryItem({
  content,
  onTextClick,
  onRedirectPress
}) {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        backgroundColor: "#fff"
      }}
    >
      <TouchableOpacity
        onPress={onTextClick}
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          flexGrow: 8,
          paddingVertical: 12
        }}
      >
        <View style={{ marginHorizontal: 15 }}>
          <FontAwesomeIcon size={20} icon={faClock} />
        </View>
        <Text>{content}</Text>
      </TouchableOpacity>
      <Pressable
        onPress={onRedirectPress}
        style={{
          flexGrow: 2,
          paddingVertical: 12,
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <FontAwesomeIcon icon={faArrowRight} />
      </Pressable>
    </View>
  );
}
