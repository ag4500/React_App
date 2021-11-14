import {
  ADD_Users,
  Posts,
  Users,
  Todos,
  Edit_Users,
  Comments,
  Show,
  Hide,
  Edit,
  Edit_Hide,
} from "../actions";
const initialState = {
  arr: [],
  post: [],
  todo: [],
  comment: [],
  add_data: {
    name: "",
    username: "",
    email: "",
    phone: "",
  },
  isOpen: false,
  isEdit: false,
};
export default function user_reducer(state = initialState, action) {
  switch (action.type) {
    case Users:
      return {
        ...state,
        arr: action.payload,
      };
    case Posts:
      return {
        ...state,
        post: action.payload,
      };
    case Todos:
      return {
        ...state,
        todo: action.payload,
      };
    case Comments:
      return {
        ...state,
        comment: action.payload,
      };

    case ADD_Users:
      return {
        ...state,
        add_data: action.payload,
      };
    case Edit_Users:
      return {
        ...state,
        add_data: action.payload,
      };
    case Show:
      return {
        ...state,
        isOpen: action.payload,
      };
    case Hide:
      return {
        ...state,
        isOpen:action.payload,
      };
    case Edit:
      return {
        ...state,
        isEdit: action.payload,
      };
    case Edit_Hide:
      return {
        ...state,
        isEdit:action.payload,
      };
      break;
    default:
      return state;
  }
}
