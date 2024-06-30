export const addCart = (product) => {
  return {
    type: "ADDITEM",
    payload: product,
  };
};

export const addFav = (product) => {
  return {
    type: "ADDITEMF",
    payload: product,
  };
};

export const delCart = (product) => {
  return {
    type: "DELITEM",
    payload: product,
  };
};
