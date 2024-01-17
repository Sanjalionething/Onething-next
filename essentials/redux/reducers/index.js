// reducers/counterReducer.js

// Define the initial state
const initialState = {
  count: 0,
};

// Define the action types
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

// Define the action creators
export const increment = () => ({
  type: INCREMENT,
});

export const decrement = () => ({
  type: DECREMENT,
});

// Define the reducer function
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};

export default counterReducer;
