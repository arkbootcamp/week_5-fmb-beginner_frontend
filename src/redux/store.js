import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import rpm from "redux-promise-middleware";

import indexReducer from "./reducers/index";

const logger = createLogger();
const enhancers = applyMiddleware(rpm, logger);

const store = createStore(indexReducer, enhancers);

export default store;

//rpm
//merubah 1 action dengan payload async menjadi 3 action
//NAMA_ACTION_PENDING => handle request pending
//NAMA_ACTION_FULFILLED => handle request fulfilled, menangani then
//NAMA_ACTION_REJECTED => handle request rejected, menangani catch
