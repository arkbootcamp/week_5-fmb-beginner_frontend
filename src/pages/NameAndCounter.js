import React from "react";
import { connect } from "react-redux";

import { increaseCreator, decreaseCreator } from "../redux/actions/counter";
import {
  changeFirstnameCreator,
  changeLastnameCreator,
} from "../redux/actions/name";
import { getRandomUserCreator } from "../redux/actions/asyncAPI";

const NameAndCounter = ({
  counter,
  name,
  asyncAPI,
  increaseAction,
  decreaseAction,
  firstNameAction,
  lastNameAction,
  getRandomUserAction,
}) => {
  //   console.log(counter);
  //   console.log(name);
  // const handleIncrease = () => {
  //   dispatch(increaseCreator());
  // };
  // const handleDecrease = () => {
  //   dispatch(decreaseCreator());
  // };
  // const firstNameHandler = () => {
  //   dispatch(changeFirstnameCreator("Boot"));
  // };
  // const lastNameHandler = () => {
  //   dispatch(changeLastnameCreator("Camp"));
  // };
  return (
    <div className="container">
      <h1>NAME</h1>
      <h3>{`${name.firstName} ${name.lastName}`}</h3>
      <div>
        <button onClick={firstNameAction}>Change Firstname</button>
        <button onClick={lastNameAction}>Change Lastname</button>
      </div>
      <h1>COUNTER</h1>
      <h3>{counter.number}</h3>
      <div>
        <button onClick={decreaseAction}>-</button>
        <button onClick={increaseAction}>+</button>
      </div>
      <div className="async-container">
        <button onClick={getRandomUserAction}>GET Random User</button>
        <div>
          {asyncAPI.isPending ? (
            <p>Loading...</p>
          ) : (
            <p className="async-result">{JSON.stringify(asyncAPI.data.data)}</p>
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  // console.log("mstp", ownProps);
  const {counter, name, asyncAPI} = state
  return {
    counter, // counter : counter
    name, // name : name
    asyncAPI, // asyncAPI : asyncAPI
  };
};

const mapDispatchToProps = (dispatch, { firstName, lastName }) => {
  return {
    increaseAction: () => {
      // console.log(ownProps);
      dispatch(increaseCreator());
    },
    decreaseAction: () => {
      dispatch(decreaseCreator());
    },
    firstNameAction: () => {
      dispatch(changeFirstnameCreator(firstName));
    },
    lastNameAction: () => {
      dispatch(changeLastnameCreator(lastName));
    },
    getRandomUserAction: () => {
      dispatch(getRandomUserCreator());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NameAndCounter);
//connect(enhancer)(component)
//enhancer => mapStateToProps, mapDispatchToProps
