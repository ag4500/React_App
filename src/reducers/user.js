import { Users ,SnakeBar} from "../actions";
const initialState = {
  users: [],
  snakeShowHide:{toggle:false,err:""},
};
export default function user(state = initialState, action) 
{
  switch (action.type) {
    case Users:
      return {
        ...state,
        users: action.payload,
      };
    case SnakeBar:
      return{
        ...state,
        snakeShowHide:action.payload
      }
    default:
      return state;
  }
}
