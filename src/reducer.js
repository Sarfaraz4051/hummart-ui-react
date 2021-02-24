import { getLocalStorageString } from "./service";

let initialState = {
  cart_items_array: [],
  token:getLocalStorageString('token'),
};

export const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM_IN_CART":
      state.cart_items_array = [...state.cart_items_array, action.payload];
      return state;

    case "REMOVE_ITEM_FROM_CART":
      state.cart_items_array = [...action.payload];
      return state;

    case "ICREASE_ITEM_QUANTITY":
      state.cart_items_array = [...action.payload];
      return state;

    case "DECREASE_ITEM_QUANTITY":
      state.cart_items_array = [...action.payload];
      return state;

    case "UPDATE_TOKEN":
      state.token = !state.token;
      return state;

    default:
      return state;
  }
};
