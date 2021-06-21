import create from "zustand";

const useCheckoutCartDetails = create((set) => ({
  details: {},
  setBusinessDetails: (businessData, packageNumber) =>
    set((state) => {
      const newObj = { ...state.details };
      newObj[businessData.id] = {
        delivery: businessData.delivery,
        takeAway: businessData.takeAway,
        packageNumber: packageNumber,
      };
      return {
        ...state,
        details: newObj,
      };
    }),
  toggleDelivery: (businessId) =>
    set((state) => {
      const newObj = { ...state.details };
      newObj[businessId].delivery = !state.details[businessId].delivery;
      return {
        ...state,
        details: newObj,
      };
    }),
  emptyStore: () => set({ details: {} }),
}));

export default useCheckoutCartDetails;
