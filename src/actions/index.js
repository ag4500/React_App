export const Users = "Users";
export const Posts = "Posts";
export const Todos = "Todos";
export const Comments = "Comments";
export const SetUsers = "SetUsers";
export const ShowHide = "ShowHide";
export const SnakeBar="SnakeBar";
export const users = (payload) => (
  {
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
export const setuser = (payload) => ({
  type: SetUsers,
  payload,
});
export const showHide = (payload) => ({
  type: ShowHide,
  payload,
});
export const snakebar=(payload)=>({
  type:SnakeBar,
  payload
})
