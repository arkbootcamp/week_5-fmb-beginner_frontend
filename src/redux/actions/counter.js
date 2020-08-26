import { increase, decrease } from "./actionTypes";

export const increaseCreator = () => {
  return {
    type: increase,
  };
};
export const decreaseCreator = () => {
  return {
    type: decrease,
  };
};
