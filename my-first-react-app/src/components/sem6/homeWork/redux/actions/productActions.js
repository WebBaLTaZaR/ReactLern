import { ADD_PRODUCT, EDIT_PRODUCT, REMOVE_PRODUCT } from "../type";
export const addProduct = (name, description, price, available) => ({
  type: ADD_PRODUCT,
  payload: { name, description, price, available: !!available },
});
export const editProduct = (id, name, description, price, available) => ({
  type: EDIT_PRODUCT,
  payload: { id, name, description, price, available: !!available },
});
export const removeProduct = (id) => ({
  type: REMOVE_PRODUCT,
  payload: { id },
});
