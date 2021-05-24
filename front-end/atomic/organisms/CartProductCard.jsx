import React from "react";
import CardContainer from "../../atomic Design/atoms/CardContainer/CardContainer";
import Text from "../../atomic Design/atoms/Text/Text";
import Input from "../../atomic Design/atoms/Input/Input";
import { View, Image, Pressable } from "react-native";

const styles = {
  image: {
    height: "100%",
    width: "23%",
    resizeMode: "contain"
  },
  wrapper: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 5
  },
  middle: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    flexGrow: 1,
    alignItems: "center"
  },
  price: { marginLeft: "auto" },
  middleCol: {
    display: "flex",
    justifyContent: "space-between",
    paddingBottom: 5
  },
  totalOrdered: {
    marginLeft: "auto",
    borderWidth: 1,
    borderColor: "#c0c0c0",
    height: 21
  },
  lastCol: {
    display: "flex",
    alignItems: "center",
    marginLeft: "auto",
    paddingRight: 10
  },
  middleBottom: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  }
};

export default function Card({
  title,
  shortDescription,
  total,
  singlePrice,
  inOrder
}) {
  return (
    <CardContainer variant="horizontal">
      <View style={styles.wrapper}>
        <Image
          style={styles.image}
          source={{
            uri: "https://ingcoecuador.com/wp-content/uploads/2020/04/uni.png"
          }}
        />
        <View style={styles.middleCol}>
          <Text variant="h6">{title}</Text>
          <Text style={{ color: "#5f5f5f" }}>{shortDescription}</Text>
          <View style={styles.middleBottom}>
            <Pressable
              style={{
                marginRight: "auto",
                display: "flex",
                alignItems: "center",
                alignContent: "center",
                justifyContent: "center",
                justifyItems: "center",
                height: "100%"
              }}
            >
              <Text color="primary">Eliminar</Text>
            </Pressable>
            <Input
              style={styles.totalOrdered}
              variant="amount"
              value={inOrder + ""}
            />
          </View>
        </View>
        <View style={styles.lastCol}>
          <Text style={{ textAlign: "center", color: "#5f5f5f" }}>
            Precio{"\n"} Unitario
          </Text>
          <Text style={{ color: "#5f5f5f" }}>${singlePrice}</Text>
          <Text variant="h5">${total}</Text>
        </View>
      </View>
    </CardContainer>
  );
}
