import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { posts } from "../actions/index";
import { Button, ListGroup } from "react-bootstrap";
class PostUser extends React.Component {
  postData = async (userId) => {
    const post = await axios.get(`http://localhost:3008/users/${userId}/posts`);
    this.props.posts(post.data);
  };
  componentDidMount() {
    const { id } = this.props.match.params;
    this.postData(id);
  }
  commentData = () => {
    const postId = this.props.match.params.id;
    this.props.history.push(`/posts/${postId}/comments`);
  };
  render() {
    const postData = this.props.myPost.post;

    return (
      <>
        <div className="container my-3">
          <h3 className="text-center my-2 text-secondary">
            Posts...
            <Button
              className="mx-4"
              variant="outline-secondary"
              size="sm"
              onClick={this.commentData}
            >
              Comment
            </Button>
          </h3>
          {postData.map((data) => (
            <ul key={data.id}>
              <li style={{ listStyleType: "square" }}>
                <ListGroup>
                  <ListGroup.Item>{data.title}</ListGroup.Item>
                </ListGroup>
              </li>
            </ul>
          ))}
        </div>
      </>
    );
  }
}
const mapDispatchToProps = {
  posts,
};
const mapStateToProps = (state) => ({
  myPost: state.post,
});
const postsConnectedWithRedux = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostUser);
export default postsConnectedWithRedux;
