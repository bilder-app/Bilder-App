import React from "react";
import { View } from "react-native";
import Input from "../../atoms/Input/Input";
import IconContainer from "../../atoms/IconContainer/IconContainer";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faAngleLeft, faShoppingCart, faSearch, faTimesCircle } from "@fortawesome/free-solid-svg-icons";


export default function SearchBar({ children, onPress, style}) {
  return(
    <View style={[styles.default, style]}>
      <IconContainer onPress={() => alert("back")} style={styles.icons}>
        <FontAwesomeIcon icon={faAngleLeft} color="#3F3C3C" size={28} />
      </IconContainer>
      <Input variant="input" placeholder="Que desea buscar?" style={{ width: "78%", height: "70%" }}/>
      <IconContainer onPress={() => alert("redirect to cart")} style={styles.icons}>
        <FontAwesomeIcon icon={faShoppingCart} color="#3F3C3C" size={26} />
      </IconContainer>
    </View>
  )
} 

const styles = {
  default: {
    backgroundColor: "white",
    width: "100%",
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 15,
  },
  icons: {
    width: "11%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  }
}