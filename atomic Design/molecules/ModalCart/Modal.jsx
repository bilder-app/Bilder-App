import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, StyleSheet } from "react-native";

import Text from "../../atoms/Text/Text";
import IconContainer from "../../atoms/IconContainer/IconContainer";

import { AntDesign } from '@expo/vector-icons';
import { 
  postProductToCart, 
  updateProductInCart,
  deleteProductInCart 
} from "../../../api";

import { 
  addToCart,
  editItemFromCart,
  removeItemFromCart,
} from "../../../redux/actions/cart";


export default function ModalCart({ onPress, style, children }) {
  
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState(0);
  const [delay, handleDelay] = useState();


  const { stock, id } = children;
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cartList.cart);


  useEffect(() => {
    cart.map((product) => {
      product.id === id && setValue(product.ProductInCart.amount)
    })
  }, [cart])
  
  function start(currentValue) { 
    handleDelay(
      setTimeout(() => {
        setVisible(false);
        currentValue > 0 ? dispatch(editItemFromCart(id, currentValue)) : dispatch(removeItemFromCart(id));
        alert("Cantidad actualizada :)");
      }, 3000) 
    )
  }
  function restart(currentValue){ 
    clearTimeout(delay); 
    start(currentValue);
  }


  if(!visible) {
    return(
      <View style={[styles.default, {...style}]}>
        {value === 0 
        ? 
          <IconContainer 
            style={styles.addCart} 
            onPress={() => {
              setValue(1);
              dispatch(addToCart(id))
            }}
          >
            <AntDesign name="pluscircleo" size={25} color="#FF8000" />
          </IconContainer> 
        :
          <IconContainer 
            style={styles.buttonFill} 
            onPress={() => {
              setVisible(true);
              start()
            }}
          >
            <Text style={styles.badge}>{value}</Text>
          </IconContainer>
        }
      </View>
    )
  }
  return(
    <View style={[styles.default, {...style}]}>
    
      <IconContainer 
        style={styles.buttons} 
        onPress={() => {
          value >= 1 && setValue(value - 1)
          restart(value - 1)
        }}
        props={{ disabled: value === 0 }} 
      >
        <AntDesign name="minuscircleo" size={25} color="#FF8000" />
      </IconContainer> 

      <Text variant="h6">{value}</Text>

      <IconContainer 
        style={styles.buttons} 
        onPress={() => {
          setValue(value + 1)
          restart(value + 1)
        }}
        props={{ disabled: value === stock }} 
      >
        <AntDesign name="pluscircleo" size={25} color="#FF8000" />
      </IconContainer> 
    </View>
  )
}

const styles = StyleSheet.create({
  default: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 3,
    height: 33,
  },
  addCart: {
    width: "30%",
    height: 30,
    marginLeft: "auto",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  buttons: {
    width: "30%",
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonFill: {
    backgroundColor: "#FF8000",
    width: 27,
    height: 27,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    marginLeft: "auto",
  },  
  badge: {
    color: "white",
    fontSize: 16,

  }
})