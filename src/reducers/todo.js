import { Todos, SnakeBar } from "../actions";
const initialState = {
  todo: [],
  snakeShowHide: { toggle: false, err: "" },
};
export default function todo(state = initialState, action) {
  switch (action.type) {
    case Todos:
      return {
        ...state,
        todo: action.payload,
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
