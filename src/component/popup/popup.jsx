import React from "react";
import "./popup.css";
import ThemeContext from '../../context/themeContext/themeContext';


const PopUp = (props) => {
  return ( <ThemeContext.Consumer>
    {context =>  <div className="popup-backdrop" onClick={props.exit}  id={context.userTheme==="light"? "popup-backdrop-light":"popup-backdrop-dark"}>
      <div className="popup-body">
        <ul>
          <li>
            <a onClick={() => props.goToHome()} className={props.activeRoute === 'home' ? 'navigation-menu-active' : 'navigation-menu-inactive'} href="/#home">Home</a>
          </li>
          <li>
            <a onClick={() => props.goToAbout()} className={props.activeRoute === 'about' ? 'navigation-menu-active' : 'navigation-menu-inactive'} href="/#about">About</a>
          </li>
          <li>
            <a onClick={() => props.goToPortfolio()} className={props.activeRoute === 'experience' ? 'navigation-menu-active' : 'navigation-menu-inactive'} href="/#experience">Portfolio</a>
          </li>
          <li>
            <a onClick={() => props.goToContact()} className={props.activeRoute === 'contact' ? 'navigation-menu-active' : 'navigation-menu-inactive'} href="/#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
}
  </ThemeContext.Consumer>
  )
}

export default PopUp;