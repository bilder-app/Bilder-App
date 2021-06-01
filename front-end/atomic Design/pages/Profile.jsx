import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

import Header from "../organisms/Header/Header";
import TabBar from "../molecules/TabBar/TabBar";
import Image from "../atoms/Image/Image";
import Text from "../atoms/Text/Text";

import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'; 

export default function Profile() {
  const user = {
    photo: "https://grandimageinc.com/wp-content/uploads/2015/09/icon-user-default.png",
    name: "Bilder",
    email: "soyBilder@gmail.com",
  }

  return(
    <View style={styles.default}>
      <Header children={{ text: "Mi cuenta" }} />

      <View style={styles.info}>
        <Image children={user.photo} variant="medium" style={{ borderRadius: 100 }}/>
        <Text variant="h6">{user.name}</Text>
        <Text variant="subtitle1" style={{ color: "#707070" }}>{user.email}</Text>
      </View>

      <View style={styles.menu}>
        <TouchableOpacity style={styles.buttons}>
          <MaterialCommunityIcons name="book-account" size={27} color="#444D52" style={{ left: -2 }}/>
          <Text variante="subtitle1" style={styles.text}>Cerrar sesión</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons}>
          <FontAwesome name="question-circle" size={27} color="#444D52" />
          <Text variante="subtitle1" style={styles.text}> Preguntas frecuentes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons}>
          <FontAwesome name="power-off" size={27} color="#444D52" />
          <Text variante="subtitle1" style={styles.text}> Cerrar sesión</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  default: {
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  info: {
    width: "100%",
    alignItems: "center",
    marginTop: 15,
    marginTop: "5%",
  },
  menu: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "20%",
  },
  buttons: {
    height: 45,
    width: "100%",
    marginVertical: 3,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: "15%",
  },
  text: {
    color: "#444D52",
    paddingLeft: 10,
    fontSize: 19,
  }
})