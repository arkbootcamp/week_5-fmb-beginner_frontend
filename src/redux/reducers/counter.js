const initialState = {
  number: 0,
  incBy: 1,
  decBy: 1,
};

const counterReducer = (prevState = initialState, action) => {
  //reducer digunakan untuk merealisasikan action
  //action A maka reducer lakukan A
  //counter => INCREASE, DECREASE
  //conditional
  switch (action.type) {
    case "INCREASE":
      return {
        ...prevState,
        number: prevState.number + prevState.incBy,
      };
    case "DECREASE":
      return {
        ...prevState,
        number: prevState.number - prevState.decBy,
      };
    default:
      return prevState;
  }
};

export default counterReducer;
