import React from "react";
import SmallCard from "./SmallCard";
import "./css/Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard" style={{ width: "70%" }}>
      <div className="navbar">
        <div>Dashboard / Default</div>
        <input />
      </div>

      <div className="cards">
        <SmallCard
          title="View"
          data="721K"
          percentage="+11.01%"
          backgroundColor="#E3F5FF"
        />
        <SmallCard
          title="Visits"
          data="367K"
          percentage="+9.15%"
          backgroundColor="#E5ECF6"
        />
        <SmallCard
          title="New Users"
          data="1,156"
          percentage="-0.56%"
          backgroundColor="#E3F5FF"
        />
        <SmallCard
          title="Active Users"
          data="239K"
          percentage="-1.48%"
          backgroundColor="#E5ECF6"
        />
      </div>
    </div>
  );
};
export default Dashboard;
