import React from "react";
import "./css/LeftSidebar.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { AiTwotoneAppstore, AiFillFolderOpen } from "react-icons/ai";
import { GiShoppingBag } from "react-icons/gi";
import { BsBookHalf } from "react-icons/bs";
import { MdExpandMore } from "react-icons/md";
import { RxDotFilled } from "react-icons/rx";
import { TfiUser } from "react-icons/tfi";

const LeftSidebar = () => {
  return (
    <div
      style={{
        textAlign: "left",
        width: "12.7%",
        paddingLeft: "2%",
        height: "100vh",
      }}
    >
      <div className="user-profile">
        <TfiUser style={{ height: "25px", width: "25px" }} />
        <p className="user-name">Mattis Chu</p>
      </div>
      <div className="sidebar-title">Favorite</div>
      <CustomLink to="/">
        <RxDotFilled style={{ marginRight: "1.5%" }} />
        <span className="left-sidebar-link">Overview</span>
      </CustomLink>
      <CustomLink to="/">
        <RxDotFilled style={{ marginRight: "1.5%" }} />
        <span className="left-sidebar-link">Projects</span>
      </CustomLink>
      <div className="sidebar-title">Dashboard</div>
      <CustomLink to="/">
        <MdExpandMore
          style={{ transform: "rotate(-90deg)", marginRight: "2%" }}
        />
        <AiTwotoneAppstore style={{ marginRight: "1.5%" }} />
        <span className="left-sidebar-link">Default</span>
      </CustomLink>
      <CustomLink to="/settings">
        <MdExpandMore
          style={{ transform: "rotate(-90deg)", marginRight: "2%" }}
        />
        <GiShoppingBag style={{ marginRight: "1.5%" }} />
        <span className="left-sidebar-link">eCommerce</span>
      </CustomLink>
      <CustomLink to="/visualization">
        <MdExpandMore
          style={{ transform: "rotate(-90deg)", marginRight: "2%" }}
        />
        <AiFillFolderOpen style={{ marginRight: "1.5%" }} />
        <span className="left-sidebar-link">Projects</span>
      </CustomLink>
      <CustomLink to="/profile">
        <MdExpandMore
          style={{ transform: "rotate(-90deg)", marginRight: "2%" }}
        />
        <BsBookHalf style={{ marginRight: "1.5%" }} />
        <span className="left-sidebar-link">Online Course</span>
      </CustomLink>
    </div>
  );
};

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li
      className={isActive ? "active" : ""}
      style={{ marginBottom: "4%", alignItems: "center" }}
    >
      <Link
        to={to}
        {...props}
        style={{ color: "black", textDecoration: "none" }}
      >
        {children}
      </Link>
    </li>
  );
}

export default LeftSidebar;
