import React from "react";
import "./css/SmallCard.css";

const SmallCard = ({ title, data, percentage, backgroundColor }) => {
  return (
    <div
      className="small-card"
      style={{ backgroundColor: `${backgroundColor}` }}
    >
      <div className="title">{title}</div>
      <div className="datas">
        <div className="data">{data}</div>
        <div className="percentage">{percentage}</div>
      </div>
    </div>
  );
};

export default SmallCard;
