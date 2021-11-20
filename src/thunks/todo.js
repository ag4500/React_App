import { todos, snakebar } from "../actions/index";
import axios from "axios";
export const todoData = (userId) => async (dispatch) => {
  try {
    const todo = await axios.get(`http://localhost:3008/users/${userId}/posts`);
    dispatch(todos(todo.data));
  } catch (error) {
    dispatch(
      snakebar({ toggle: true, err: " Request failed with status code 404 on Todo" })
    );
  }
};
