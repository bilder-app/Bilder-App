import React from "react";
import { View, StyleSheet } from "react-native";
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
import { faShoppingCart, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";


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


export default function Home() {
  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <FontAwesomeIcon size={25} icon={faPhone} />
        <Logo width={120} height={35} />
        <FontAwesomeIcon size={25} icon={faShoppingCart} />
      </View>
      <Slider onPress={console.log} children="https://thumbs.dreamstime.com/b/ge%C3%AFsoleerdk-op-witte-achtergrond-het-knippen-weg-93838355.jpg" />

      <View style={{ marginTop: 10 }}>
        <Text variant="h6" style={styles.subtitle}>Categorias</Text>
        <View style={styles.categories}>
          {items.map((children, i) => {
            return (
              <CategoryIcon
                key={i}
                children={children}
                onPress={() => console.log("Redirect to " + children.title)}
              />
            );
          })}
        </View>
      </View>

      <View style={{ marginTop: 10 }}>
        <Text variant="h6" style={styles.subtitle}>Nuevos</Text>
        <ProductSlider />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#FCFCFC",
  },
  header: {
    height: 50,
    width: "100%",
    paddingHorizontal: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
});
