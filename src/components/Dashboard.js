import React from "react";
import SmallCard from "./SmallCard";
import "./css/Dashboard.css";
import { MdOutlineKeyboardArrowDown, MdNotifications } from "react-icons/md";
import { TbStarFilled } from "react-icons/tb";
import { BsFillJournalBookmarkFill, BsSun } from "react-icons/bs";
import { RxCounterClockwiseClock } from "react-icons/rx";
const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="top-nav">
        <a href="#bok" className="nav-content-left">
          <BsFillJournalBookmarkFill />
        </a>
        <a href="#star" className="nav-content-left">
          <TbStarFilled />
        </a>
        <a href="#dashboard" className="nav-content-left">
          Dashboard
        </a>
        <a href="#none" className="nav-content-left">
          /
        </a>
        <a href="#default" className="nav-content-left">
          Default
        </a>

        <div className="nav-right">
          <input
            className="nav-content nav-input"
            placeholder="Search?"
            type="text"
          />
          <a href="#sun" className="nav-content">
            <BsSun />
          </a>
          <a href="#clock" className="nav-content">
            <RxCounterClockwiseClock />
          </a>
          <a href="#notification" className="nav-content">
            <MdNotifications />
          </a>
          <a href="#book" className="nav-content">
            <BsFillJournalBookmarkFill />
          </a>
        </div>
      </div>

      <hr style={{ marginBottom: "3.5%" }}></hr>
      <div style={{ marginBottom: "3%", marginLeft: "2%" }}>
        <span style={{ fontWeight: "600" }}>Today</span>
        <MdOutlineKeyboardArrowDown />
      </div>
      <div className="cards">
        <SmallCard
          title="View"
          data="721K"
          percentage="+11.01%"
          backgroundColor="#E3F5FF"
          icon="up"
        />
        <SmallCard
          title="Visits"
          data="367K"
          percentage="+9.15%"
          backgroundColor="#E5ECF6"
          icon="up"
        />
        <SmallCard
          title="New Users"
          data="1,156"
          percentage="-0.56%"
          backgroundColor="#E3F5FF"
          icon="down"
        />
        <SmallCard
          title="Active Users"
          data="239K"
          percentage="-1.48%"
          backgroundColor="#E5ECF6"
          icon="down"
        />
      </div>
    </div>
  );
};
export default Dashboard;
