import React, { useEffect, useState } from "react";
import { View } from "react-native";

import Input from "../../atoms/Input/Input";
import Cart from "../../atoms/Cart";
import IconContainer from "../../atoms/IconContainer/IconContainer";

import { useNavigation } from "@react-navigation/native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faAngleLeft,
  faShoppingCart,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";

export default function SearchBar({ children, onPress, style }) {
  const [searchQuery, setSearchQuery] = useState();
  useEffect(() => {
    children && setSearchQuery(children);
  }, []);
  const navigation = useNavigation();

  return (
    <View style={[styles.default, style]}>
      <IconContainer onPress={() => navigation.goBack()} style={styles.icons}>
        <FontAwesomeIcon icon={faAngleLeft} color="#444D52" size={28} />
      </IconContainer>
      <View style={styles.content}>
        <Input
          variant="input"
          placeholder="¿Qué deseas buscar?"
          style={styles.input}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.nativeEvent.text)}
          onSubmitEditing={() => onPress(searchQuery)}
        />
        {!searchQuery ? (
          <View style={styles.alternative}>
            <FontAwesomeIcon icon={faSearch} color="#444D52" size={18} />
          </View>
        ) : (
          <IconContainer
            onPress={() => setSearchQuery("")}
            style={styles.alternative}
          >
            <FontAwesomeIcon icon={faTimesCircle} color="#444D52" size={20} />
          </IconContainer>
        )}
      </View>

      <IconContainer
        onPress={() => navigation.navigate("Cart")}
        style={styles.icons}
      >
        <Cart />
      </IconContainer>
    </View>
  );
}

const styles = {
  default: {
    backgroundColor: "white",
    width: "100%",
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 2,
  },
  content: {
    width: "78%",
    height: "68%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#F6F6F6",
    borderRadius: 20,
  },
  input: {
    width: "90%",
    height: "100%",
    paddingRight: 10,
  },
  alternative: {
    justifyContent: "center",
    alignItems: "flex-start",
    width: "10%",
    height: "100%",
    backgroundColor: "transparent",
  },
  icons: {
    width: "11%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
};
