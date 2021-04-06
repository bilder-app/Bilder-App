import React from "react";
import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";

import { unshiftHistory } from "../redux/actions/products.js";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigation } from "@react-navigation/native";

export default function SearchBar({ searchQuery, setSearchQuery }) {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const unshiftHistoryDispatched = (input) => dispatch(unshiftHistory(input));

  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.goBack()}
        >
          <FontAwesomeIcon icon={faAngleLeft} color={"#E49012"} size={25} />
        </TouchableOpacity>
      </View>
      <View style={{ width: "85%", height: "100%", justifyContent: "center" }}>
        <TextInput
          style={styles.input}
          autoFocus={true}
          value={searchQuery}
          placeholder={"Buscar..."}
          onChange={(e) => setSearchQuery(e.nativeEvent.text)}
          onSubmitEditing={({ nativeEvent }) => {
            unshiftHistoryDispatched(nativeEvent.text);
            navigation.push("Results", nativeEvent.text);
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: "100%",
    backgroundColor: "#fff",
    flexDirection: "row",
    paddingHorizontal: 15
  },
  button: {
    width: "10%",
    height: "100%",
    justifyContent: "center",
    alignItems: "flex-start"
  },
  input: {
    backgroundColor: "#F6F6F6",
    height: "60%",
    borderRadius: 15,
    paddingLeft: 15
  }
});
