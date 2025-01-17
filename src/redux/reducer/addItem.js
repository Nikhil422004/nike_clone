const addItem = [];

const addItems = (state = addItem, action) => {
  switch (action.type) {
    case "ADDITEM":
      return [...state, action.payload];
      break;

    case "DELITEM":
      return (state = state.filter((x) => {
        return x.articleNo !== action.payload.articleNo;
      }));
      break;

    default:
      return state;
      break;
  }
};

export default addItem;
