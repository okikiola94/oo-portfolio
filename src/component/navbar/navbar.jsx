import 'animate.css';
import { useContext } from 'react';
// import "../../style/home.css";
import { useState } from 'react';
import ThemeContext from '../../context/themeContext/themeContext';
import PopUp from '../popup/popup';
import "./navbar.css";


const Navbar = (props) => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const activeRoute = props.activeRoute;
  return <ThemeContext.Consumer>
    {context => (<nav className="animate__animated animate__fadeIn" id={context.userTheme==="light"?"navigation-light":"navigation-dark"}>
      <a href="/" className="brand-name">
        <img src={`${process.env.PUBLIC_URL}/assets/images/white--logo.png`}  alt="logo" />
      </a>
      
      <a href="/" className="brand-name2">
        <img src={`${process.env.PUBLIC_URL}/assets/images/blue-dark-logo.png`}  alt="logo" />
      </a>

      <button className="hamburger" onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}>
        {/* {!isNavExpanded ?   <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
          width="100%" height="100%"
          viewBox="0 0 20 20"
          fill="white">
          <path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z"></path></svg>: */}
           <hr className='line'/> 
           <hr className='line'/>
           <hr className='line'/>
           <hr className='line'/>

      </button>

      {/* <button className="hamburger1"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}> */}
        {/* {!isNavExpanded ?   <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
          width="100%" height="100%"
          viewBox="0 0 20 20"
          fill="white">
          <path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z"></path></svg>: */}
           {/* <hr className='line2'/> 
           <hr className='line2'/>
           <hr className='line2'/>
      </button> */}
    
         
      {/* 
        check the list of hamburger options
          https://alvarotrigo.com/blog/hamburger-menu-css/
          https://codepen.io/erikterwan/pen/EVzeRP
          https://dev.to/webdeasy/10-awesome-css-hamburger-menus-1iho
          https://freefrontend.com/css-hamburger-menu-icons/
          https://icons8.com/icons
      
      */}

      <div
        className="navigation-menu">
        <ul>
          <li>
            <a onClick={() => props.goToHome()} className={activeRoute === 'home' ? 'navigation-menu-active' : context.userTheme==="light"?"navigation-menu-inactive-light":'navigation-menu-inactive'} href="/#home">Home</a>
          </li>
          <li>
            <a onClick={() => props.goToAbout()} className={activeRoute === 'about' ? 'navigation-menu-active' : context.userTheme==="light"?"navigation-menu-inactive-light":'navigation-menu-inactive'} href="/#about">About</a>
          </li>
          <li>
            <a onClick={() => props.goToPortfolio()} className={activeRoute === 'experience' ? 'navigation-menu-active' : context.userTheme==="light"?"navigation-menu-inactive-light":'navigation-menu-inactive'} href="/#experience">Portfolio</a>
          </li>
          <li>
            <a onClick={() => props.goToContact()} className={activeRoute === 'contact' ? 'navigation-menu-active' : context.userTheme==="light"?"navigation-menu-inactive-light":'navigation-menu-inactive'} href="/#contact">Contact</a>
          </li>
        </ul>
      </div>

      {isNavExpanded && <PopUp exit={() => setIsNavExpanded(false)} activeRoute={activeRoute}
        goToHome={() => props.goToHome()} goToAbout={() => props.goToAbout()} goToPortfolio={() => props.goToPortfolio()} goToContact={() => props.goToContact()} />
      }
    </nav>)}
  </ThemeContext.Consumer>

}

export default Navbar;