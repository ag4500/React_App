import axios from "axios";
import { users, snakebar } from "../actions/index";
export const userData = () => async (dispatch) => {
  try {
    const api = await axios.get("http://localhost:3008/users");
    dispatch(users(api.data));
  } catch (error) {
    dispatch(
      snakebar({ toggle: true, err: "Request failed with status code 404 on Show User"})
    );
  }
};
