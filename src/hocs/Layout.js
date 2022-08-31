import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Bottombar from "../components/Bottombar";
import style from "../assets/styles/Layout.module.css"
import React, {useState} from 'react'

const Layout = (props) => {
  const [show, setshow] = useState(true);
    const showhide = () => {
      console.log("clicked");
      setshow(!show);
    };

  return (
    <div>
        <Navbar onClick={showhide}/> 
        {show && <Sidebar/>}
        {!show && <Bottombar/>}
        <div className={style.content}>
          {props.children}
        </div>
      </div>
  )
}

export default Layout;
