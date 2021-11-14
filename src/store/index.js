import {  createStore } from "redux";
import user_reducer from '../reducers/user';
const store = createStore(user_reducer);
export default store;
