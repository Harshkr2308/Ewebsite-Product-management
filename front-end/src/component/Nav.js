import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/signup");
  };
  return (
    <div>
      <img
        alt="logo"
        className="logo"
        src="data:image/png;base64,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"
      ></img>
      {auth ? (
        <ul className="nav-ul">
          <li>
            <Link to="/">Products</Link>
          </li>
          <li>
            <Link to="/add">Add Product</Link>
          </li>
          <li>
            <Link to="/update">Update Product</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link onClick={logout} to="/signup">
              Logout ({JSON.parse(auth).name})
            </Link>
          </li>
        </ul>
      ) : (
        <ul className="nav-ul nav-right">
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Nav;
