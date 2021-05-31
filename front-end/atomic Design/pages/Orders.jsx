import React, { useState } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import Tab from "../molecules/Tab/Tab";
import Header from "../organisms/Header/Header";
import CardItem from "../organisms/CardItem/CardItem";

const random = Math.floor((Math.random() * 100) + 1);
const items = [
  {
    orderId: random ,
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
  {
    orderId: random + 5,
    date: "Abril 5, 2020 - 19:36",
    state: "Completado",
  },
  {
    orderId: random + 6,
    date: "Abril 5, 2020 - 19:36",
    state: "En preparación",
  },
    {
    orderId: random + 7,
    date: "Abril 5, 2020 - 19:36",
    state: "Para entregar",
  },
  {
    orderId: random + 8,
    date: "Abril 5, 2020 - 19:36",
    state: "En preparación",
  },
  {
    orderId: random + 9,
    date: "Abril 5, 2020 - 19:36",
    state: "Completado",
  },
];

const RenderItem = ({ item, filter }) => {  // item ---> default prop of Flatlist
  
  if(filter === 1 && item.state === "Completado") {
    return(
      <View style={{ marginVertical: 10, marginLeft: 15, marginRight: 15 }}>
        <CardItem variant="shippingCard" children={item} onPress={alert}/>
      </View>
    )
  }
  if(filter === 0 && item.state !== "Completado") {
    return(
      <View style={{ marginVertical: 10, marginLeft: 15, marginRight: 15 }}>
        <CardItem variant="shippingCard" children={item} onPress={alert}/>
      </View>
    )
  }
  return null;
};

const TwoTabs = ({ selected, setSelected }) => {
  return (
    <View style={{ display: "flex", flexDirection: "row" }}>
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
      <Header children={{ text: "Pedidos" }} />
      <TwoTabs selected={selected} setSelected={setSelected}/>
      <FlatList
        style={styles.list}
        data={items}
        renderItem={({ item }) => <RenderItem item={item} filter={selected}/>}
        keyExtractor={(item) => item.orderId}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { height: "100%", display: "flex" },
  list: { flexGrow: 0 },
});