import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

import { setTabMenu } from "../../redux/actions/navigation.js";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faHome,
  faMoneyCheckAlt,
  faHeart,
  faTruck,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

function Item({ data, navigation, setTabMenu, tabMenu }) {
  const { name, icon, title } = data;

  return (
    <View style={styles.itemBox}>
      <TouchableOpacity
        onPress={() => {
          setTabMenu(name);
          navigation.navigate(name);
        }}
        disabled={tabMenu === name}
      >
        <FontAwesomeIcon
          icon={icon}
          style={styles.item}
          color={tabMenu === name ? "#E49012" : "#3F3C3C"}
          size={24}
        />
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}

function TabBar({ navigation, setTabMenu, tabMenu }) {
  const items = [
    { name: "Home", icon: faHome, title: "Inicio" },
    { name: "Offers", icon: faMoneyCheckAlt, title: "Ofertas" },
    { name: "Favourites", icon: faHeart, title: "Favoritos" },
    { name: "Order", icon: faTruck, title: "Pedido" },
    { name: "Profile", icon: faUser, title: "Perfil" },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.tabBar}>
        {items.map((item, index) => {
          return (
            <Item
              data={item}
              navigation={navigation}
              setTabMenu={setTabMenu}
              tabMenu={tabMenu}
              key={index}
            />
          );
        })}
      </View>
    </View>
  );
}

function mapStateToProps(state) {
  return {
    tabMenu: state.navigation.tabMenu,
  };
}
export default connect(mapStateToProps, { setTabMenu })(TabBar);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: 50,
    width: "100%",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
  },
  tabBar: {
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    width: "90%",
    height: "100%",
  },
  itemBox: {
    height: "90%",
    width: "15%",
    paddingTop: 3,
  },
  item: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  title: {
    color: "#3F3C3C",
    textAlign: "center",
    fontSize: 10,
  },
});
