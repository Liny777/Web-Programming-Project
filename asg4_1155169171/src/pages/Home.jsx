import React from "react";
import PostThumbnail from "../components/PostThumbnail";

import posts from "../posts.json";

const Home = () => {
  return (
    <div className="page home">
      {posts.map(post => <PostThumbnail post={post} />)}
    </div>
  );
};

export default Home;
