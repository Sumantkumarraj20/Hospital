import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Bottombar.css';
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
    <div className='bottombar'>
        <ul>
        <li>
          <Link to='/' className='link'>
            <span className='icon'>
              <BsHouseDoorFill />
            </span>
          </Link>
        </li>
        <li>
          <Link to='/' className='link'>
            <span className='icon'>
              <MdDashboard />
            </span>
          </Link>
        </li>
        <li>
          <Link to='/' className='link'>
            <span className='icon'>
              <MdMedicalServices/>
            </span>
          </Link>
        </li>
        <li>
          <Link to='/' className='link'>
            <span className='icon'>
              <FaBookMedical/>
            </span>
          </Link>
        </li>
        <li>
          <Link to='/' className='link'>
            <span className='icon'>
              <AiFillMedicineBox/>
            </span>
          </Link>
        </li>
        <li>
          <Link to='/' className='link'>
            <span className='icon'>
              <FaFileMedicalAlt/>
            </span>
          </Link>
        </li>
        <li>
          <Link to='/' className='link'>
            <span className='icon'>
              <FaUserTie/>
            </span>
          </Link>
        </li>
        <li>
          <Link to='/' className='link'>
            <span className='icon'>
              <AiFillSetting/>
            </span>
          </Link>
        </li>
      </ul>
    </div>
  )
}
