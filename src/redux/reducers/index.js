import { combineReducers } from "redux";
import Auth from "./Auth";
import Theme from "./Theme";
import customersReducer from "./CustomersSlice";

import currentSelectedCustomer from "./CurrentSelectedCustomerSlice";

const reducers = combineReducers({
  theme: Theme,
  auth: Auth,
  customers: customersReducer,
  currentSelectedCustomer: currentSelectedCustomer,
});

export default reducers;
