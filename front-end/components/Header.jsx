import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useDispatch } from 'react-redux'

import { setTabMenu } from '../redux/actions/navigation.js'

import { useNavigation } from "@react-navigation/native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";


export default function Header({ title, redirectHome, other }) {
  const navigation = useNavigation();
  const dispatch = useDispatch()

  return (
    <View style={styles.header}>
      <TouchableOpacity
        style={styles.itemBox}
        onPress={() => {
          if(redirectHome) {
            dispatch(setTabMenu('Home'));
            navigation.navigate('Home');
          } else {
            navigation.goBack()
          }
        }}
      >
        <FontAwesomeIcon
          icon={faAngleLeft}
          style={styles.item}
          color={"#E49012"}
          size={25}
        />
      </TouchableOpacity>
      <View>
        <Text style={styles.title}>{title}</Text>
      </View>
      {other}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#fff",
    width: "100%",
    height: 50,
    justifyContent: "flex-start",
    alignItems: "center",
    top: 0,
    flexDirection: "row"
  },
  itemBox: {
    // backgroundColor: '#666',
    height: "100%",
    width: "10%",
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 20,
    color: "#3F3C3C",
    fontWeight: "bold"
  }
});
