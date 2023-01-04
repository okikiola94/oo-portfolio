import "animate.css";
import "../../style/home.css";
import "./Home.css";
// import { useState } from 'react';
import { useContext } from "react";
import "@fontsource/poppins";
import ima from "./images/hand_coding.png";
import imag from "./images/dev_contact.svg";
import image from "./images/dev_activity.png";
import video from "./images/JavaScript_frameworks.gif";

import ThemeContext from "../../context/themeContext/themeContext";

const Home = (props) => {
  const activeRoute = props.activeRoute;
  return (
    <ThemeContext.Consumer>
      {(context) => (
        <div
          className="home"
          id={context.userTheme === "light" ? "home-light" : "home-dark"}
        >
          <div className="front-end">
            {/* <h6 class="animate__animated animate__zoomIn">
              Hello there👋, I'm
            </h6> */}
            <h4 class="animate__animated animate__zoomIn">Hi, I'm Okikiola</h4>
            <h5 class="animate__animated animate__zoomIn" id="home_title">
              Front End Developer
            </h5>

            <p className="animate__animated animate__zoomIn">
              I am a frontend developer who focuses on creating user-friendly
              and enjoyable digital experiences. I stay up to date on web
              development trends and am constantly learning new skills.
            </p>

            <div className="animate__animated animate__zoomIn" id="container">
              <div className="center">
                <button className="btn" onClick={() => props.goToContact()}>
                  Hire Me
                </button>
              </div>
            </div>

            {/* <a
              onClick={() => props.goToContact()}
              className={activeRoute === "contact"}
              href="#contact"
            >
              <button className="animate__animated animate__zoomIn">
                Hire me
              </button>
            </a> */}
          </div>

          {/* <div className="illustration">
            <img src={ima} className="display-dark" alt=""/>
          </div> */}
        </div>
      )}
    </ThemeContext.Consumer>
  );
};

export default Home;
