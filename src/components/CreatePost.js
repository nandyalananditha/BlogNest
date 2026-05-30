import React, { useState } from "react";
import axios from "axios";

function CreatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const submitPost = async () => {
    await axios.post("http://localhost:5000/api/posts", {
      title,
      content
    });

    alert("Post Created");
  };

  return (
    <div>
      <h2>Create Post</h2>

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <br /><br />

      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <br /><br />

      <button onClick={submitPost}>
        Create
      </button>
    </div>
  );
}

export default CreatePost;