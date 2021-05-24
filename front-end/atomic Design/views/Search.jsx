import React from "react";
import { View } from "react-native";
import RecentHistory from "../molecules/RecentHistory/RecentHistory";
import SearchBar from "../organisms/SearchBar/SearchBar";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function Search() {
  return (
    <View>
      <SearchBar position="right" icon={faArrowLeft} />
      <RecentHistory content="Martillo" />
      <RecentHistory content="Clavos" />
    </View>
  );
}
