import React from "react";
import "./css/SmallCard.css";
import { BsArrowUpRight, BsArrowDownRight } from "react-icons/bs";

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
        {icon === "up" ? <BsArrowUpRight /> : <BsArrowDownRight />}
      </div>
    </div>
  );
};

export default SmallCard;
