import React from 'react';
import './App.css';
import Post from './components/Post';
import PostForm from './components/PostForm';
function App() {
  return (
    <div className="App">
      <PostForm/>
      
      <Post/>
    </div>
  );
}

export default App;
