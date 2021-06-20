import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import Image from "../atoms/Image/Image";
import IconContainer from "../atoms/IconContainer/IconContainer";
import Text from "../atoms/Text/Text";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faAngleLeft, faPen, faCheck } from "@fortawesome/free-solid-svg-icons";

import { getMyUser, updateMyUser } from "../../api";
import { useQuery } from "react-query";
import { useFocusEffect } from "@react-navigation/native";
import BackIcon from "../atoms/Icons/BackIcon";

// import * as ImagePicker from 'expo-image-picker';

export default function About({ navigation }) {
  const {
    data: user = {},
    isLoading,
    refetch,
  } = useQuery("user data", getMyUser);

  const [editable, setEditable] = useState(false);
  const [profile, editProfile] = useState(user);

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

  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // let result = await ImagePicker.launchImageLibraryAsync({
    //   mediaTypes: ImagePicker.MediaTypeOptions.All,
    //   allowsEditing: true,
    //   aspect: [1, 1],
    //   quality: 1,
    // });

    // if (!result.cancelled) {
    //   setImage(result.uri);
    //   console.log(result.uri)
    // }

    console.log("Connect missing");
  };

  const handleChange = (e, name) => {
    const { text } = e.nativeEvent;
    console.log(text, name);
    editProfile({
      ...profile,
      [name]: name === "dni" ? parseInt(text, 10) : text,
    });
  };

  return (
    <View style={styles.default} behavior="padding">
      <View style={styles.header}>
        <IconContainer onPress={() => navigation.goBack()} style={styles.icon}>
          <BackIcon width="28" height="28" />
        </IconContainer>
        <Text variant="h6" style={{ marginRight: "auto" }}>
          Mis datos
        </Text>
        <IconContainer
          onPress={() => {
            setEditable(!editable);
            editable && updateMyUser(profile).then(() => refetch());
          }}
          style={styles.icon}
        >
          <FontAwesomeIcon
            icon={editable ? faCheck : faPen}
            color="#444D52"
            size={20}
          />
        </IconContainer>
      </View>

      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <View style={{ height: "30%" }}>
          <Image
            children={image || user.profileImage}
            variant="medium"
            style={{ borderRadius: 100 }}
          />
        </View>
        {/* <TouchableOpacity onPress={pickImage} >
          <Text variante="subtitle1">Subir imagen</Text>
        </TouchableOpacity> */}

        {user && !editable ? (
          <View style={styles.content}>
            <Text style={styles.label}>Nombre completo</Text>
            <Text variante="subtitle1" style={styles.data}>
              {user.name + " " + user.lastname}
            </Text>

            <Text style={styles.label}>Correo electrónico</Text>
            <Text variante="subtitle1" style={styles.data}>
              {user.email}
            </Text>

            <Text style={styles.label}>Teléfono</Text>
            <Text variante="subtitle1" style={styles.data}>
              {user.contactNumber}
            </Text>

            <Text style={styles.label}>Dirección</Text>
            <Text variante="subtitle1" style={styles.data}>
              {user.address}
            </Text>

            <Text style={styles.label}>N° de documento</Text>
            <Text variante="subtitle1" style={styles.data}>
              {user.dni}
            </Text>
          </View>
        ) : (
          <View style={styles.content}>
            <Text style={styles.label}>Nombre</Text>
            <TextInput
              defaultValue={user.name}
              autoCapitalize="sentence"
              onChange={(e) => handleChange(e, "name")}
              style={styles.input}
            />

            <Text style={styles.label}>Apellido</Text>
            <TextInput
              defaultValue={user.lastname}
              autoCapitalize="sentence"
              onChange={(e) => handleChange(e, "lastname")}
              style={styles.input}
            />

            <Text style={styles.label}>Correo electrónico</Text>
            <TextInput
              defaultValue={user.email}
              onChange={(e) => handleChange(e, "email")}
              style={styles.input}
            />

            <Text style={styles.label}>Telefono</Text>
            <TextInput
              defaultValue={user.contactNumber}
              onChange={(e) => handleChange(e, "contactNumber")}
              style={styles.input}
              maxLength={14}
              keyboardType="numeric"
            />

            <Text style={styles.label}>Dirección</Text>
            <TextInput
              defaultValue={user.address}
              onChange={(e) => handleChange(e, "address")}
              style={styles.input}
            />

            <Text style={styles.label}>N° de documento</Text>
            <TextInput
              defaultValue={user.dni.toString()}
              maxLength={8}
              onChange={(e) => handleChange(e, "dni")}
              keyboardType="numeric"
              style={styles.input}
            />
          </View>
        )}
      </KeyboardAwareScrollView>
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
    marginBottom: 20,
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
  input: {
    lineHeight: 33,
    fontSize: 19,
    color: "#444",
    fontWeight: "bold",
    borderBottomWidth: 1.5,
    borderBottomColor: "#666",
  },
});
