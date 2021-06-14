import React, { useState } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  Dimensions,
  StatusBar,
} from "react-native";

import Tab from "../molecules/Tab/Tab";
import Header from "../organisms/Header/Header";
import CardItem from "../organisms/CardItem/CardItem";

import { useNavigation } from "@react-navigation/native";

const { height } = Dimensions.get("window");
const random = Math.floor(Math.random() * 100 + 1);
const items = [
  {
    orderId: random,
    date: "Abril 5, 2020 - 19:36",
    state: "Para entregar",
  },
  {
    orderId: random + 1,
    date: "Abril 5, 2020 - 19:36",
    state: "Completado",
  },
  {
    orderId: random + 2,
    date: "Abril 5, 2020 - 19:36",
    state: "En preparación",
  },
  {
    orderId: random + 3,
    date: "Abril 5, 2020 - 19:36",
    state: "En preparación",
  },
  {
    orderId: random + 4,
    date: "Abril 5, 2020 - 19:36",
    state: "Para entregar",
  },
];

const RenderItem = ({ item, filter }) => {
  // item ---> default prop of Flatlist
  const navigation = useNavigation();

  if (filter === 1 && item.state === "Completado") {
    return (
      <View style={styles.item}>
        <CardItem
          variant="shippingCard"
          children={item}
          onPress={() => navigation.navigate("OrderDetail")}
        />
      </View>
    );
  }
  if (filter === 0 && item.state !== "Completado") {
    return (
      <View style={styles.item}>
        <CardItem
          variant="shippingCard"
          children={item}
          onPress={() => navigation.navigate("OrderDetail")}
        />
      </View>
    );
  }
  return null;
};

const TwoTabs = ({ selected, setSelected }) => {
  return (
    <View style={styles.flatList}>
      <Tab
        onPress={() => setSelected(0)}
        selected={selected === 0}
        text="Pendientes"
      />
      <Tab
        onPress={() => setSelected(1)}
        selected={selected === 1}
        text="Confirmados"
      />
    </View>
  );
};

export default function Shipping() {
  const [selected, setSelected] = useState(0);
  return (
    <View style={styles.wrapper}>
      <StatusBar animated={true} backgroundColor="#FF8000" />
      <Header children={{ text: "Pedidos" }} style={{ elevation: 0 }} hideBackIcon/>

      <TwoTabs selected={selected} setSelected={setSelected} />
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: 15 }}
        data={items}
        renderItem={({ item }) => <RenderItem item={item} filter={selected} />}
        keyExtractor={(item) => item.orderId}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    height: height - 50,
    backgroundColor: "#fff",
  },
  flatList: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#FFF",
  },
  item: {
    marginVertical: 5,
  },
});
