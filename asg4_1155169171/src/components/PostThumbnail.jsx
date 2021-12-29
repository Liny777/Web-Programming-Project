import { Link } from "react-router-dom";

const PostThumbnail = ({ post }) => {
  return (
    <Link to={`/posts/${post.id}`}>
      <div className="card" style={{ width: "80%", margin: "16px auto" }}>
        <img className="card-img-top" src={post.featureImageUrl} alt="" />
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">{post.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default PostThumbnail;
