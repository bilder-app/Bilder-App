import React from "react";
import { View, TouchableOpacity } from "react-native";
import Text from "../../atoms/Text/Text";
import { Entypo } from "@expo/vector-icons";
import Chip from "../../atoms/Chip/Chip";
import { useNavigation } from "@react-navigation/native";

function OrderCard({ date, orderId, state }) {
  const navigation = useNavigation();

  return (
    <View style={styles.base}>
      <View style={{ height: "95%", justifyContent: "space-between" }}>
        <Text variant="h6">Pedido #00{orderId}</Text>
        <Text variant="subtitle2" style={{ color: "#777" }}>
          {date}
        </Text>
        <Chip style={styles.chip}>{state}</Chip>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("OrderDetail", orderId)}
        style={{
          height: "100%",
          flexGrow: 1,
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center"
        }}
        activeOpacity={0.5}
      >
        <View
          style={{
            marginRight: 30
          }}
        >
          <Entypo name="chevron-with-circle-right" size={28} color="#3F3C3C" />
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default OrderCard;

const styles = {
  base: {
    height: 100,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    elevation: 1.2,
    borderRadius: 15,
    marginVertical: 5,
    paddingVertical: 5,
    paddingLeft: 10,
    paddingRight: 15
  },
  chip: {
    elevation: 0,
    borderColor: "#FF8000",
    borderWidth: 1
  }
};
