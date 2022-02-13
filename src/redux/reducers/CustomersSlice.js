import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  customers: [],
  error: "",
};

export const customersSlice = createSlice({
  name: "customers",
  initialState,
  reducers: {
    fetchingCustomers(state) {
      state.isLoading = true;
    },

    fetchingCustomersSuccess(state, action) {
      state.isLoading = false;
      state.customers = [...action.payload];
      state.error = "";
    },

    fetchingCustomersError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    removeCustomer(state, action) {
      state.customers = state.customers.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export default customersSlice.reducer;
