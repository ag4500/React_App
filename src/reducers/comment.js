import { Comments, SnakeBar } from "../actions";
const initialState = {
  comment: [],
  snakeShowHide: { toggle: false, err: "" },
};
export default function comment(state = initialState, action) {
  switch (action.type) {
    case Comments:
      return {
        ...state,
        comment: action.payload,
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
