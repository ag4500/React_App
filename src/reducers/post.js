import { Posts, SnakeBar } from "../actions";
const initialState = {
  post: [],
  snakeShowHide: { toggle: false, err: "" },
};
export default function post(state = initialState, action) {
  switch (action.type) {
    case Posts:
      return {
        ...state,
        post: action.payload,
      };
    case SnakeBar:
      return {
        ...state,
        snakeShowHide: action.payload,
      };
    default:
      return state;
  }
}
