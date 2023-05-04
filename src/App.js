// import logo from "./logo.svg";

import LeftSidebar from "./components/LeftSidebar";
import Dashboard from "./components/Dashboard";
import Settings from "./components/Settings";
import Visualization from "./components/Visualization";
import { Routes, Route } from "react-router-dom";
import Profile from "./components/Profile";
import Notification from "./components/Notifications";
import RightSidebar from "./components/RightSidebar";
function App() {
  return (
    <div className="App" style={{ display: "flex", width: "100vw" }}>
      <LeftSidebar />
      <hr style={{ lineHeight: "100vh", opacity: "0.3" }} />
      <Routes>
        <Route exact path="/" element={<Dashboard />}></Route>
        <Route exact path="/settings" element={<Settings />}></Route>
        <Route exact path="/visualization" element={<Visualization />}></Route>
        <Route exact path="/profile" element={<Profile />}></Route>
        <Route exact path="/notification" element={<Notification />}></Route>
      </Routes>
      <hr style={{ lineHeight: "100vh", opacity: "0.3" }} />
      <RightSidebar />
    </div>
  );
}

export default App;
