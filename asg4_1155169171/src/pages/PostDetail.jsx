import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import posts from "../posts.json";

const PostDetail = () => {
  let { postId } = useParams();

  const post = posts.find((p) => p.id === postId);

  return (
    <div className="page post-detail">
      <div style={{ marginTop: "16px", marginBottom: "16px" }}>
        <Link to="/">
          <button class="btn btn-secondary">Back</button>
        </Link>
      </div>
      <div>
        <h1>{post.title}</h1>
        <p>{post.contents}</p>
      </div>
    </div>
  );
};

export default PostDetail;
