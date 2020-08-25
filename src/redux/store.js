import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import indexReducer from "./reducers/index";

const logger = createLogger();
const enhancers = applyMiddleware(logger);

const store = createStore(indexReducer, enhancers);

export default store;
