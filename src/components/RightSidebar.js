import React from "react";
import "./css/RightSidebar.css";
import Notification from "./Notifications";

const RightSidebar = () => {
  return (
    <div className="right-sidebar">
      <p className="right-sidebar-title">Notifications</p>
      <Notification
        icon="bug"
        text="You have a bug needs to be..."
        time="Just now"
      />
      <Notification
        icon="userRegistered"
        text="New user registered"
        time="59 minutes ago"
      />
      <Notification
        icon="bug"
        text="You have a bug needs to be..."
        time="12 hours ago"
      />
      <Notification
        icon="subscribed"
        text="Andi Lane subscribed to you"
        time="Today, 11:59AM"
      />
    </div>
  );
};
export default RightSidebar;
