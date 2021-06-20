import {
  SET_TAB_MENU,
} from "../types.js";

const initialState = {
  tabMenu: 'Home',
};

export default function navigation(state = initialState, action) {
  switch (action.type) {
    case SET_TAB_MENU:
      return {
        ...state,
        tabMenu: action.payload
      };


    default:
      return state;
  }
}
