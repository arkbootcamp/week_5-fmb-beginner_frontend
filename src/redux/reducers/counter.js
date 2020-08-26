import { increase, decrease } from "../actions/actionTypes";

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
  //
  switch (action.type) {
    case increase:
      //logic
      //data.push(payload) const newData=[...data, ...payload]
      //data: prevState.data data: newData
      //const newData = array.map(dicari berdasarkan id)
      //ketika id nya cocok => quantity: quantity + 1
      //data: newData
      return {
        ...prevState,
        number: prevState.number + prevState.incBy,
      };
    case decrease:
      return {
        ...prevState,
        number: prevState.number - prevState.decBy,
      };
    default:
      return prevState;
  }
};

export default counterReducer;
