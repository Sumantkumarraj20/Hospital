import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import { BsHouseDoorFill } from "react-icons/bs";
import { MdDashboard } from "react-icons/md";
import { AiFillSetting } from "react-icons/ai";
import { MdMedicalServices } from "react-icons/md";
import { FaBookMedical } from "react-icons/fa";
import { AiFillMedicineBox } from "react-icons/ai";
import { FaFileMedicalAlt } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";

const Sidebar = () => {

  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/" className="link">
            <span className="icon">
              <BsHouseDoorFill />
            </span>
            <span className="item">Home</span>
          </Link>
        </li>
        <li>
          <Link to="/dashboard" className="link">
            <span className="icon">
              <MdDashboard />
            </span>
            <span className="item">My Dashboard</span>
          </Link>
        </li>
        <li>
          <Link to="/" className="link">
            <span className="icon">
              <MdMedicalServices />
            </span>
            <span className="item">Appointments</span>
          </Link>
        </li>
        <li>
          <Link to="/" className="link">
            <span className="icon">
              <FaBookMedical />
            </span>
            <span className="item">Cases</span>
          </Link>
        </li>
        <li>
          <Link to="/" className="link">
            <span className="icon">
              <AiFillMedicineBox />
            </span>
            <span className="item">Stocks</span>
          </Link>
        </li>
        <li>
          <Link to="/" className="link">
            <span className="icon">
              <FaFileMedicalAlt />
            </span>
            <span className="item">Reports</span>
          </Link>
        </li>
        <li>
          <Link to="/profile" className="link" >
            <span className="icon">
              <FaUserTie />
            </span>
            <span className="item">User</span>
          </Link>
        </li>
        <li>
          <Link to="/" className="link">
            <span className="icon">
              <AiFillSetting />
            </span>
            <span className="item">Settings</span>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default (Sidebar);