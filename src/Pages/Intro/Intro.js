import React from "react";
import "./Intro.css";
import { useHistory } from "react-router-dom";

export default function Intro() {
  let history = useHistory();
  setTimeout(() => {
    history.push("/register");
  }, 7000);

  return (
    <div className="intro-container">
      <lottie-player
        src="https://assets8.lottiefiles.com/packages/lf20_3ch8tez9.json"
        background="transparent"
        speed="1"
        style={{ width: "400px", height: "400px" }}
        autoplay
      ></lottie-player>
    </div>
  );
}
