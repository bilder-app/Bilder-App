import React, { useState, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

import IconContainer from "../atoms/IconContainer/IconContainer";
import Search from "../atoms/Icons/Search";
import Text from "../atoms/Text/Text";
import Chip from "../atoms/Chip/Chip";
import ScrollContainer from "../atoms/ScrollContainer/ScrollContainer";
import Button from "../atoms/Button/Button";

import { 
  getMyUser, 
  getSubcategories, 
  getProductsByCategory,
  getProductsBySubcategory,
} from "../../api";
import BackIcon from "../atoms/Icons/BackIcon";
import Pen from "../atoms/Icons/Pen";


export default function Category({ navigation, route }) {
  const { name, title } = route.params;
  // name --> used to make request
  // title --> must show to users
  const [subcategories, setSubcategories] = useState([])
  const [focus, setFocus] = useState(title)
  const [products, setProducts] = useState([])

  useEffect(() => {
    getSubcategories(title).then((resp) => setSubcategories(resp))
    getProductsByCategory(title).then((resp) => setProducts(resp))
  }, []);
  
  return (
    <View>
      <View style={styles.header}>
        <IconContainer onPress={() => navigation.goBack()} style={styles.icon}>
          <BackIcon width="28" height="28" />
        </IconContainer>
        <Text variant="h6" style={{ marginRight: "auto" }}>
          {title}
        </Text>
        <IconContainer
          onPress={() => navigation.push("Search")}
          style={styles.icon}
        >
          <Search width="20" height="25" />
        </IconContainer>
      </View>

      <View style={styles.default}>
        <View style={styles.subcategories}>
          <ScrollContainer position="horizontal">
            <TouchableOpacity 
              onPress={() => {
                setFocus(title);
                getProductsByCategory(title).then((resp) => setProducts(resp))
              }} 
              disabled={focus === title}
            >
              <Chip style={styles.chip}>Todos</Chip>
            </TouchableOpacity>
            {subcategories.length ?
              subcategories.map(({ name }, i) => {
                return(
                  <TouchableOpacity 
                    onPress={() => {
                      setFocus(name);
                      getProductsBySubcategory(name).then((resp) => setProducts(resp))
                    }} 
                    disabled={focus === name}
                    key={i}
                  >
                    <Chip style={styles.chip} children={name}/>
                  </TouchableOpacity>
                )
              })
              : null
            }
          </ScrollContainer>
        </View>
        {products.length > 0
          ? products.map((product, i) => {
            return(
              <Text key={i}>{product.name}</Text>
            )
          })
          : <Text>Cargando...</Text>
        }
      </View>

      <View style={styles.button}>
        <Button
          onPress={() => navigation.navigate("Cart")}
          children="Ir al Carrito"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  default: {
    width: "100%",
    height: "87.6%",
    paddingHorizontal: 10,
    alignItems: "center",
    backgroundColor: "white",
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
  chip: {
    marginHorizontal: 5,
    borderColor: "#CCC",
    borderWidth: 0.5,
  },
  subcategories: {
    marginTop: 5,
    marginBottom: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 50,
    backgroundColor: "white",
  },
});
