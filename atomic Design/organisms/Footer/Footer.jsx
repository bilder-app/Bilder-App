import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { useNavigation } from "@react-navigation/native";

export default function Footer({ title, onPress }) {
  // const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <View>
          <Text style={styles.title}>{title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#FFF",
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    backgroundColor: "#FF8000",
    height: "80%",
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20
  },
  title: {
    fontSize: 17,
    color: "#fff",
    fontWeight: "bold"
  }
});
