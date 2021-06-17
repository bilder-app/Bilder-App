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
  faClone,
} from "@fortawesome/free-solid-svg-icons";

import { getProducts, getAllCartProducts, getMyUser } from "../../api";

const logo = require("../../assets/bilderapp.png");
const images = [
  require("../../assets/img/1.png"),
  require("../../assets/img/2.png"),
  require("../../assets/img/3.png"),
  require("../../assets/img/4.png"),
  require("../../assets/img/5.png"),
];

const pintura = require("../../assets/Categorias/Pintura.png");
const electricidad = require("../../assets/Categorias/Electricidad.png");
const griferia = require("../../assets/Categorias/Griferia.png");
const herramientas = require("../../assets/Categorias/Herramientas.png");
const maderas = require("../../assets/Categorias/Maderas.png");
const pared = require("../../assets/Categorias/Pared.png");
const plomeria = require("../../assets/Categorias/Plomeria.png");
const hierros = require("../../assets/Categorias/Hierros.png");

const { height } = Dimensions.get("window");
const items = [
  { name: "Paintings", icon: pintura, title: "Pinturas" },
  { name: "Buildings", icon: faBorderAll, title: "Construcción" },
  { name: "Electricity", icon: faBolt, title: "Electricidad" },
  { name: "Plumbing", icon: faFaucet, title: "Plomería" },
  { name: "Tools", icon: faWrench, title: "Herramientas" },
  { name: "Hardware", icon: faTools, title: "Ferretería" },
  { name: "Wood", icon: faStream, title: "Maderas" },
  { name: "Faucet", icon: faSink, title: "Grifería" },
];

function Home({ navigation }) {
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
            <Image source={pintura} style={styles.category} />
            <Image source={electricidad} style={styles.category} />
            <Image source={griferia} style={styles.category} />
            <Image source={maderas} style={styles.category} />
            <Image source={pared} style={styles.category} />
            <Image source={plomeria} style={styles.category} />
            <Image source={hierros} style={styles.category} />
            <Image source={herramientas} style={styles.category} />
          </View>
          <View style={styles.categories}>
            {items.map((children, i) => {
              return (
                <CategoryIcon
                  key={i}
                  children={children}
                  onPress={() =>
                    navigation.push("Category", {
                      name: children.name,
                      title: children.title,
                    })
                  }
                />
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

        {/* <View style={{ marginTop: 10 }}>
          <Text variant="h6" style={styles.subtitle}>Productos en Oferta</Text>
          <ProductSlider />
        </View> */}
      </ScrollView>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#fff",
    height: height - 50,
  },
  header: {
    height: 70,
    width: "100%",
    paddingHorizontal: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFF",
  },
  categories: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  subtitle: {
    paddingHorizontal: 15,
    color: "#FF8000",
    fontWeight: "700",
  },
  logo: {
    width: 140,
    height: 40,
    resizeMode: "contain",
  },
  category: {
    width: 80,
    height: 80,
    borderRadius: 30,
    marginBottom: 10,
    resizeMode: "contain",
  },
  address: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
  },
});
