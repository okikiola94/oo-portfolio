import 'animate.css';
import "../../style/home.css";
import "./Home.css";
// import { useState } from 'react';
import { useContext } from 'react';

import ThemeContext from '../../context/themeContext/themeContext';




const Home = (props) => {
  const activeRoute = props.activeRoute;
    return <ThemeContext.Consumer>
    {context => (<div className="home" id={context.userTheme==="light"? "home-light":"home-dark"}>
        <div className="front-end">
            <h2 class="animate__animated animate__zoomIn">Hi 👋, my name is </h2>
            <h1 class="animate__animated animate__zoomIn">Okikiola O Farominiyi</h1>
            {/* <h1 class="animate__animated animate__fadeInLeftBig">Farominiyi</h1> */}
            <h3 class="animate__animated animate__zoomIn">FRONT-END DEVELOPER + DATA ANALYST</h3>
            <p className='animate__animated animate__zoomIn'>I am a frontend developer who focuses on creating user-friendly and enjoyable digital experiences. I stay up to date on web development trends and am constantly learning new skills. I can help you gain analytical insights from your website visitors as a data analyst..</p>

            
           
            <a onClick={() => props.goToContact()}  className={activeRoute === 'contact'} href='#contact'> <button className= 'animate__animated animate__zoomIn'> Hire me </button></a>
        </div>

    </div>)}
</ThemeContext.Consumer>
}


export default Home;