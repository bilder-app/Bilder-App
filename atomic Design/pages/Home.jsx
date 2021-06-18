import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  View,
  ScrollView,
  StyleSheet,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  Image,
  Pressable
} from "react-native";

import ProductSlider from "../organisms/ProductSlider/ProductSlider";
import CategoryIcon from "../molecules/CategoryIcon/CategoryIcon";
import Slider from "../atoms/Slider/Slider";
import Text from "../atoms/Text/Text";
import Cart from "../atoms/Icons/Cart.jsx";
import Search from "../atoms/Icons/Search";

import {
  faPaintRoller,
  faBorderAll,
  faBolt,
  faFaucet,
  faWrench,
  faTools,
  faStream,
  faSink,
  faPencilRuler,
  faClone
} from "@fortawesome/free-solid-svg-icons";

import { getProducts, getAllCartProducts, getMyUser } from "../../api";
import { useFocusEffect } from "@react-navigation/core";
import { useQueryClient } from "react-query";
import { CART_ITEMS_KEY } from "../../hooks/reactQueryKeys";

const logo = require("../../assets/bilderapp.png");
const images = [
  require("../../assets/img/1.png"),
  require("../../assets/img/2.png"),
  require("../../assets/img/3.png"),
  require("../../assets/img/4.png"),
  require("../../assets/img/5.png")
];

const pintura = require("../../assets/Categorias/Pintura.png"),
  electricidad = require("../../assets/Categorias/Electricidad.png"),
  griferia = require("../../assets/Categorias/Griferia.png"),
  herramientas = require("../../assets/Categorias/Herramientas.png"),
  maderas = require("../../assets/Categorias/Maderas.png"),
  pared = require("../../assets/Categorias/Pared.png"),
  plomeria = require("../../assets/Categorias/Plomeria.png"),
  hierros = require("../../assets/Categorias/Hierros.png");

const { height } = Dimensions.get("window");

const items = [
  { image: pintura, title: "Pinturas" },
  { image: electricidad, title: "Electricidad" },
  { image: griferia, title: "Grifería" },
  { image: herramientas, title: "Herramientas" },
  { image: maderas, title: "Maderas" },
  { image: pared, title: "Construcción" },
  { image: plomeria, title: "Plomería" },
  { image: hierros, title: "Hierros" }
];

function Home({ navigation }) {
  const queryClient = useQueryClient();
  const [productsData, setProductsData] = useState();

  useEffect(() => {
    getProducts().then((resp) => setProductsData(resp.data));
  }, []);

  const [user, setUser] = useState();
  useEffect(() => {
    getMyUser().then((user) => {
      setUser(user);
    });
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      queryClient.invalidateQueries(CART_ITEMS_KEY);
    }, [])
  );

  return (
    <View style={{ height: height - 50 }}>
      <StatusBar animated={true} backgroundColor="#FF8000" />

      <View style={styles.header}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate("Search")}
        >
          <Search width="20" height="25" />
        </TouchableOpacity>
        <View style={styles.address}>
          <Image source={logo} style={styles.logo} />
          <TouchableOpacity
            onPress={() => alert("Ingresa la dirrección de entrega")}
          >
            <Text> {user && user.address}</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate("Cart")}
        >
          <Cart width="25" height="25" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.main} showsVerticalScrollIndicator={false}>
        <Slider onPress={console.log} source={images} />

        <View style={{ marginTop: 10 }}>
          <Text variant="h6" style={styles.subtitle}>
            Categorias
          </Text>
          <View style={styles.categories}>
            {items.map(({ image, title }, i) => {
              return (
                <Pressable
                  key={i}
                  onPress={() => navigation.push("Category", { title })}
                  style={styles.category}
                >
                  <Image source={image} style={styles.categoryImage} />
                  <Text
                    variant="subtitle1"
                    style={{ fontSize: 10, textAlign: "center" }}
                  >
                    {title}
                  </Text>
                </Pressable>
              );
            })}
          </View>
        </View>

        <View style={{ marginTop: 10 }}>
          <Text variant="h6" style={styles.subtitle}>
            Nuevos
          </Text>
          <ProductSlider children={productsData} />
        </View>
        <View style={{ marginTop: 10 }}>
          <Text variant="h6" style={styles.subtitle}>
            Más vendidos
          </Text>
          <ProductSlider children={productsData} />
        </View>
      </ScrollView>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#fff",
    height: height - 50
  },
  header: {
    height: 70,
    width: "100%",
    paddingHorizontal: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFF"
  },
  categories: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    marginTop: 10
  },
  category: {
    width: 80,
    height: 80,
    marginBottom: 10,
    justifyContent: "space-between",
    alignItems: "center"
  },
  categoryImage: {
    borderRadius: 15,
    width: "80%",
    height: "80%"
  },
  subtitle: {
    paddingHorizontal: 15,
    color: "#FF8000",
    fontWeight: "700"
  },
  logo: {
    width: 140,
    height: 40,
    resizeMode: "contain"
  },
  address: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column"
  }
});
