export const changeFirstnameCreator = (name) => {
  return {
    type: "CHANGE_FIRSTNAME",
    payload: name,
  };
};
export const changeLastnameCreator = (name) => {
  return {
    type: "CHANGE_LASTNAME",
    payload: name,
  };
};
