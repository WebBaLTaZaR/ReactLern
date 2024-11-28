import { ADD_PRODUCT, EDIT_PRODUCT, REMOVE_PRODUCT } from "../type";

const defaultState = [
  {
    id: 1,
    name: "Товар",
    description: "Описание товара",
    price: 200,
    available: true,
  },
];

const productReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return [
        ...state,
        {
          id: state.length + 1,
          ...action.payload,
          available: !!action.payload.available,
        },
      ];
    case EDIT_PRODUCT:
      return state.map((product) =>
        product.id === action.payload.id
          ? {
              ...product,
              ...action.payload,
              available: !!action.payload.available,
            }
          : product
      );
    case REMOVE_PRODUCT:
      return state.filter((product) => product.id !== action.payload.id);
    default:
      return state;
  }
};
export default productReducer;
