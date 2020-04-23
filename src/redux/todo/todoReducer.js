const initialState = {
  items: [],
};

const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEMS":
      if (action.payload !== "") {
        const newitem = [...state.items, action.payload];
        return {
          items: newitem,
        };
      }
    // case "UPDATE":
    //   return {
    //     items: action.item,
    //   };

    case "DELETE":
      return {
        items: action.itemd,
      };

    default:
      return state;
  }
};

export default TodoReducer;
