import { Posts } from "../actions";
const initialState = {
  post: [],
};
export default function post(state = initialState, action) {
  switch (action.type) {
    case Posts:
      return {
        ...state,
        post: action.payload,
      };
    default:
      return state;
  }
}
