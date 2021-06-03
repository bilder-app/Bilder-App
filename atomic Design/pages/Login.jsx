import React, { useState } from "react";
import { View, Image, TextInput, StyleSheet } from "react-native";
import Text from "../atoms/Text/Text";
import Button from "../atoms/Button/Button";
const login = require("../../assets/logo.png");
import { logIn } from "../../api";


export default function Login({ navigation }) {
 
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   logIn(getValues()).then(() => history.replace("/orders"));
  // };

  const [values, setValues] = useState({});
  
  const handleSubmit = () => {
    logIn(values).then(() => navigation.replace("MyTabBar"));
  };

  return (
    <View style={styles.container}>
      <Image source={login} style={styles.logo}/>
      <View style={{ width: "75%", justifyContent: "center" }}>
        <Text variant="subtitle1" style={styles.text}>Correo electrónico</Text>
        <TextInput 
          style={styles.input} 
          placeholder="ejemplo@email.com"
          onChangeText={(val) => setValues({...values, email: val })}
          value={values.email}
        />

        <Text variant="subtitle1" style={styles.text}>Contraseña</Text>
        <TextInput
          style={styles.input} 
          placeholder="8 carácteres"
          onChange={({ nativeEvent }) => setValues({...values, password: nativeEvent.text })}
          value={values.password}
        />
      </View>
      <Button children="Iniciar sesión" style={styles.button} onPress={handleSubmit}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    height: "100%",
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  logo: {
    width: 230,
    height: 115,
    resizeMode: "contain",
    marginBottom: 30,
  },
  text: {
    marginBottom: 10, 
    fontWeight: "bold", 
    color: "#444D56"
  },
  input: {
    width: "100%",
    height: 40,
    backgroundColor: "#FAFAFA",
    borderRadius: 15,
    paddingHorizontal: 15,
    marginBottom: 25,
  },
  button: {
    width: "75%", 
    height: 40,
    marginTop: 30,
  }
})