import React from "react";
import "./css/LeftSidebar.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
const LeftSidebar = () => {
  return (
    <div style={{ textAlign: "left", width: "14.7%" }}>
      <div>Dashboard</div>
      <br></br>
      <CustomLink to="/">Default</CustomLink>
      <CustomLink to="/settings">eCommerce</CustomLink>
      <CustomLink to="/visualization">Project</CustomLink>
      <CustomLink to="/profile">Online Course</CustomLink>
    </div>
  );
};

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default LeftSidebar;
