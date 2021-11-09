import { BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import Users from './User/User'
import PostUser from './User/Post';
import TodoUser from './User/Todo'
import CommentPost from './User/Comment';
import {LinkContainer} from 'react-router-bootstrap'
import { Navbar,Nav,Container} from 'react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar >
          <Container>
          <Navbar.Brand href="/">UserData</Navbar.Brand>
            <Nav className="me-auto">
              <LinkContainer to ="/user">
                <Nav.Link>User</Nav.Link>
              </LinkContainer>
              <LinkContainer to ="/users/:id/posts">
                <Nav.Link>Post</Nav.Link>
              </LinkContainer>
              <LinkContainer to ="/users/:id/todos">
                <Nav.Link>ToDO</Nav.Link>
              </LinkContainer>
              <LinkContainer to ="/posts/:id/comments">
                <Nav.Link>Comment</Nav.Link>
              </LinkContainer>
            </Nav>
          </Container>
        </Navbar>
      </div>
      <Switch>
      <Route exact path="/user" component={Users} />
      <Route  path="/users/:id/posts" component={PostUser} />
      <Route  path="/users/:id/todos" component={TodoUser} />
      <Route  path="/posts/:id/comments" component={CommentPost} />
      </Switch>
    </Router>
  );
}
export default App;
