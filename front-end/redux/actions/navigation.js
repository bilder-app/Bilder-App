import {
  SET_TAB_MENU
} from "../types.js";

// import axios from "axios";
// import { } from "../../api";


export const setTabMenu = (menuSelected) => {
  return function (dispatch) {
    console.log(menuSelected)
    return dispatch({
      type: SET_TAB_MENU,
      payload: menuSelected
    });
  };
};
