import axios from "axios";
import { customersSlice } from "./CustomersSlice";

export const fetchCustomers = () => async (dispatch) => {
  try {
    dispatch(customersSlice.actions.fetchingCustomers());
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    dispatch(customersSlice.actions.fetchingCustomersSuccess(response.data));
  } catch (e) {
    dispatch(customersSlice.actions.fetchingCustomersError(e.message));
  }
};
