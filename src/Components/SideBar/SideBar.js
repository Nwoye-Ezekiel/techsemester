import React from "react";
import "./SideBar.css";
import Girl from "./Assets/girl.svg";
import Congratulations from "./Assets/congratulations.svg";
import { FaDesktop } from "react-icons/fa";

export default function SideBar() {
  return (
    <div className="side-bar">
      <div className="logo-container">
        <FaDesktop className="logo" />
        <span className="logo-name">Lottery Display</span>
      </div>
      <h2 className="sidebar-header">
        A few clicks away from creating your Lottery Display
      </h2>
      <img className="illustration-girl" src={Girl} alt="" />
      <img className="illustration-congrats" src={Congratulations} alt="" />
    </div>
  );
}
