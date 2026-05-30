import React from "react";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>BlogNest</h1>

      <CreatePost />

      <hr />

      <PostList />
    </div>
  );
}

export default App;