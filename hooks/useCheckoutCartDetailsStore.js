import create from "zustand";

const useCheckoutCartDetails = create((set) => ({
  details: {},
  setBusinessDetails: (businessData) =>
    set((state) => {
      const newObj = { ...state.details };
      newObj[businessData.id] = {
        delivery: businessData.delivery // delivery === true, takeAway === false
      };
      return {
        ...state,
        details: newObj
      };
    }),
  toggleDelivery: (businessId) =>
    set((state) => {
      const newObj = { ...state.details };
      newObj[businessId].delivery = !state.details[businessId].delivery;
      return {
        ...state,
        details: newObj
      };
    })
}));

export default useCheckoutCartDetails;
