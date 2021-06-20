import React from "react";
import { View, StyleSheet } from "react-native";
import RecentHistory from "../molecules/RecentHistory/RecentHistory";
import SearchBar from "../organisms/SearchBar/SearchBar";

export default function Search() {
  return (
    <View style={styles.main}>
      <SearchBar defaultValue="" current="Search" />
      {/* <RecentHistory content="Martillo" />
      <RecentHistory content="Clavos" />
      <RecentHistory content="Clavos" /> */}
    </View>
  );
}
const styles = StyleSheet.create({
  main: {
    backgroundColor: "#fff",
    flex: 1,
  },
});
