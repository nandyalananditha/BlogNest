import React, { useEffect, useState } from "react";
import axios from "axios";

function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/posts"
      );

      setPosts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>All Posts</h2>

      {posts.map((post) => (
        <div key={post._id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default PostList;