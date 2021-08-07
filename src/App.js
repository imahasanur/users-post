import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import AddPost from "./components/AddPost/AddPost";
import DeletePost from "./components/DeletePost/DeletePost";
import Home from './components/Home/Home';
import NavBar from "./components/NavBar/NavBar";
import PostDetail from "./components/PostDetail/PostDetail";

function App() {
  return (
    <div>
      <Router>
        
        <Switch>
          <Route path="/addPost">
            <AddPost></AddPost>
          </Route>
          <Route path="/deletePost">
            <DeletePost></DeletePost>
          </Route>
          <Route path="/posts/:userPostId" >
            <PostDetail></PostDetail>
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
