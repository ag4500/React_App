import axios from "axios";
import { posts, snakebar } from "../actions/index";
export const postData = (userId) => async (dispatch) => {
  try {
    const post = await axios.get(`http://localhost:3008/users/${userId}/posts`);
    dispatch(posts(post.data));
  } catch (error) {
    dispatch(
      snakebar({ toggle: true, err: " Request failed with status code 404 on Post" })
    );
  }
};
