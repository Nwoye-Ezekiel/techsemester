import React from "react";
import "./Layout.css";
import SideBar from "../SideBar/SideBar";
import { useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const { pathname } = useLocation();
  const pathsWithSideBar = ["/register", "/login"];
  let addSideBar;

  if (pathsWithSideBar.includes(pathname)) addSideBar = true;
  else addSideBar = false;

  return (
    <div className="layout-container">
      {addSideBar && <SideBar />}
      <div className={`main ${addSideBar ? "incomplete-width" : "complete-width"}`}>
        {children}
      </div>
    </div>
  );
};

export default Layout;
