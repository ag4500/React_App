import { Todos } from "../actions";
const initialState = {
  todo: [],
};
export default function todo(state = initialState, action) {
  switch (action.type) {
    case Todos:
      return {
        ...state,
        todo: action.payload,
      };
    default:
      return state;
  }
}
