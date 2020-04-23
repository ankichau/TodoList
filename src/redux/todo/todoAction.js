export const deleteitems = (itemd) => {
  return {
    type: "DELETE",
    itemd: itemd,
  };
};
// export const updateitem = (item) => {
//   console.log(item);
//   return {
//     type: "UPDATE",
//     item: item,
//   };
// };
export const additems = (payload) => {
  return {
    type: "ADD_ITEMS",
    payload: payload,
  };
};
