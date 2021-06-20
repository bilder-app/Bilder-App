import React, { useState } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  Dimensions,
  StatusBar,
} from "react-native";

import Tab from "../../molecules/Tab/Tab";
import Header from "../../organisms/Header/Header";
import {
  useOrders,
  getOrderCardsData,
  getPreparingAndPendingOrders,
  getConfirmedOrders,
} from "../../../hooks/useOrders";
import OrderCard from "./OrderCard";

import { useFocusEffect } from "@react-navigation/native";

const { height } = Dimensions.get("window");

const PENDING = 0;
const CONFIRMED = 1;

const states = {
  preparing: "En Preparación",
  ready: "Preparando",
  sent: "Entregado",
};

export default function Shipping() {
  const [selected, setSelected] = useState(PENDING);
  const { data: allOrders, isLoading, refetch } = useOrders();

  useFocusEffect(
    React.useCallback(() => {
      refetch();
    }, [])
  );

  if (isLoading) return null;

  const confirmedOrders = getConfirmedOrders(allOrders);
  const preparingAndPendingOrders = getPreparingAndPendingOrders(allOrders);

  const confirmedOrdersData = confirmedOrders.map((orderData) =>
    getOrderCardsData(orderData)
  );

  const preparingAndPendingOrdersData = preparingAndPendingOrders.map(
    (orderData) => getOrderCardsData(orderData)
  );

  return (
    <View style={styles.wrapper}>
      <StatusBar animated={true} backgroundColor="#FF8000" />
      <Header
        children={{ text: "Pedidos" }}
        style={{ elevation: 0 }}
        hideBackIcon
      />

      <View style={styles.flatList}>
        <Tab
          onPress={() => setSelected(PENDING)}
          selected={selected === PENDING}
          text="Pendientes"
        />
        <Tab
          onPress={() => setSelected(CONFIRMED)}
          selected={selected === CONFIRMED}
          text="Confirmados"
        />
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: 15 }}
        data={
          selected === PENDING
            ? preparingAndPendingOrdersData
            : confirmedOrdersData
        }
        renderItem={({ item }) => {
          const dateObj = new Date(item.createdAt);
          const month = dateObj.getUTCMonth() + 1; //months from 1-12
          const day = dateObj.getUTCDate();
          const year = dateObj.getUTCFullYear();
          let hour = dateObj.getUTCHours() - 3;
          let minutes = dateObj.getUTCMinutes();
          hour = hour < 10 ? "0" + hour : hour;
          minutes = minutes < 10 ? "0" + minutes : minutes;

          return (
            <OrderCard
              date={`${day}/${month}/${year} ${hour}:${minutes}`}
              state={states[item.state]}
              orderId={item.orderId}
            />
          );
        }}
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
