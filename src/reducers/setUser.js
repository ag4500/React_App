import { SetUsers, ShowHide } from "../actions";
const initialState = {
  data: {
    name: "",
    username: "",
    email: "",
    phone: "",
  },
  record: {},
  toggle: false,
};
export default function setUser(state = initialState, action) {
  switch (action.type) {
    case SetUsers:
      return {
        ...state,
        data: action.payload,
        record: initialState.data,
      };
    case ShowHide:
      return {
        ...state,
        toggle: action.payload,
      };
    default:
      return state;
  }
}
