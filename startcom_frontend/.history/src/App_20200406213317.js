import React, { Component } from 'react';
import './App.css';
import {Provider} from 'react-redux';
import store  from './store'
import Post from './components/Post';
import PostForm from './components/PostForm';

class App extends Component {
  render() {
    return (
      <Provider store={store }>
        <div className="App">
          <PostForm/>
          <hr />
          <Post/>
        </div>
      </Provider>
     
    );
  }
 
}

export default App;
