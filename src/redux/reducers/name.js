const initialState = {
  firstName: "Arka",
  lastName: "Demy",
};

const nameReducer = (prevState = initialState, action) => {
  //reducer digunakan untuk merealisasikan action
  //action A maka reducer lakukan A
  //counter => INCREASE, DECREASE
  //conditional
  switch (action.type) {
    case "CHANGE_FIRSTNAME":
      return {
        ...prevState,
        firstName: prevState.firstName + action.payload,
      };
    case "CHANGE_LASTNAME":
      return {
        ...prevState,
        lastName: prevState.lastName + action.payload,
      };
    default:
      return prevState;
  }
};

export default nameReducer;
