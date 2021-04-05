import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import SearchBar from "../components/SearchBar.jsx";

import { unshiftHistory } from "../redux/actions/products.js";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

import { useNavigation } from "@react-navigation/native";

export function HistoryItem({ label, onClickText }) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const unshiftHistoryDispatched = (input) => dispatch(unshiftHistory(input));

  const onClickGoToRecentSearch = (labelName) => {
    unshiftHistoryDispatched(labelName);
    navigation.push("Results", labelName);
  };

  return (
    <View style={styles.historyItem}>
      <TouchableOpacity
        style={styles.autocompleteText}
        onPress={() => onClickText(label)}
      >
        <FontAwesomeIcon icon={faClock} color={"#AAA"} size={17} />
        <View style={styles.label}>
          <Text>{label}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => onClickGoToRecentSearch(label)}
        style={styles.recentSearch}
      >
        <FontAwesomeIcon icon={faExternalLinkAlt} color={"#AAA"} size={17} />
      </TouchableOpacity>
    </View>
  );
}

export default function Search() {
  const history = useSelector((state) => state.productsList.history);
  const [searchQuery, setSearchQuery] = useState();

  return (
    <View style={styles.container}>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <View style={styles.history}>
        {history.map((label, index) => {
          return (
            <HistoryItem
              onClickText={(text) => setSearchQuery(text)}
              label={label}
              key={index}
            />
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%"
  },
  history: {
    display: "flex",
    flex: 1,
    width: "100%",
    paddingHorizontal: 10
  },
  historyItem: {
    display: "flex",
    borderBottomWidth: 0.5,
    borderBottomColor: "#444",
    flexDirection: "row"
  },
  autocompleteText: {
    paddingVertical: 8,
    flexGrow: 1,
    flex: 1,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: 8
  },
  label: {
    paddingLeft: 16,
    fontSize: 20,
    flexGrow: 1,
    color: "#707070",
    justifyContent: "center"
  },
  recentSearch: {
    display: "flex",
    justifyContent: "center",
    paddingHorizontal: 8
  }
});
