import {
  getRandomUserAction,
  pending,
  fulfilled,
  rejected,
} from "../actions/actionTypes";

const initialState = {
  data: [],
  error: "",
  isPending: false, //dimanfaatkan untuk membuat loading component
  isFulfilled: false, //dimanfaatkan untuk membuat success component
  isRejected: false, //dimanfaatkan untuk membuat error component
};

const asyncAPIReducer = (prevState = initialState, { type, payload }) => {
  switch (type) {
    case getRandomUserAction + pending:
      return {
        ...prevState,
        isPending: true,
      };
    case getRandomUserAction + rejected:
      return {
        ...prevState,
        isRejected: true,
        error: payload,
        isPending: false,
      };
    case getRandomUserAction + fulfilled:
      return {
        ...prevState,
        isFulfilled: true,
        data: payload,
        isPending: false,
      };
    default:
      return prevState;
  }
};

export default asyncAPIReducer;
