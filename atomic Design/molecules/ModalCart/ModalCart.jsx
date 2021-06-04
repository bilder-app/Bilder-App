import React, { useState } from "react";
import { View } from "react-native";
import Button from  "../../atoms/Button/Button";
import Text from "../../atoms/Text/Text";
import { Entypo } from '@expo/vector-icons'; 


export default function ModalCart({ onPress, style }) {
  const [value, setValue] = useState(1);
  const stock = 17;

  return(
    <View style={[styles.default, {...style}]}>
      <Button 
        onPress={() => {
          value === 1 ? alert("Desea eliminar este producto del carrito?") :  setValue(value - 1)
        }} 
        style={styles.button} 
        props={{ disabled: value <= 0 }} 
        outline 
      >
        <Entypo name="minus" size={17} color="#ff8000" />
      </Button>

      <Text variant="h6">{value}</Text>

      <Button
        onPress={() => setValue(value + 1)}
        style={styles.button}
        props={{ disabled: value === stock }} 
        outline
      >
        <Entypo name="plus" size={17} color="#ff8000" />
      </Button>
    </View>
  )
}

const styles = {
  default: {
    width: 105,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    width: 25,
    height: 25,
  }
}