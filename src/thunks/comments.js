import axios from "axios";
import { comments, snakebar } from "../actions/index";
export const commentData = (postid) => async (dispatch) => {
  try {
    const comment = await axios.get(
      `http://localhost:3008/posts/${postid}/comments`
    );
    dispatch(comments(comment.data));
  } catch (error) {
    dispatch(
      snakebar({ toggle: true, err: " Request failed with status code 404" })
    );
  }
};
