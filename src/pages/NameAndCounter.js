import React from "react";
import { connect } from "react-redux";

import { increaseCreator, decreaseCreator } from "../redux/actions/counter";
import {
  changeFirstnameCreator,
  changeLastnameCreator,
} from "../redux/actions/name";

const NameAndCounter = ({ counter, name, dispatch }) => {
  //   console.log(counter);
  //   console.log(name);
  const handleIncrease = () => {
    dispatch(increaseCreator());
  };
  const handleDecrease = () => {
    dispatch(decreaseCreator());
  };
  const firstNameHandler = () => {
    dispatch(changeFirstnameCreator("Boot"));
  };
  const lastNameHandler = () => {
    dispatch(changeLastnameCreator("Camp"));
  };
  return (
    <div className="container">
      <h1>NAME</h1>
      <h3>{`${name.firstName} ${name.lastName}`}</h3>
      <div>
        <button onClick={firstNameHandler}>Change Firstname</button>
        <button onClick={lastNameHandler}>Change Lastname</button>
      </div>
      <h1>COUNTER</h1>
      <h3>{counter.number}</h3>
      <div>
        <button onClick={handleDecrease}>-</button>
        <button onClick={handleIncrease}>+</button>
      </div>
    </div>
  );
};

const mapStateToProps = ({ counter, name }) => {
  return {
    counter,
    name,
  };
};

export default connect(mapStateToProps)(NameAndCounter);
//connect(enhancer)(component)
//enhancer => mapStateToProps, mapDispatchToProps
