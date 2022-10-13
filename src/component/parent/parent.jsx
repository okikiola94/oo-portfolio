import ThemeContext from "../../context/themeContext/themeContext";
import 'animate.css';
import '../../App.css';
import '../../style/home.css';
import React, { useRef, useState, useEffect } from "react";
import InfernoBall from "../page-wrap/infernoBall";
import Navbar from '../navbar/navbar';
import Home from '../home/home';
import Socials from '../socials/socials';
import Experience from '../Experience/experience';
import Qualifications from '../Qualification/qualifications';
import Fade from '../Worklayout/Worklayout';
import Input from '../contact/input';
// import NameForm from '../contact/forms';
import Footer from '../footer/footer';
import About from '../Aboutme/aboutme';
import Fab from '../fab/fab';

const scrollToRef = (ref) => window.scrollTo({ left: 0, top: ref.current.offsetTop, behavior: 'smooth' })

export default function Parent() {
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const portfolioRef = useRef(null);
    const contactRef = useRef(null);
    const [activeRoute, setActiveRoute] = useState('home');

    useEffect(() => {
        window.addEventListener("scroll", () => {
            const position = window.pageYOffset;
            //home
            const homeTop = homeRef.current.offsetTop;
            const homeBottom = homeRef.current.offsetTop + homeRef.current.clientHeight;
            //about
            const aboutTop = aboutRef.current.offsetTop;
            const aboutBottom = aboutRef.current.offsetTop + aboutRef.current.clientHeight;
            //portfolio
            const portfolioTop = portfolioRef.current.offsetTop;
            const portfolioBottom = portfolioRef.current.offsetTop + portfolioRef.current.clientHeight;
            //contact
            const contactTop = contactRef.current.offsetTop;
            const contactBottom = contactRef.current.offsetTop + contactRef.current.clientHeight;

            if (homeTop < position && position < homeBottom) {
                setActiveRoute("home")
            } else if (aboutTop < position && position < aboutBottom) {
                setActiveRoute("about")
            } if (portfolioTop < position && position < portfolioBottom) {
                setActiveRoute("experience")
            } if (contactTop < position && position < contactBottom) {
                setActiveRoute("contact")
            }
        });
    }, [])

    const goToHome = () => {
        setActiveRoute("home")
        scrollToRef(homeRef);
    }

    const goToAbout = () => {
        setActiveRoute("about")
        scrollToRef(aboutRef);
    }

    const goToPortfolio = () => {
        setActiveRoute("experience")
        scrollToRef(portfolioRef);
    }

    const goToContact = () => {
        setActiveRoute("contact")
        scrollToRef(contactRef);
    }

    return <ThemeContext.Consumer>
        {context => (
            <div id={context.userTheme==="light"? "parent_cover-light":"parent_cover-dark"}>
                {/* <div className='circles-container'>
                    <ul class="circles">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>

                <div className='circles-container2'>
                    <ul class="circles2">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div> */}
                <div>
                    <InfernoBall className='infernoBall'/>

                    <Navbar activeRoute={activeRoute} goToHome={goToHome} goToAbout={goToAbout} goToPortfolio={goToPortfolio} goToContact={goToContact} />
                    <div ref={homeRef}>
                        <Home activeRoute ={activeRoute} goToContact={goToContact} />
                    </div>
                    <div ref={aboutRef}>
                        <About />
                    </div>
                    <div ref={portfolioRef}>
                        <Experience />
                        <Qualifications />
                        <Fade />
                    </div>
                    <div ref={contactRef}>
                        <Input />
                    </div>
                    <div>
                    <Socials /> 
                    </div>
                    <Footer />
                    <Fab />
                </div>
            </div>
        )}
    </ThemeContext.Consumer>
}