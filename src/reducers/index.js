import { combineReducers } from "redux";
import user from "./user";
import post from "./post";
import todo from "./todo";
import setUser from "./setUser";
import comment from "./comment";
export default combineReducers({
  user,
  post,
  todo,
  comment,
  setUser,
});
