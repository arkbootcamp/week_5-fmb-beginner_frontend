import { firstName, lastName } from "./actionTypes";

export const changeFirstnameCreator = (name) => {
  return {
    type: firstName,
    payload: name,
  };
};
export const changeLastnameCreator = (name) => {
  return {
    type: lastName,
    payload: name,
  };
};
