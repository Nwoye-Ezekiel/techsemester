import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Home.css";

export default function Home() {
  const authedUser = useSelector((state) => state.user.authedUser);
  let history = useHistory();

  useEffect(() => {
    if (!authedUser) {
      history.push("/login");
    }
    //eslint-disable-next-line
  }, [authedUser]);

  return (
    <div className="home-page">
      <h1 className="title">Home Page</h1>
    </div>
  );
}
