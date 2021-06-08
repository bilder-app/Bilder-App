import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { View,
  ScrollView,
  StyleSheet,
  StatusBar,
  Dimensions,
  TouchableOpacity 
} from "react-native";

import ProductSlider from "../organisms/ProductSlider/ProductSlider";
import CategoryIcon from "../molecules/CategoryIcon/CategoryIcon";
import Slider from "../atoms/Slider/Slider";
import Text from "../atoms/Text/Text";
import Logo from "../atoms/Logo.jsx";

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
import { faShoppingCart, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

import { getProducts, getAllCartProducts } from "../../api";
import { getCartItems } from "../../redux/actions/cart";

const { height } = Dimensions.get("window");
const items = [
  { name: "Paintings", icon: faPaintRoller, title: "Pinturas" },
  { name: "Buildings", icon: faBorderAll, title: "Construcción" },
  { name: "Electricity", icon: faBolt, title: "Electricidad" },
  { name: "Plumbing", icon: faFaucet, title: "Plomería" },
  { name: "Tools", icon: faWrench, title: "Herramientas" },
  { name: "Hardware", icon: faTools, title: "Ferretería" },
  { name: "Wood", icon: faStream, title: "Maderas" },
  { name: "Faucet", icon: faSink, title: "Grifería" },
  { name: "Services", icon: faPencilRuler, title: "Serv. & Ins." },
  { name: "Floors", icon: faClone, title: "Pisos" }
];

function Home({ navigation, getCartItems, cart }) {
  const [productsData, setProductsData] = useState();
  
  useEffect(() => {
    getProducts().then((resp) => setProductsData(resp.data))
    getCartItems();   // redux
  }, []);

  return (
    <View style={{ height: height - 50 }}>
      <StatusBar animated={true} backgroundColor="#FF8000"/>
      
      <View style={styles.header}>
         <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate("Search")}
        >
          <FontAwesomeIcon size={25} icon={faSearch} color="#444D52" />
        </TouchableOpacity>
        <Logo width={120} height={30} /> 
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate("Cart")}
        >
          <FontAwesomeIcon size={25} icon={faShoppingCart} color="#444D52" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.main} showsVerticalScrollIndicator={false}>
        <Slider
          onPress={console.log}
          children="https://thumbs.dreamstime.com/b/ge%C3%AFsoleerdk-op-witte-achtergrond-het-knippen-weg-93838355.jpg"
        />

        <View style={{ marginTop: 10 }}>
          <Text variant="h6" style={styles.subtitle}>
            Categorias
          </Text>
          <View style={styles.categories}>
            {items.map((children, i) => {
              return (
                <CategoryIcon
                  key={i}
                  children={children}
                  onPress={() => 
                  ("Redirect to " + children.title)}
                />
              );
            })}
          </View>
        </View>

        <View style={{ marginTop: 10 }}>
          <Text variant="h6" style={styles.subtitle}>Nuevos</Text>
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

function mapStateToProps(state) {
  return {
    cart: state.cartList.cart
  };
}
export default connect(mapStateToProps, { getCartItems })(Home);


const styles = StyleSheet.create({
  main: {
    backgroundColor: "#FAFAFA",
    height: height - 50
  },
  header: {
    height: 50,
    width: "100%",
    paddingHorizontal: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFF",
    elevation: 5
  },
  categories: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 10
  },
  subtitle: {
    paddingHorizontal: 15,
    color: "#FF8000",
    fontWeight: "700"
  }
});
