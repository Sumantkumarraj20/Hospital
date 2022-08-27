import React, {Children, useState} from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Bottombar from "../components/Bottombar";
import "../assets/style/App.css";
import { HiMenu } from "react-icons/hi";
import { IoIosArrowBack } from "react-icons/io";

const Layout = (props) => {
  const [show, setshow] = useState(true);
  const showhide = () => {
    console.log("clicked");
    setshow(!show);
  };
  return (
    <div className="wrapper">
      <nav>
        <button className="himenu" onClick={showhide}>
          <span>
            <HiMenu />
          </span>
        </button>
        <Navbar />
      </nav>
      <div className="content">
        <div className="sidebar" style={{ display: show && "none" }}>
          <button id="closeicon" onClick={showhide}>
            <span className="icon">
              <IoIosArrowBack />
            </span>
          </button>
          <Sidebar />
        </div>
        <div className="main">{Children}</div>
        <div className="bottombar" style={{ display: !show && "none" }}>
          <Bottombar />
        </div>
      </div>
    </div>
  );
};

export default Layout;
