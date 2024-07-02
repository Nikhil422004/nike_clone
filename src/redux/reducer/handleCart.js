const cart = [];

const handleCart = (state = cart, action) => {
  const product = action.payload;
  switch (action.type) {
    case "ADDITEM":
      const exist = state.find((x) => x.articleNo === product.articleNo);
      if (exist) {
        return state.map((x) =>
          x.articleNo === product.articleNo ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        const product = action.payload;
        return [
          ...state,
          {
            ...product,
            qty: 1,
          },
        ];
      }

    case "DELITEM":
      const dexist = state.find((x) => x.articleNo === product.articleNo);
      console.log(dexist);
      if (dexist.qty === 1) {
        return state.filter((x) => x.articleNo !== dexist.articleNo);
      } else {
        return state.map((x) =>
          x.articleNo === product.articleNo ? { ...x, qty: x.qty - 1 } : x
        );
      }

    default:
      return state;
  }
};

export default handleCart;
