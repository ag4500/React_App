export const Users = "Users";
export const Posts = "Posts";
export const Todos = "Todos";
export const Comments = "Comments";
export const ADD_Users = "ADD_Users";
export const Edit_Users = "Edit_Users";
export const Show = "Show";
export const Hide = "Hide";
export const Edit="Edit";
export const Edit_Hide="Edit_Hide";
export const users = (payload) => ({
  type: Users,
  payload,
});
export const posts = (payload) => ({
  type: Posts,
  payload,
});
export const todos = (payload) => ({
  type: Todos,
  payload,
});
export const comments = (payload) => ({
  type: Comments,
  payload,
});
export const adduser = (payload) => ({
  type: ADD_Users,
  payload,
});
export const edituser = (payload) => ({
  type: Edit_Users,
  payload,
});
export const show = (payload) => ({
  type: Show,
  payload,
});
export const hide = (payload) => ({
  type: Hide,
  payload,
});
export const edit = (payload) => ({
  type: Edit,
  payload,
});
export const edit_hide = (payload) => ({
  type: Edit_Hide,
  payload,
});
