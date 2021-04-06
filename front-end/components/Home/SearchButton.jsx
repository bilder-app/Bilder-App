import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

import { Badge } from "react-native-paper";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faSearch,
  faShoppingCart,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

import { useNavigation } from "@react-navigation/native";

export default function Search() {
  const { amount } = useSelector((state) => state.productsList);
  console.log(amount);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={{ height: "100%", width: "85%" }}>
          <TouchableOpacity
            style={styles.searchBar}
            activeOpacity={0.95}
            onPress={() => navigation.push("Search")}
          >
            <View style={{ flexDirection: "row" }}>
              <FontAwesomeIcon icon={faSearch} color={"#E49012"} size={15} />
              <Text style={{ color: "#707070", paddingLeft: 10 }}>
                Buscar...
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.itemBox}>
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.push("Cart")}
          >
            <FontAwesomeIcon
              icon={faShoppingCart}
              color={"#E49012"}
              size={25}
            />
            <Badge style={styles.badge}>{amount}</Badge>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.location}>
        <FontAwesomeIcon icon={faMapMarkerAlt} color={"#E49012"} size={16} />
        <Text style={{ color: "#424242", paddingLeft: 10, fontSize: 13 }}>
          Ciudad de Buenos Aires
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 80,
    position: "absolute",
    top: 0,
    paddingHorizontal: 15,
    backgroundColor: "#FFFFFF",
  },
  content: {
    height: 50,
    width: "100%",
    flexDirection: "row",
  },
  searchBar: {
    height: "60%",
    width: "100%",
    marginTop: "auto",
    marginBottom: "auto",
    borderRadius: 20,
    paddingLeft: 10,
    justifyContent: "center",
    backgroundColor: "#F6F6F6",
  },
  itemBox: {
    height: "100%",
    width: "20%",
  },
  badge: {
    position: "absolute",
    top: 5,
    right: 10,
  },
  item: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  location: {
    height: 30,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
  },
});
