// import logo from "./logo.svg";

import Sidebar from "./components/LeftSidebar";
import Dashboard from "./components/Dashboard";
import Settings from "./components/Settings";
import Visualization from "./components/Visualization";
import { Routes, Route } from "react-router-dom";
import Profile from "./components/Profile";
import Notification from "./components/Notifications";
import RightSidebar from "./components/RightSidebar";
function App() {
  return (
    <div className="App" style={{ display: "flex" }}>
      <Sidebar />
      <hr />
      <Routes>
        <Route exact path="/" element={<Dashboard />}></Route>
        <Route exact path="/settings" element={<Settings />}></Route>
        <Route exact path="/visualization" element={<Visualization />}></Route>
        <Route exact path="/profile" element={<Profile />}></Route>
        <Route exact path="/notification" element={<Notification />}></Route>
      </Routes>
      <hr />
      <RightSidebar />
    </div>
  );
}

export default App;
