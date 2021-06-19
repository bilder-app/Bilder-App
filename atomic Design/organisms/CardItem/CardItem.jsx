import React, { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import { View, TouchableOpacity } from "react-native";
import { useQuery, useQueryClient } from "react-query";

import Modal from "../../molecules/ModalCart/Modal";
import Text from "../../atoms/Text/Text";
import Image from "../../atoms/Image/Image";
import Chip from "../../atoms/Chip/Chip";
import Cart from "../../atoms/Icons/Cart";

import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import { deleteProductFromFavorites, getCartProduct } from "../../../api";


export default function CardItem({ variant, children, onPress, style, redirect }) {
  const [value, setValue] = useState();
  const cart = useSelector((state) => state.cartList.cart);
  const navigation = useNavigation();
  const queryClient = useQueryClient();
  
  const { 
    data: cartProductData,
    refetch: refetchCartProduct 
  } = useQuery(
    ["cart product", children.id],
    () => getCartProduct(children.id)
  );

  
  const isInCart = !!cartProductData;

  if (variant === "cart") {
    useEffect(() => {
      cart.map((product) => {
        product.id === children.id && setValue(product.ProductInCart.amount);
      });
    }, [cart]);
  }

  if (variant === "shippingCard") {
    return (
      <View style={[styles.base, style]}>
        <View style={{ height: "95%", justifyContent: "space-between" }}>
          <Text variant="h6">Pedido #00{children.orderId}</Text>
          <Text variant="subtitle2" style={{ color: "#777" }}>
            {children.date}
          </Text>
          <Chip style={styles.chip}>{children.state}</Chip>
        </View>
        <TouchableOpacity
          style={styles.shippingCard}
          onPress={() => onPress(children.orderId)}
          activeOpacity={0.5}
        >
          <Entypo name="chevron-with-circle-right" size={28} color="#3F3C3C" />
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <TouchableOpacity 
      style={[styles.base, style]} 
      delayLongPress={150}
      onLongPress={() => redirect === true && navigation.navigate("ProductDetail", { productId: children.id })}
      disabled={redirect !== true}
      activeOpacity={1}
    >
      <Image
        children={
          children.images
            ? children.images[0]
            : "http://www.colores.org.es/imagenes_colores/gris.jpg"
        }
        variant="mini"
        style={{ resizeMode: "contain" }}
      />
      <View style={styles.content}>
        { variant === "favourite" 
        ?
          <View style={{ height: "66%", flexDirection: "row", width: "100%" }}>
            <Text variant="subtitle2" style={{ fontWeight: "bold", color: "#444D52", width: "90%" }}>
              {children.name}
            </Text>
            <View style={{ width: "13%", height: "60%", marginTop: "-3%" }}>
              <TouchableOpacity 
                onPress={() => {
                  deleteProductFromFavorites(children.id).then(() =>  {
                    queryClient.invalidateQueries("favorite products");
                    queryClient.invalidateQueries("get favorited product");
                  })
                }} 
                style={{ width: "100%", height: "100%", alignItems: "flex-end", justifyContent: "center" }}
              >
                <Entypo name="cross" size={20} color="#444D52" />
              </TouchableOpacity>
            </View>
          </View>
        :
          <Text
            variant="subtitle2"
            style={{ fontWeight: "bold", color: "#444D52" }}
          >
            {children.name}
          </Text>
        }

        <View style={styles.footer}>
          <Text variant="h6" style={{ color: "#FF8000" }}>
            $ {children.price}
          </Text>

          {variant === "favourite" && (
            <TouchableOpacity
              style={[styles.shippingCard, { width: "30%" }]}
              onPress={() => {
                onPress(children.id).then(() => {
                  refetchCartProduct();
                })
              }}
              activeOpacity={0.5}
              disabled={isInCart}
            >
              <Cart width="25" height="25" color={isInCart ? "#444D52" : "#FF8000"}/>
            </TouchableOpacity>
          
          )}
          {variant === "cart" && (
            <Modal
              style={{ marginLeft: "auto", width: "50%" }}
              children={{
                id: children.id,
                stock: children.stock,
                amount: value || 0,
              }}
            />
          )}
          {variant === "shippingDetail" && (
            <Text variant="subtitle1">
              <Text variant="h6">{children.units} </Text>unidades
            </Text>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = {
  base: {
    height: 100,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FFF",
    elevation: 1.2,
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
  },
  chip: {
    elevation: 0,
    borderColor: "#FF8000",
    borderWidth: 1,
  },
};
