import React from "react";
import '../assets/style/Sidebar.css';
import { BsHouseDoorFill} from "react-icons/bs";
import { MdDashboard } from "react-icons/md";
import { AiFillSetting } from "react-icons/ai";
import { MdMedicalServices } from "react-icons/md";
import { FaBookMedical } from "react-icons/fa";
import {AiFillMedicineBox} from "react-icons/ai";
import { FaFileMedicalAlt } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";

export default function Sidebar() {
  return ( 
    <>
      <ul>
        <li>
          <a href="/">
            <span className="icon">
              <BsHouseDoorFill />
            </span>
            <span className="item">Home</span>
          </a>
        </li>
        <li>
          <a href="/dashboard">
            <span className="icon">
              <MdDashboard />
            </span>
            <span className="item">My Dashboard</span>
          </a>
        </li>
        <li>
          <a href="/">
            <span className="icon">
              <MdMedicalServices/>
            </span>
            <span className="item">Appointments</span>
          </a>
        </li>
        <li>
          <a href="/">
            <span className="icon">
              <FaBookMedical/>
            </span>
            <span className="item">Cases</span>
          </a>
        </li>
        <li>
          <a href="/">
            <span className="icon">
              <AiFillMedicineBox/>
            </span>
            <span className="item">Stocks</span>
          </a>
        </li>
        <li>
          <a href="/">
            <span className="icon">
              <FaFileMedicalAlt/>
            </span>
            <span className="item">Reports</span>
          </a>
        </li>
        <li>
          <a href="/user">
            <span className="icon">
              <FaUserTie/>
            </span>
            <span className="item">User</span>
          </a>
        </li>
        <li>
          <a href="/">
            <span className="icon">
              <AiFillSetting/>
            </span>
            <span className="item">Settings</span>
          </a>
        </li>
      </ul>
    </>
  );
}
