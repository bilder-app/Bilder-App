import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { useMachine } from "@xstate/react";
import { amountMachine } from "../machines/amountModal";
import { AntDesign } from "@expo/vector-icons";
import IconContainer from "../atoms/IconContainer/IconContainer";
import Text from "../atoms/Text/Text";

function AmountModal({
  initialAmount = 0,
  onClose,
  maxAmount = Infinity,
  amountToSet,
  showPlusOnNoAmount = false
}) {
  const [state, send] = useMachine(amountMachine, {
    context: {
      amount: initialAmount,
      maxAmount
    },
    actions: {
      onClose: (ctx, e) => onClose?.(ctx, e)
    }
  });

  React.useEffect(() => {
    send({ type: "change_amount", amount: amountToSet || initialAmount });
  }, [amountToSet]);

  const { amount } = state.context;

  if (state.matches("closed"))
    return showPlusOnNoAmount && amount === 0 ? (
      <IconContainer
        style={{
          width: 27,
          height: 27,
          justifyContent: "center",
          alignItems: "center"
        }}
        onPress={() => send({ type: "open" })}
      >
        <AntDesign name="pluscircleo" size={25} color="#FF8000" />
      </IconContainer>
    ) : (
      <IconContainer
        style={styles.buttonFill}
        onPress={() => send({ type: "open" })}
      >
        <Text style={styles.badge}>{amount}</Text>
      </IconContainer>
    );
  else if (state.matches("open"))
    return (
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center"
        }}
      >
        <TouchableOpacity onPress={() => send({ type: "remove_one" })}>
          <AntDesign name="minuscircleo" size={25} color="#FF8000" />
        </TouchableOpacity>
        <Text style={{ marginHorizontal: 15 }} variant="subtitle1">
          {amount}
        </Text>
        <TouchableOpacity onPress={() => send({ type: "add_one" })}>
          <AntDesign name="pluscircleo" size={25} color="#FF8000" />
        </TouchableOpacity>
      </View>
    );
}

export default AmountModal;

const styles = StyleSheet.create({
  buttonFill: {
    backgroundColor: "#FF8000",
    width: 27,
    height: 27,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    marginLeft: "auto"
  },
  badge: {
    color: "white",
    fontSize: 16
  }
});
