import { Comments } from "../actions";
const initialState = {
  comment: [],
};
export default function comment(state = initialState, action) {
  switch (action.type) {
    case Comments:
      return {
        ...state,
        comment: action.payload,
      };
    default:
      return state;
  }
}
