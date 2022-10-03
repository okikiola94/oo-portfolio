import 'animate.css';
// import "../../style/home.css";
import "./worklayout.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from 'react';
import ThemeContext from '../../context/themeContext/themeContext';




export default class Fade extends Component {
      render() {

            return <ThemeContext.Consumer>
            {context => (<div className='Fade' id={context.userTheme==="light"? "Fade-light":"Fade-dark"}>
                        <div className='fade-header'>
                              <h4>PORTFOLIO</h4>
                              <h5>Some of my works</h5>
                        </div>

<div class="projects-grid">

<div class="project">
      <div className='product-image'>
                        <img src={`${process.env.PUBLIC_URL}/assets/images/iRecharge-screenshot.png`}  alt='rps' />   
                          </div>
                          <h4>iRecharge </h4>
                          <p>iRecharge is a distributed vending platform for making Online Bills Payment such as Data, Airtime, Prepaid Meter Recharge, Online Electricity. I replicated the website as one of my practice projects using <span>REACTJS </span> and <span>CSS</span>. </p>
            
                        <div class="project-links">
                              <a href="https://github.com/okikiola94/rps" target="_blank" rel="noreferrer" className='project-direct-link'>See Code</a>
                              <a href="https://rpsgamez.netlify.app/" target="_blank" rel="noreferrer" class="live-project-link">View Live</a>
                              </div></div>
     
                              <div class="project">
      <div className='product-image'>
                        <img src={`${process.env.PUBLIC_URL}/assets/images/weather-screenshot.png`}  alt='rps' />   
                          </div>
                          <h4>Weather-Telling-WebApp </h4>
                          <p>One of the first projects i made was the famous rock, paper scissors. It was built with <span>HTML, CSS</span> and <span>JS</span>. </p>
                 
                        <div class="project-links">
                              <a href="https://github.com/okikiola94/rps" target="_blank" rel="noreferrer" className='project-direct-link'>See Code</a>
                              <a href="https://rpsgamez.netlify.app/" target="_blank" rel="noreferrer" class="live-project-link">View Live</a>
                              </div></div>
                              

                              <div class="project">
      <div className='product-image'>
                        <img src={`${process.env.PUBLIC_URL}/assets/images/rps-screenshot.png`}  alt='rps' />   
                          </div>
                          <h4>Rock-Paper Scissors </h4>
                          <p>One of the first projects i made was the famous rock, paper scissors. It was built with <span>HTML, CSS</span> and <span>JS</span>. </p>
                  
                        <div class="project-links">
                              <a href="https://github.com/okikiola94/rps" target="_blank" rel="noreferrer" className='project-direct-link'>See Code</a>
                              <a href="https://rpsgamez.netlify.app/" class="live-project-link">View Live</a>
                              </div></div>
                              

                              <div class="project">
      <div className='product-image'>
                        <img src={`${process.env.PUBLIC_URL}/assets/images/apple-screenshot.png`}  alt='rps' />   
                          </div>
                          <h4>Apple website replica </h4>
                          <p>The Apple official website which is widely known was one of my first  project to get a pratical experience with <span>HTML</span> and <span>CSS</span>. </p>
                 
                        <div class="project-links">
                              <a href="https://github.com/okikiola94/rps" target="_blank" rel="noreferrer" className='project-direct-link'>See Code</a>
                              <a href="https://rpsgamez.netlify.app/" target="_blank" rel="noreferrer" class="live-project-link">View Live</a>
                              </div></div>
<a className='github-link'></a>
                              </div>



                        {/* <div class="flex-container aos-init aos-animate" data-aos="fade">
                              <div className='profile-container-inner-grid'>
                        <div className='product-image'>
                        <img src={`${process.env.PUBLIC_URL}/assets/images/rps-screenshot.png`}  alt='rps' />   
                          </div>
                              <div class="profile-container port-container-1">
                                    <div class="profile-wrapper">
                                          <div class="profile-card">
                                                <h4>Rock-Paper Scissors </h4>
                                                <p>One of the first projects i made was the famous rock, paper scissors. It was built with html, css and js </p>
                                          </div>
                                          <div className='link-button'>
                                                <a href="https://rpsgamez.netlify.app/">View</a>
                                                </div>
                                    </div>
                              </div>
                              </div>
                              <div className='profile-container-inner-grid'>
                           <div className='product-image'>
                           <img src={`${process.env.PUBLIC_URL}/assets/images/rps-screenshot.png`}  alt='rps' />
                           </div>

                              <div class="profile-container port-container-2">
                                    <div class="profile-wrapper">
                                          <div class="profile-card">
                                                <h4>Apple Website</h4>
                                                <p> The Apple official website which is widely known was one of my first clone project to get a hands on exerience with HTML and CSS. </p>
                                          </div>
                                          <div className='link-button'>
                                                <a href="https://rpsgamez.netlify.app/">View</a>
                                                </div>
                                    </div>
                              </div>
                              </div>

                              <div className='profile-container-inner-grid'>

                              <div className='product-image'>
                              <img src={`${process.env.PUBLIC_URL}/assets/images/rps-screenshot.png`}  alt='rps' />  
                                          </div>

                              <div class="profile-container port-container-3">
                                    <div class="profile-wrapper">
                                        
                                          <div class="profile-card">
                                                <h4>iRecharge</h4>
                                                <p> iRecharge is a distributed vending platform for making Online Bills Payment such as Data, Airtime, Prepaid Meter Recharge, Online Electricity. I cloned the website as one of my practice projects.  </p>
                                          </div>
                                          <div className='link-button'>
                                                <a href="https://rpsgamez.netlify.app/">View</a>
                                                </div>
                                    </div>
                              </div>
                              </div>

                             
                        </div> */}
                  </div>
            )
            
            }
            </ThemeContext.Consumer>
      }
}







