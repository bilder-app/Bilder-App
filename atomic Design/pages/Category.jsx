import React, { useState, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

import Image from "../atoms/Image/Image";
import IconContainer from "../atoms/IconContainer/IconContainer";
import Search from "../atoms/Icons/Search";
import Text from "../atoms/Text/Text";
import Chip from "../atoms/Chip/Chip";
import ScrollContainer from "../atoms/ScrollContainer/ScrollContainer";

import { getMyUser } from "../../api";
import BackIcon from "../atoms/Icons/BackIcon";
import Pen from "../atoms/Icons/Pen";

export default function Category({ navigation, children }) {
  const [user, setUser] = useState();
  useEffect(() => {
    getMyUser().then((user) => {
      setUser(user);
      console.log(user);
    });
  }, []);

  return (
    <View>
      <View style={styles.header}>
        <IconContainer onPress={() => navigation.goBack()} style={styles.icon}>
          <BackIcon width="28" height="28" />
        </IconContainer>
        <Text variant="h6" style={{ marginRight: "auto" }}>
          CategoryName
        </Text>
        <IconContainer
          onPress={() => navigation.navigate("Search")}
          style={styles.icon}
        >
          <Search width="20" height="25" />
        </IconContainer>
      </View>
      <View style={styles.default}>
        <View style={styles.subcategories}>
          <ScrollContainer position="horizontal">
            <TouchableOpacity onPress={() => alert("Seleccionado")}>
              <Chip style={styles.chip}>Materiales de Obra</Chip>
            </TouchableOpacity>
            <Chip style={styles.chip}>Aditivos</Chip>
            <Chip style={styles.chip}>Pegamentos</Chip>
          </ScrollContainer>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  default: {
    width: "100%",
    height: "100%",
    paddingHorizontal: 10,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    width: "100%",
    height: 50,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFF",
  },
  icon: {
    width: "11%",
    height: "100%",
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
  },
  chip: {
    marginHorizontal: 5,
    borderColor: "#CCC",
    borderWidth: 0.5,
  },
  subcategories: {
    marginTop: 5,
    marginBottom: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
