import { Machine, assign } from "xstate";

export const amountMachine = Machine(
  {
    initial: "closed",
    context: { amount: 0, maxAmount: Infinity },
    states: {
      closed: {
        on: {
          open: "open",
        },
      },
      open: {
        after: {
          2000: { target: "closed", actions: "onClose" },
        },
        on: {
          add_one: {
            actions: "addOne",
            target: "open",
          },
          remove_one: {
            actions: "removeOne",
            target: "open",
          },
        },
      },
    },
    on: {
      change_amount: {
        actions: "changeAmount",
      },
    },
  },
  {
    actions: {
      addOne: assign({
        amount: (ctx) => Math.min(ctx.amount + 1, ctx.maxAmount),
      }),
      removeOne: assign({ amount: (ctx) => Math.max(ctx.amount - 1, 0) }),
      changeAmount: assign({ amount: (_, e) => e.amount }),
    },
  }
);
