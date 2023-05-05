import React from "react";
import "./css/SmallCard.css";
import { HiArrowTrendingDown, HiArrowTrendingUp } from "react-icons/hi2";

const SmallCard = ({ title, data, percentage, backgroundColor, icon }) => {
  return (
    <div
      className="small-card"
      style={{ backgroundColor: `${backgroundColor}` }}
    >
      <div className="title">{title}</div>
      <div className="datas">
        <div className="data">{data}</div>
        <div className="percentage">{percentage}</div>
        {icon === "up" ? (
          <HiArrowTrendingUp style={{ marginLeft: "0.3vw" }} />
        ) : (
          <HiArrowTrendingDown style={{ marginLeft: "0.3vw" }} />
        )}
      </div>
    </div>
  );
};

export default SmallCard;
