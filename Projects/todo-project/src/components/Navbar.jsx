import { Link, useLocation } from "react-router-dom";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import ChecklistRoundedIcon from "@mui/icons-material/ChecklistRounded";
import AnalyticsOutlinedIcon from "@mui/icons-material/AnalyticsOutlined";
import logo from "../assets/logo.jpg";
export default function Navbar() {
  const location = useLocation();
  return (
    <div className="flex flex-col gap-[40px] p-[20px]">
      <div className="phone:hidden flex flex-col items-center justify-center text-center">
        <img className="w-[100px] rounded-[200px]" src={logo} alt="img" />
        <div className="text-white">
          <h1>Mustafozoda Sharifbek</h1>
          <h2>mustaffozode@gmail.com</h2>
        </div>
      </div>
      <div className="phone:pt-[40px] flex flex-col gap-[10px] text-white">
        <Link
          to="/"
          className={`flex items-center justify-start gap-2 ${location.pathname === "/" ? "active-style" : "inactive-style"}`}
        >
          <DashboardOutlinedIcon />
          <span className="phone:hidden">My Tasks</span>
        </Link>
        <Link
          to="/taskdashboards"
          className={`flex items-center justify-start gap-2 rounded-lg p-2 ${
            location.pathname === "/taskdashboards"
              ? "active-style"
              : "inactive-style"
          }`}
        >
          <ChecklistRoundedIcon />
          <span className="phone:hidden">Task Dashboards</span>
        </Link>
        <Link
          to="/tasksoverview"
          className={`flex items-center justify-start gap-2 rounded-lg p-2 ${
            location.pathname === "/tasksoverview"
              ? "active-style"
              : "inactive-style"
          }`}
        >
          <AnalyticsOutlinedIcon />
          <span className="phone:hidden">Task Overview</span>
        </Link>
      </div>
      <div className="kudakbozi grid grid-cols-5">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
