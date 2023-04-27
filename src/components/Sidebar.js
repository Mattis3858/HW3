import React from "react";
import "./styles.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>;
const Sidebar = () => {
  return (
    <div class="w3-sidebar w3-bar-block" style={{ width: "25%" }}>
      <h1>Dashboard</h1>
      <CustomLink to="/">Dashboard</CustomLink>
      <CustomLink to="/settings">Settings</CustomLink>
      <CustomLink to="/visualization">Visualization</CustomLink>
      <CustomLink to="/profile">Profile</CustomLink>
      <CustomLink to="/notification">Notification</CustomLink>
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

export default Sidebar;
