import { createStore, combineReducers } from "redux";

const demoState = {
  expenses: [
    {
      id: "asfdfasf",
      description: "January rent",
      note: "This was the final payment",
      amount: 54500,
      createAt: 0
    }
  ],
  filters: {
    text: "rent",
    sortBy: "amount", //date and amount
    startDate: undefined,
    endDate: undefined
  }
};
