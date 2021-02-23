export const AddItem = (payload) => ({
  type: "ADD_ITEM_IN_CART",
  payload,
});

export const DeleteItem = (payload) => ({
  type: "REMOVE_ITEM_FROM_CART",
  payload,
});

export const IncreaseQuantity = (payload) => {
  return {
    type: "ICREASE_ITEM_QUANTITY",
    payload,
  };
};

export const DecreaseQuantity = (payload) => {
  return {
    type: "DECREASE_ITEM_QUANTITY",
    payload,
  };
};
