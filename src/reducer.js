export const initialState = {
  basket: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      console.log(state);
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
      break;
      
    case "DELETE_FROM_BASKET":
      console.log(state);
      return {
        ...state,
        basket: state.basket.filter(item=>item.id!==action.id),
      };
      break;
    default:
      return state;
      break;
  }
};
export default reducer;
