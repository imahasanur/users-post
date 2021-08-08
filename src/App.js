import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import firebase from "firebase/app";
import AddPost from "./components/AddPost/AddPost";
import DeletePost from "./components/DeletePost/DeletePost";
import Home from './components/Home/Home';
import PostDetail from "./components/PostDetail/PostDetail";
import firebaseConfig from './firebase/firebase.config';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}else {
  firebase.app(); 
}

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
