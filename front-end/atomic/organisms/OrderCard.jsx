import React from "react";
import CardContainer from "../../storybook/stories/CardContainer";
import Text from "../../storybook/stories/Text/Text";
import Button from "../../storybook/stories/Button";
import { View, TouchableOpacity } from "react-native";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

const styles = {
  wrapper: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 5,
    padding: 5
  },
  leftContent: {
    display: "flex",
    justifyContent: "space-between"
  },
  icon: {
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 5000,
    height: 25,
    width: 25,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  rightArea: {
    marginLeft: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20
  }
};

export default function Card({ orderNumber, date, status }) {
  return (
    <CardContainer variant="horizontal">
      <View style={styles.wrapper}>
        <View style={styles.leftContent}>
          <Text variant="h6" style={{ fontWeight: "bold" }}>
            Pedido #{orderNumber}
          </Text>
          <Text>{date}</Text>
          <Button type="small">{status}</Button>
        </View>
        <TouchableOpacity style={styles.rightArea}>
          <View style={styles.icon}>
            <FontAwesomeIcon size={15} icon={faChevronRight} />
          </View>
        </TouchableOpacity>
      </View>
    </CardContainer>
  );
}
