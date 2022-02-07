import React, { useState } from "react";
import "./Navigation.css";
import Tab from "./Tabs/Tab";
import { faHome, faBell, faSearch, faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../Button/Button";

export default function Navigation() {
  const [activeTab, setActiveTab] = useState(0);

  const tabInfo = {
    0: {
      title: "Home",
      icon: faHome,
    },
    1: {
      title: "Media",
      icon: faPlayCircle,
    },
    2: {
      title: "Notification",
      icon: faBell,
    },
  };
  return (
    <div className="navigation-container">
      <div className="section section1">
        <FontAwesomeIcon
          className="icon icon-search"
          icon={faSearch}
          color="gray"
        />
        <input type="search" placeholder="Search Tech Semester" />
      </div>
      <div className="section section2">
        <div className="links">
          {Object.keys(tabInfo).map((tab, index) => (
            <Tab
              icon={tabInfo[tab].icon}
              title={tabInfo[tab].title}
              key={index}
              active={index === activeTab}
              onClick={() => setActiveTab(index)}
            />
          ))}
        </div>
      </div>
      <div className="section section3">
        <div className="avatar"></div>
        <Button className="question-btn">Ask Question</Button>
      </div>
    </div>
  );
}
