import {
  ADD_Users,
  Comments,
  Edit_Users,
  Edit_Show,
  Edit_Hide,
  Hide,
  Posts,
  Show,
  Todos,
  Users,
} from "../actions";
const initialState = {
  users: [],
  post: [],
  todo: [],
  comment: [],
  data: {
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
        users: action.payload,
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
        data: action.payload,
      };
    case Edit_Users:
      return {
        ...state,
        data: action.payload,
      };
    case Show:
      return {
        ...state,
        isOpen: action.payload,
      };
    case Hide:
      return {
        ...state,
        isOpen: action.payload,
      };
    case Edit_Show:
      return {
        ...state,
        isEdit: action.payload,
      };
    case Edit_Hide:
      return {
        ...state,
        isEdit: action.payload,
      };
    default:
      return state;
  }
}
