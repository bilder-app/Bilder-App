import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  StyleSheet
} from "react-native";

function Start({ navigation }) {
  return (
    <View style={styles.main}>
      <StatusBar
        translucent={false}
        backgroundColor="#E49012"
        barStyle="dark-content"
      />
      <Text style={styles.title}>Bienvenido a{"\n"}Builder</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Text style={styles.button}>Persona</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{ ...styles.button, ...styles.buttonRight }}>
            Negocio
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    backgroundColor: "#E49012"
  },
  title: {
    fontSize: 45,
    textAlign: "center",
    marginBottom: 150,
    marginTop: 100,
    color: "white",
    fontWeight: "700",
    letterSpacing: 1.25
  },
  buttonsContainer: {
    display: "flex",
    flexDirection: "row"
  },
  button: {
    fontSize: 30,
    color: "#E49012",
    padding: 10,
    paddingHorizontal: 25,
    backgroundColor: "white",
    borderRadius: 13
  },
  buttonRight: {
    marginLeft: 20,
    marginRight: 20
  }
});

export default Start;
