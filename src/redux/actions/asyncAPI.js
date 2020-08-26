import { getRandomUser } from "../../utils/http";
import { getRandomUserAction } from "./actionTypes";

export const getRandomUserCreator = () => {
  return {
    type: getRandomUserAction,
    payload: getRandomUser(),
  };
};

//untuk then dan catch akan ditangani oleh redux-promise-middleware
