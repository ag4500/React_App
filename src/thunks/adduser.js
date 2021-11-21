import axios from "axios";
import { snakebar,setuser} from "../actions/index";
export const addData = (data) => async (dispatch) => {
  try {
    const response=await axios.post("http://localhost:3008/users", {
      ...data
    });
    dispatch(setuser(response.data))
  } catch (error) {
    dispatch(
      snakebar({ toggle: true, err: "Add User failed with status code 404" })
    );
  }
};
export const editData = (getId, updateUsers) => async (dispatch) => {
  try {
    await axios.put(`http://localhost:3008/users/${getId}`, updateUsers);
  } catch (error) {
    dispatch(
      snakebar({
        toggle: true,
        err: "Update User failed with status code 404",
      })
    );
  }
};
export const setData = (getId) => async (dispatch) => {
  try {
    if (getId!==undefined){
      const result = await axios.get(`http://localhost:3008/users/${getId}`);
      dispatch(setuser(result.data));
    }
  } catch (error) {
    dispatch(
      snakebar({ toggle: true, err: "OnChange failed with status code 404" })
    );
  }
};
