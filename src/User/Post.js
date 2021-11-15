import React from "react";
import axios from "axios";
import { connect } from 'react-redux';
import {posts} from '../actions/index'
import { Button, ListGroup } from "react-bootstrap";
class PostUser extends React.Component {
  constructor(props) {
    super(props);
  }
  postData = async (userId) => {
    const post = await axios.get(`http://localhost:3008/users/${userId}/posts`);
    this.props.posts(post.data)
  };
  componentDidMount() {
    const { id } = this.props.match.params;
    this.postData(id);
  }
  CommentData = () => {
    const post_id = this.props.match.params.id;
    this.props.history.push(`/posts/${post_id}/comments`);
  };
  render() {
    const postData = this.props.my_post;
    let post_Data = postData.map((data) => {
      return (
        <ul key={data.id}>
          <li style={{ listStyleType: "square" }}>
            <ListGroup>
              <ListGroup.Item>{data.title}</ListGroup.Item>
            </ListGroup>
          </li>
        </ul>
      );
    });
    return (
      <>
        <div className="container my-3">
          <h3 className="text-center my-2 text-secondary">
            Posts...
            <Button
              className="mx-4"
              variant="outline-secondary"
              size="sm"
              onClick={this.CommentData}
            >
              Comment
            </Button>
          </h3>
          {post_Data}
        </div>
      </>
    );
  }
}
const mapDispatchToProps={
  posts
 }
 const mapStateToProps=(state)=>({
  my_post:state.post
})
const PostsConnectedWithRedux = connect(mapStateToProps, mapDispatchToProps)(PostUser);

export default PostsConnectedWithRedux
