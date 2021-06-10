import { Machine, assign } from "xstate";

export const amountMachine = Machine(
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
