const redux = require("redux");

const defaultCounterState = {
  counter: 0,
};
const counterReducer = (state = defaultCounterState, action) => {
  if (action.type === "INCREMENT") {
    state.counter++;
  }

  return state;
};

const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
  console.log(store.getState());
};

store.subscribe(counterSubscriber);

store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
