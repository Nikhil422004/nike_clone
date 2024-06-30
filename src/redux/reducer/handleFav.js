const fav = [];

const handleFav = (stateF = fav, action) => {
  const product = action.payload;
  switch (action.type) {
    case "ADDITEMF":
      const exist = stateF.find((x) => x.articleNo === product.articleNo);
      if (exist) {
        return stateF.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        const product = action.payload;
        return [
          ...stateF,
          {
            ...product,
            qty: 1,
          },
        ];
      }
      break;

    case "DELITEM":
      const dexist = stateF.find((x) => x.articleNo === product.articleNo);
      if (dexist.qty === 1) {
        return stateF.filter((x) => x.articleNo !== dexist.articleNo);
      } else {
        return stateF.map((x) =>
          x.articleNo === product.articleNo ? { ...x, qty: x.qty - 1 } : x
        );
      }
      break;
    default:
      return stateF;
      break;
  }
};

export default handleFav;
