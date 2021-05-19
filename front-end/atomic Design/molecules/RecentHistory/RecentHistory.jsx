import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { faArrowRight, faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

export default function RecentHistory() {
  return (
    <View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          marginBottom: 15
        }}
      >
        <TouchableOpacity
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            flexGrow: 8
          }}
        >
          <View style={{ marginHorizontal: 15 }}>
            <FontAwesomeIcon size={20} icon={faClock} />
          </View>
          <Text>Clavos</Text>
        </TouchableOpacity>
        <View style={{ flexGrow: 1 }}>
          <FontAwesomeIcon icon={faArrowRight} />
        </View>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          marginBottom: 15
        }}
      >
        <TouchableOpacity
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            flexGrow: 8
          }}
        >
          <View style={{ marginHorizontal: 15 }}>
            <FontAwesomeIcon size={20} icon={faClock} />
          </View>
          <Text>Martillo</Text>
        </TouchableOpacity>
        <View style={{ flexGrow: 1 }}>
          <FontAwesomeIcon icon={faArrowRight} />
        </View>
      </View>
    </View>
  );
}
