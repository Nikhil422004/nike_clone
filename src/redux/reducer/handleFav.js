const fav = [];

const handleFav = (stateF = fav, action) => {
  const product = action.payload;
  switch (action.type) {
    case "ADDITEMF":
      const exists = stateF.find(
        (item) => item.articleNo === product.articleNo
      );
      if (exists) {
        return stateF;
      } else {
        return [
          ...stateF,
          {
            ...product,
          },
        ];
      }

    case "DELITEMF":
      return stateF.filter((item) => item.articleNo !== product.articleNo);

    default:
      return stateF;
  }
};

export default handleFav;
