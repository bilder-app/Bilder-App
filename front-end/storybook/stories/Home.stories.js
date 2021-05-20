import * as React from "react";
import { View } from "react-native";
import { storiesOf } from "@storybook/react-native";
import SearchBar from "../../atomic Design/molecules/SearchBar/SearchBar";
import CategoryIcon from "../../atomic/organisms/CategoryIcon";
import TabBar from "../../atomic Design/molecules/TabBar/TabBar";
import Slider from "../../atomic Design/atoms/Slider/Slider";

import { faShoppingCart, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
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

import CenterView from "./CenterView";

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

storiesOf("Home Stories", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("SearcBar Home", () => (
    <SearchBar
      position="left"
      icon={faShoppingCart}
      props={{ onPress: () => alert("redirect to Cart") }}
    />
  ))
  .add("SearchBar Search", () => (
    <SearchBar position="right" icon={faAngleLeft} />
  ))

  .add("CategoryIcon Home", () => (
    <View
      style={{
        width: "100%",
        paddingHorizontal: 15,
        height: 145,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between"
      }}
    >
      {items.map((data, i) => {
        return (
          <CategoryIcon
            key={i}
            data={data}
            onPress={() => console.log("Redirect to " + data.title)}
          />
        );
      })}
    </View>
  ))

  .add("TabBar", () => <TabBar />)
  .add("TabBar showTitle", () => <TabBar showTitle={true} />)
  .add("Slider", () => {
    return (
      <Slider 
        children="https://c8.alamy.com/comp/2D4MCPB/tools-background-horizontal-isolated-vector-objects-instuments-carpenter-home-master-handyman-repair-of-premises-buildings-2D4MCPB.jpg"
        onPress={() => alert("Redirigir a la página principal del vendedor")}
      />
    )
  });
