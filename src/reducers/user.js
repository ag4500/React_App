import { Users } from "../actions";
const initialState = {
  users: [],
};
export default function user(state = initialState, action) {
  switch (action.type) {
    case Users:
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
}
