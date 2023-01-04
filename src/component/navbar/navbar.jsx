import "animate.css";
// import { useContext } from "react";
import logo from "./images/Okikiola.png";
import {RxHamburgerMenu} from "react-icons/rx";

import { useState } from "react";
import ThemeContext from "../../context/themeContext/themeContext";
import PopUp from "../popup/popup";
import "./navbar.css";

const Navbar = (props) => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const activeRoute = props.activeRoute;
  return (
    <ThemeContext.Consumer>
      {(context) => (
        <nav
          className="animate__animated animate__fadeIn"
          id={
            context.userTheme === "light"
              ? "navigation-light"
              : "navigation-dark"
          }
        >
          <a href="/" className="brand-name">
            <img src={logo} alt="logo" />
          </a>

          <div className="navigation-menu">
            <ul>
              <li>
                <a
                  onClick={() => props.goToHome()}
                  className={
                    activeRoute === "home"
                      ? "navigation-menu-active"
                      : context.userTheme === "light"
                      ? "navigation-menu-inactive-light"
                      : "navigation-menu-inactive"
                  }
                  href="/#home"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  onClick={() => props.goToAbout()}
                  className={
                    activeRoute === "about"
                      ? "navigation-menu-active"
                      : context.userTheme === "light"
                      ? "navigation-menu-inactive-light"
                      : "navigation-menu-inactive"
                  }
                  href="/#about"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  onClick={() => props.goToPortfolio()}
                  className={
                    activeRoute === "experience"
                      ? "navigation-menu-active"
                      : context.userTheme === "light"
                      ? "navigation-menu-inactive-light"
                      : "navigation-menu-inactive"
                  }
                  href="/#experience"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  onClick={() => props.goToContact()}
                  className={
                    activeRoute === "contact"
                      ? "navigation-menu-active"
                      : context.userTheme === "light"
                      ? "navigation-menu-inactive-light"
                      : "navigation-menu-inactive"
                  }
                  href="/#contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <RxHamburgerMenu
            className="hamburger"
            onClick={() => {
              setIsNavExpanded(!isNavExpanded);
            }}
          />

          {isNavExpanded && (
            <PopUp
              exit={() => setIsNavExpanded(false)}
              activeRoute={activeRoute}
              goToHome={() => props.goToHome()}
              goToAbout={() => props.goToAbout()}
              goToPortfolio={() => props.goToPortfolio()}
              goToContact={() => props.goToContact()}
            />
          )}
        </nav>
      )}
    </ThemeContext.Consumer>
  );
};

export default Navbar;
