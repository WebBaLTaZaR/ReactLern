import { TOGGLE_THEME } from "../types";

const initialState = "light";

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return state === "light" ? "dark" : "light";
    default:
      return state;
  }
};

export default themeReducer;
