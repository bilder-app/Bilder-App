import React from "react";
import { View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faShoppingCart, faPhone } from "@fortawesome/free-solid-svg-icons";
import Slider from "../atoms/Slider/Slider";
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
import CategoryIcon from "../molecules/CategoryIcon/CategoryIcon";
import Text from "../atoms/Text/Text";
import ProductSlider from "../organisms/ProductSlider/ProductSlider";
import Logo from "../../assets/bilderlogo.svg";

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
    <View>
      <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 15 }}>
        <FontAwesomeIcon size={25} icon={faPhone} />
        {/* <Logo width={120} height={40} /> */}
        <FontAwesomeIcon size={25} icon={faShoppingCart} />
      </View>
      <Slider children="https://c8.alamy.com/comp/2D4MCPB/tools-background-horizontal-isolated-vector-objects-instuments-carpenter-home-master-handyman-repair-of-premises-buildings-2D4MCPB.jpg" />

      <View
        style={{
          paddingHorizontal: 15
        }}
      >
        <Text
          variant="h6"
          style={{
            color: "#ff8000",
            fontWeight: "500"
          }}
        >
          Categorias
        </Text>
        <View
          style={{
            width: "100%",
            height: 145,
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between"
          }}
        >
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

      <View style={{ marginTop: 25 }}>
        <Text variant="h6"  style={{ paddingHorizontal: 15, color: "#ff8000", fontWeight: "500" }}>
          Nuevos
        </Text>
        <ProductSlider />
      </View>
    </View>
  );
}