import React, { useEffect, useState } from "react";
import { View, StyleSheet, TouchableOpacity, StatusBar } from "react-native";

import Header from "../organisms/Header/Header";
import Whatsapp from "../molecules/WhatsappButton/WhatsappButton";
import Image from "../atoms/Image/Image";
import Text from "../atoms/Text/Text";
import { getMyUser, logOut } from "../../api";
import { useQuery } from "react-query";
import { useFocusEffect } from "@react-navigation/native";

import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";


export default function Profile({ navigation }) {
  const {
    data: userData = {},
    isLoading,
    refetch
  } = useQuery("user data", getMyUser);

  useFocusEffect(
    React.useCallback(() => {
      refetch();
      // Do something when the screen is focused
      return () => {
        // Do something when the screen is unfocused
        // Useful for cleanup functions
      };
    }, [])
  );

  return (
    <View style={styles.default}>
      <StatusBar animated={true} backgroundColor="#FF8000" />
      <Header children={{ text: "Mi Perfil " }} />

      <View style={styles.info}>
        <Image
          children={userData.profileImage}
          variant="medium"
          style={{ borderRadius: 100 }}
        />
        <Text variant="h6">
          {isLoading ? "Cargando..." : `${userData.name} ${userData.lastname}`}
        </Text>
        <Text variant="subtitle1" style={{ color: "#707070" }}>
          {isLoading ? "Cargando..." : userData.email}
        </Text>
      </View>

      <View style={styles.menu}>
        <TouchableOpacity style={styles.buttons} onPress={() => navigation.push("About")}>
          <MaterialCommunityIcons
            name="book-account"
            size={27}
            color="#444D52"
            style={{ left: -2 }}
          />
          <Text variante="subtitle1" style={styles.text}>
            Mis datos
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons}>
          <FontAwesome name="question-circle" size={27} color="#444D52" />
          <Text variante="subtitle1" style={styles.text}>
            Preguntas frecuentes
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons} onPress={() => logOut().then(() => navigation.navigate("Login"))}>
          <FontAwesome name="power-off" size={27} color="#444D52" />
          <Text variante="subtitle1" style={styles.text}>
            Cerrar sesión
          </Text>
        </TouchableOpacity>
      </View>
      <Whatsapp />
    </View>
  );
}

const styles = StyleSheet.create({
  default: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    backgroundColor: "#fff"
  },
  info: {
    width: "100%",
    alignItems: "center",
    marginTop: 15,
    marginTop: "5%"
  },
  menu: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "20%"
  },
  buttons: {
    height: 45,
    width: "100%",
    marginVertical: 3,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: "15%"
  },
  text: {
    color: "#444D52",
    paddingLeft: 10,
    fontSize: 19
  }
});
