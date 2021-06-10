import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";

import Image from "../atoms/Image/Image";
import IconContainer from "../atoms/IconContainer/IconContainer";
import Text from "../atoms/Text/Text";

import { getMyUser } from "../../api";
import BackIcon from "../atoms/Icons/BackIcon";
import Pen from "../atoms/Icons/Pen";

export default function About({ navigation }) {
  const url =
    "https://grandimageinc.com/wp-content/uploads/2015/09/icon-user-default.png";
  const [user, setUser] = useState();
  useEffect(() => {
    getMyUser().then((user) => {
      setUser(user);
    });
  }, []);

  return (
    <View style={styles.default}>
      <View style={styles.header}>
        <IconContainer onPress={() => navigation.goBack()} style={styles.icon}>
          <BackIcon width="28" height="28" />
        </IconContainer>
        <Text variant="h6" style={{ marginRight: "auto" }}>
          Mis datos
        </Text>
        <IconContainer
          onPress={() => alert("redirect to edit view")}
          style={styles.icon}
        >
          <Pen width="24" height="24" />
        </IconContainer>
      </View>
      <View style={{ height: "23%" }}>
        <Image children={url} variant="medium" style={{ borderRadius: 100 }} />
      </View>

      <View style={styles.content}>
        {/* <View style={styles.subtitle}>
          <MaterialCommunityIcons
            name="book-account"
            size={27}
            color="#444D52"
            style={{ left: -2 }}
          />
          <Text variante="subtitle1" style={{ fontSize: 18, color: "#444D52" }}>
            Sobre mi
          </Text>
        </View> */}

        <Text style={styles.label}>Nombre completo</Text>
        <Text variante="subtitle1" style={styles.data}>
          {user && user.name + " " + user.lastname}
        </Text>

        <Text style={styles.label}>Correo electrónico</Text>
        <Text variante="subtitle1" style={styles.data}>
          {user && user.email}
        </Text>

        <Text style={styles.label}>Teléfono</Text>
        <Text variante="subtitle1" style={styles.data}>
          {user && "+54 9 11 2021-2021"}
        </Text>

        <Text style={styles.label}>Dirección</Text>
        <Text variante="subtitle1" style={styles.data}>
          {user && user.address}
        </Text>

        <Text style={styles.label}>N° de documento</Text>
        <Text variante="subtitle1" style={styles.data}>
          {user && user.dni}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  default: {
    flex: 1,
    backgroundColor: "#FFF",
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

  content: {
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "10%",
  },
  subtitle: {
    flexDirection: "row",
    height: 35,
    alignItems: "center",
    marginBottom: 5,
  },
  label: {
    marginTop: 20,
    color: "#444",
    fontSize: 13,
  },
  data: {
    lineHeight: 33,
    fontSize: 19,
    color: "#000",
    fontWeight: "bold",
    borderBottomWidth: 1.5,
    borderBottomColor: "#EDEDED",
    marginBottom: 0,
  },
});
