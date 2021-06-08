import React from "react";
import { View, StyleSheet, Image } from "react-native";
import Text from "../atoms/Text/Text";
import { AntDesign } from "@expo/vector-icons";
import { Machine, assign } from "xstate";
import { useMachine } from "@xstate/react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useQueryClient } from "react-query";
import { editProductInCart, removeProductFromCart } from "../../api";
import IconContainer from "../atoms/IconContainer/IconContainer";

export default function ({ image, price, name, productId, amount, stock }) {
  const queryClient = useQueryClient();
  const [state, send] = useMachine(amountMachine, {
    context: {
      amount,
      stock
    },
    actions: {
      onClose: (ctx) => {
        if (ctx.amount === 0) {
          return removeProductFromCart(productId).then(() =>
            queryClient.invalidateQueries("cart items")
          );
        } else {
          editProductInCart({ productId, amount: ctx.amount }).then(() =>
            queryClient.invalidateQueries("cart items")
          );
        }
      }
    }
  });

  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.content}>
        <Text style={{ flexGrow: 1, fontWeight: "bold" }} variant="subtitle1">
          {name}
        </Text>
        <View style={styles.bottomContent}>
          <Text variant="h6" style={{ color: "#ff8000" }}>
            $ {state.context.amount * price}
          </Text>
          {state.matches("closed") && (
            <IconContainer
              style={styles.buttonFill}
              onPress={() => send({ type: "open" })}
            >
              <Text style={styles.badge}>{state.context.amount}</Text>
            </IconContainer>
          )}
          {state.matches("open") && (
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
                {state.context.amount}
              </Text>
              <TouchableOpacity onPress={() => send({ type: "add_one" })}>
                <AntDesign name="pluscircleo" size={25} color="#FF8000" />
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: "100%",
    borderRadius: 15,
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row",
    elevation: 2,
    marginVertical: 5,
    paddingVertical: 10,
    paddingLeft: 15,
    paddingRight: 15
  },
  content: {
    display: "flex",
    marginLeft: 15,
    flex: 1
  },
  image: {
    height: "100%",
    width: 75
  },
  bottomContent: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%"
  },
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

const amountMachine = Machine(
  {
    initial: "closed",
    context: { amount: 0, stock: 0 },
    states: {
      closed: {
        on: {
          open: "open"
        }
      },
      open: {
        after: {
          2000: { target: "closed", actions: "onClose" }
        },
        on: {
          add_one: {
            actions: "addOne",
            target: "open"
          },
          remove_one: {
            actions: "removeOne",
            target: "open"
          }
        }
      }
    }
  },
  {
    actions: {
      addOne: assign({ amount: (ctx) => Math.min(ctx.amount + 1, ctx.stock) }),
      removeOne: assign({ amount: (ctx) => Math.max(ctx.amount - 1, 0) })
    }
  }
);
