import React from "react";
import "./css/Notification.css";
import { BsFillBugFill } from "react-icons/bs";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";

const Notification = ({ icon, text, time }) => {
  if (icon === "bug") {
    return (
      <div className="notification-content">
        <BugFound text={text} />
        <NotificationTime time={time} />
      </div>
    );
  } else if (icon === "userRegistered") {
    return (
      <div className="notification-content">
        <UserRegistered text={text} />
        <NotificationTime time={time} />
      </div>
    );
  } else if (icon === "subscribed") {
    return (
      <div className="notification-content">
        <Subscribed text={text} />
        <NotificationTime time={time} />
      </div>
    );
  }
};
export default Notification;

function BugFound({ text }) {
  return (
    <div>
      <span style={{ padding: "auto" }}>
        <BsFillBugFill
          style={{
            backgroundColor: "#E3F5FF",
            borderRadius: "100%",
            width: "7%",
            height: "7%",
          }}
        />
      </span>
      <span className="notification-content">{text}</span>
    </div>
  );
}
function UserRegistered({ text }) {
  return (
    <div>
      <span style={{ padding: "auto" }}>
        <FaUserAlt
          style={{
            backgroundColor: "#E3F5FF",
            borderRadius: "100%",
            width: "7%",
            height: "7%",
          }}
        />
      </span>
      <span className="notification-content">{text}</span>
    </div>
  );
}
function Subscribed({ text }) {
  return (
    <div>
      <span
        style={{
          backgroundColor: "#E3F5FF",
          borderRadius: "100%",
          width: "20px",
          height: "20px",
        }}
      >
        <BsFillPersonCheckFill
          style={{
            backgroundColor: "#E3F5FF",
            borderRadius: "100%",
            width: "7%",
            height: "7%",
          }}
        />
      </span>
      <span className="notification-content">{text}</span>
    </div>
  );
}
function NotificationTime({ time }) {
  return (
    <div
      style={{
        marginLeft: "7%",
        fontSize: "12px",
        fontWeight: "400",
        color: "rgba(0, 0, 0, 0.4)",
      }}
    >
      {time}
    </div>
  );
}
