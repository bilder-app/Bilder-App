import React, { useEffect } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

import CardContainer from "../../atoms/CardContainer/CardContainer";
import Text from "../../atoms/Text/Text";
import Image from "../../atoms/Image/Image";
import { useQuery, useQueryClient } from "react-query";
import {
  editProductInCart,
  getCartProduct,
  removeProductFromCart,
  postProductToCart
} from "../../../api";
import { Machine, assign } from "xstate";
import { useMachine } from "@xstate/react";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import IconContainer from "../../atoms/IconContainer/IconContainer";
import { AntDesign } from "@expo/vector-icons";
import { CART_ITEMS_KEY } from "../../../hooks/reactQueryKeys";
import { useCart } from "../../../hooks/useCart";

export default function ProductCard({ children, onPress, style }) {
  const queryClient = useQueryClient();
  const {
    price,
    name,
    brand,
    contentType,
    content,
    id,
    stock,
    images = [
      "https://ingcoecuador.com/wp-content/uploads/2020/04/uni.png",
      "https://http2.mlstatic.com/D_NQ_NP_868738-MLA31322428821_072019-V.jpg"
    ]
  } = children;

  const navigation = useNavigation();

  const [state, send] = useMachine(amountMachine, {
    actions: {
      onAddedOne: () =>
        postProductToCart(id).then(() => {
          queryClient.invalidateQueries(CART_ITEMS_KEY);
          queryClient.invalidateQueries(["cart product", id], { exact: true });
        }),
      onClose: (ctx) => {
        if (ctx.amount === 0) {
          return removeProductFromCart(id).then(() => {
            queryClient.invalidateQueries(CART_ITEMS_KEY);
            queryClient.invalidateQueries(["cart product", id], {
              exact: true
            });
          });
        } else {
          editProductInCart({ productId: id, amount: ctx.amount }).then(() => {
            queryClient.invalidateQueries(CART_ITEMS_KEY);
            queryClient.invalidateQueries(["cart product", id], {
              exact: true
            });
          });
        }
      }
    }
  });

  useCart({
    onSuccess(data) {
      let matched = false;
      data.forEach((prod) => {
        if (prod.id === id) {
          matched = true;
          send({
            type: "change_amount",
            amount: prod.amount,
            maxAmount: prod.stock
          });
        } else if (!matched) {
          send({
            type: "change_amount",
            amount: 0,
            maxAmount: Infinity
          });
        }
      });
    }
  });

  return (
    <CardContainer
      onPress={() => navigation.navigate("ProductDetail", { productId: id })}
      style={style}
    >
      <View style={styles.content}>
        <Image
          variant="max"
          children={images[0]}
          style={{ resizeMode: "contain" }}
        />
      </View>

      <View style={styles.body}>
        <Text variant="h6" style={{ color: "#FF8000", fontWeight: "bold" }}>
          ${price}
        </Text>
        <Text variant="h5" style={{ color: "#444D52" }}>
          {name}
        </Text>
      </View>

      <View style={{ marginLeft: "auto" }}>
        {state.matches("initial") && (
          <IconContainer
            style={{
              width: 27,
              height: 27,
              justifyContent: "center",
              alignItems: "center"
            }}
            onPress={() => send({ type: "add_one" })}
          >
            <AntDesign name="pluscircleo" size={25} color="#FF8000" />
          </IconContainer>
        )}

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
    </CardContainer>
  );
}

const styles = StyleSheet.create({
  content: {
    width: "100%",
    height: "46%"
    // backgroundColor: "#f00",
  },
  body: {
    flex: 1,
    marginTop: 3,
    justifyContent: "flex-start"
    // backgroundColor: "#0f0",
  },
  button: {
    width: "30%",
    height: 30,
    marginLeft: "auto",
    justifyContent: "center",
    alignItems: "flex-end",
    marginTop: 3
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

export const amountMachine = Machine(
  {
    initial: "initial",
    context: { amount: 0, maxAmount: Infinity },
    states: {
      initial: {
        on: {
          add_one: {
            target: "closed",
            actions: "onAddedOne"
          }
        }
      },
      open: {
        after: {
          2000: [
            { target: "initial", cond: "noAmountSelected", actions: "onClose" },
            { target: "closed", actions: "onClose" }
          ]
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
      },
      closed: {
        on: {
          open: "open"
        }
      }
    },
    on: {
      change_amount: [
        {
          actions: "updateContext",
          target: "closed",
          cond: (_, e) => e.amount > 0
        },
        {
          actions: [
            "updateContext",
            () => {
              console.log("nothing");
            }
          ],
          target: "initial"
        }
      ]
    }
  },
  {
    actions: {
      addOne: assign({
        amount: (ctx) => Math.min(ctx.amount + 1, ctx.maxAmount)
      }),
      removeOne: assign({ amount: (ctx) => Math.max(ctx.amount - 1, 0) }),
      updateContext: assign({
        amount: (_, e) => e.amount,
        maxAmount: (_, e) => e.maxAmount
      })
    },
    guards: {
      noAmountSelected: (ctx) => ctx.amount === 0
    }
  }
);
