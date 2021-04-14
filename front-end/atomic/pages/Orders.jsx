import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import Header from "../organisms/Header";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import OrderCard from "../organisms/OrderCard";

const items = [
  {
    id: 1,
    orderNumber: "0003",
    date: "Abril 5, 2020 - 19:32",
    status: "En preparación"
  },
  {
    id: 2,
    orderNumber: "0003",
    date: "Abril 5, 2020 - 19:32",
    status: "En preparación"
  },
  {
    id: 3,
    orderNumber: "0003",
    date: "Abril 5, 2020 - 19:32",
    status: "En preparación"
  },
  {
    id: 4,
    orderNumber: "0003",
    date: "Abril 5, 2020 - 19:32",
    status: "En preparación"
  },
  {
    id: 5,
    orderNumber: "0003",
    date: "Abril 5, 2020 - 19:32",
    status: "En preparación"
  },
  {
    id: 6,
    orderNumber: "0003",
    date: "Abril 5, 2020 - 19:32",
    status: "En preparación"
  },
  {
    id: 7,
    orderNumber: "0003",
    date: "Abril 5, 2020 - 19:32",
    status: "En preparación"
  },
  {
    id: 8,
    orderNumber: "0003",
    date: "Abril 5, 2020 - 19:32",
    status: "En preparación"
  },
  {
    id: 9,
    orderNumber: "0003",
    date: "Abril 5, 2020 - 19:32",
    status: "En preparación"
  },
  {
    id: 10,
    orderNumber: "0003",
    date: "Abril 5, 2020 - 19:32",
    status: "En preparación"
  },
  {
    id: 11,
    orderNumber: "0003",
    date: "Abril 5, 2020 - 19:32",
    status: "En preparación"
  },
  {
    id: 12,
    orderNumber: "0003",
    date: "Abril 5, 2020 - 19:32",
    status: "En preparación"
  }
];

const renderItem = ({ item: { orderNumber, date, status } }) => (
  <View style={{ marginVertical: 10, marginLeft: "auto", marginRight: "auto" }}>
    <OrderCard orderNumber={orderNumber} date={date} status={status} />
  </View>
);

function Cart() {
  return (
    <View style={styles.wrapper}>
      <Header icon={faAngleLeft} title="Pedidos" />
      <FlatList
        style={styles.list}
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { height: "100%", display: "flex" },
  list: { flexGrow: 0 }
});

export default Cart;
