export const initialState = {
  basket: [],
  user: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
      break;

    case "DELETE_FROM_BASKET":
      return {
        ...state,
        basket: state.basket.filter((item) => item.id !== action.id),
      };
      break;

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
      break;
    default:
      return state;
      break;
  }
};
export default reducer;
