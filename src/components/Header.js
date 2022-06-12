import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiMenuFoldLine, RiCloseLine } from "react-icons/ri";
import "../stylesheets/header.css";

const Header = () => {
  const [showHeader, setShowHeader] = useState(false);
  return (
    <div>
      {showHeader ? (
        <RiCloseLine
          onClick={() => {
            setShowHeader(!showHeader);
          }}
          className="menu-icon position-fixed top-0 end-0"
        />
      ) : (
        <RiMenuFoldLine
          onClick={() => {
            setShowHeader(!showHeader);
          }}
          className="menu-icon position-fixed top-0 end-0"
        />
      )}

      <ul className={`${showHeader ? "show-header" : "hide-header"} n-box1`}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">Projects</Link>
        </li>
        <li>
          <Link to="/">Courses</Link>
        </li>
        <li>
          <Link to="/">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
