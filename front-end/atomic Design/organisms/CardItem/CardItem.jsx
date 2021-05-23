import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import ModalCart from "../../molecules/ModalCart/ModalCart";
import Text from "../../atoms/Text/Text";
import Image from "../../atoms/Image/Image";
import Chip from "../../atoms/Chip/Chip";
import IconContainer from "../../atoms/IconContainer/IconContainer";
import { Ionicons, Entypo } from '@expo/vector-icons';


export default function CardItem({ variant, children, onPress, style }) {
  const [cart, setCart] = useState(false)

  if(variant === "shippingCard") {
    return(
      <View style={[styles.base, style]}>
        <View style={{height: "95%", justifyContent: "space-between" }}>
          <Text variant="h6">Pedido #00{children.orderId}</Text>
          <Text variant="subtitle2" style={{ color: "#777" }}>{children.date}</Text>
          <Chip>{children.state}</Chip>
        </View>
        <TouchableOpacity style={styles.shippingCard} onPress={() => onPress(children.orderId)} activeOpacity={0.5}>
          <Entypo name="chevron-with-circle-right" size={28} color="#3F3C3C" />
        </TouchableOpacity>
      </View>
    )
  }

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
    elevation: 1,
    borderRadius: 15,
    marginVertical: 5,
    paddingVertical: 5,
    paddingLeft: 10,
    paddingRight: 15,
  },
  content: {
    marginLeft: 10,
    height: "90%",
    width: "76%",
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
  shippingCard: {
    width: "50%",
    height: "100%",
    justifyContent: "center",
    alignItems: "flex-end",
    paddingRight: 5,
  }
}