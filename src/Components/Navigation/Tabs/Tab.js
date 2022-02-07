import React from "react";
import "./Tab.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Tab = ({ icon, title, active = false, onClick }) => {
  return (
    <div onClick={onClick} className={`tab ${active ? "active" : "inactive"}`}>
      <FontAwesomeIcon className="icon" icon={icon} />
      <span >{title}</span>
    </div>
  );
};

export default Tab;
