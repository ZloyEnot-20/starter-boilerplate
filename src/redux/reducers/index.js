import { combineReducers } from "redux";
import Auth from "./Auth";
import Theme from "./Theme";
import customersReducer from "./CustomersSlice";

const reducers = combineReducers({
  theme: Theme,
  auth: Auth,
  customers: customersReducer,
});

export default reducers;
