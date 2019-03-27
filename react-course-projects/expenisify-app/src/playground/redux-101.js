import { createStore } from "redux";
// Action generators : functions that return action objects

// const add = ({ a, b }, c) => {
//   return a + b + c;
// };
// console.log(add({ a: 1, b: 2 }, 100));
let a = 3;
const add = (a, b) => {
  return a + b;
};

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBy
});
const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: "DECREMENT",
  decrementBy
});
const reset = () => ({
  type: "RESET"
});
const set = ({ setBy = 10 } = {}) => ({
  type: "SET",
  setBy
});

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.incrementBy
      };
    case "DECREMENT":
      const decrementBy =
        typeof action.decrementBy === "number" ? action.decrementBy : -1;
      return {
        count: state.count - decrementBy
      };
    case "RESET":
      return {
        count: 0
      };
    case "SET":
      return {
        count: action.setBy
      };
    default:
      return state;
  }
};
const store = createStore(countReducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 5 }));
store.dispatch(incrementCount({}));

store.dispatch(decrementCount({ decrementBy: 5 }));
store.dispatch(decrementCount({}));

store.dispatch(reset({}));

store.dispatch(set({}));
store.dispatch(set({ setBy: 12 }));

// store.dispatch({
//   type: "INCREMENT",
//   incrementBy: 1
// });
// store.dispatch({
//   type: "DECREMENT",
//   decrementBy: 10
// });
// store.dispatch({
//   type: "DECREMENT"
// });
// store.dispatch({
//   type: "RESET"
// });

// store.dispatch({
//   type: "SET",
//   count: 101
// });
