import React from 'react'
import '../assets/style/Bottombar.css'
import { BsHouseDoorFill} from "react-icons/bs";
import { MdDashboard } from "react-icons/md";
import { AiFillSetting } from "react-icons/ai";
import { MdMedicalServices } from "react-icons/md";
import { FaBookMedical } from "react-icons/fa";
import {AiFillMedicineBox} from "react-icons/ai";
import { FaFileMedicalAlt } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
export default function Bottombar() {
  return (
    <div>
        <ul>
        <li>
          <a href="/">
            <span className="icon">
              <BsHouseDoorFill />
            </span>
          </a>
        </li>
        <li>
          <a href="/">
            <span className="icon">
              <MdDashboard />
            </span>
          </a>
        </li>
        <li>
          <a href="/">
            <span className="icon">
              <MdMedicalServices/>
            </span>
          </a>
        </li>
        <li>
          <a href="/">
            <span className="icon">
              <FaBookMedical/>
            </span>
          </a>
        </li>
        <li>
          <a href="/">
            <span className="icon">
              <AiFillMedicineBox/>
            </span>
          </a>
        </li>
        <li>
          <a href="/">
            <span className="icon">
              <FaFileMedicalAlt/>
            </span>
          </a>
        </li>
        <li>
          <a href="/">
            <span className="icon">
              <FaUserTie/>
            </span>
          </a>
        </li>
        <li>
          <a href="/">
            <span className="icon">
              <AiFillSetting/>
            </span>
          </a>
        </li>
      </ul>
    </div>
  )
}
