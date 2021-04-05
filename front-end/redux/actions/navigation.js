import {
  SET_TAB_MENU
} from "../types.js";

// import axios from "axios";
// import { } from "../../api";


export const setTabMenu = (menuSelected) => {
  return function (dispatch) {
    return dispatch({
      type: SET_TAB_MENU,
      payload: menuSelected
    });
  };
};
