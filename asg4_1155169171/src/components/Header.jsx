import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header flex" style={{}}>
        <h1 >Welcome to 1155169171 Blog</h1>
      <div>
        <Link to="/">
          <button type="button" className="btn btn-primary">
            Home
          </button>
        </Link>
        <Link to="/message-board">
          <button className="btn btn-primary">Message Board</button>
        </Link>
      </div>
      </div>
  );
};

export default Header;
