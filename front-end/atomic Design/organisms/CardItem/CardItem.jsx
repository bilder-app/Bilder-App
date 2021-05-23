import React, { useState } from "react";
import { View } from "react-native";
import Image from "../../atoms/Image/Image";
import Text from "../../atoms/Text/Text";
import ModalCart from "../../molecules/ModalCart/ModalCart";
import IconContainer from "../../atoms/IconContainer/IconContainer";
import { Ionicons } from '@expo/vector-icons';


export default function CardItem({ variant, children, onPress, style }) {
  const [cart, setCart] = useState(false)

  return(
    <View style={[styles.base, style]}>
      <Image children={children.image} variant="mini"/>
      <View style={styles.content}>
          <Text variant="subtitle2" style={{ fontWeight: "bold", color: "#444D52" }}>
            {children.description}
          </Text>
        <View style={styles.footer}>
          <Text variant="h6" style={{ color: "#ff8000" }}>$ {children.price}</Text>

          {variant === "favourite" && 
            <IconContainer style={styles.favourite} onPress={() => {
              setCart(!cart);
              onPress(children.id, !cart);
            }}>
              <Ionicons name={cart ? "cart" : "cart-outline" } size={28} color="#ff8000" />
            </IconContainer>
          }
          {variant === "cart" &&  <ModalCart/> }
          {variant === "shippingDetail" && 
            <Text variant="subtitle1">
              <Text variant="h6">{children.units} </Text>unidades
            </Text>
          }
        </View>
      </View>
    </View>
  )
}

const styles = {
  base: {
    height: 100,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    borderColor: "#f00",
    borderWidth: 1,
    borderRadius: 20,
    marginVertical: 5,
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  content: {
    marginLeft: 5,
    height: "90%",
    width: "77%",
    justifyContent: "space-around",
    paddingVertical: 3,
  },
  footer: {
    marginTop: 10,
    height: "40%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },

  favourite: {
    height: "100%",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
}