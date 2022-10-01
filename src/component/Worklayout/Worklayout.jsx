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
                        <div class="flex-container aos-init aos-animate" data-aos="fade">
                              <div class="profile-container port-container-1">
                                    <div class="profile-wrapper">
                                          <div class="profile-card">
                                                <h4>Rock-Paper Scissors </h4>
                                                <p>One of the first projects i made was the famous rock, paper scissors. It was built with html, css and js </p>
                                          </div>
                                          <div className='link-button'>
                                                <a href="https://www.behance.net/gallery/103542267/Media-Agency-website">View</a>
                                                </div>
                                    </div>
                              </div>

                              <div class="profile-container port-container-2">
                                    <div class="profile-wrapper">
                                          <div class="profile-card">
                                                <h4>Apple Website</h4>
                                                <p> The Apple official website which is widely known was one of my first clone project to get a hands on exerience with HTML and CSS. </p>
                                          </div>
                                          <div className='link-button'>
                                                <a href="https://www.behance.net/gallery/103542267/Media-Agency-website">View</a>
                                                </div>
                                    </div>
                              </div>

                              <div class="profile-container port-container-3">
                                    <div class="profile-wrapper">
                                          <div class="profile-card">
                                                <h4>iRecharge</h4>
                                                <p> iRecharge is a distributed vending platform for making Online Bills Payment such as Data Recharge, Airtime Topup, Prepaid Meter Recharge, Online Electricity. I cloned the website as one of my practice projects.  </p>
                                          </div>
                                          <div className='link-button'>
                                                <a href="https://www.behance.net/gallery/103542267/Media-Agency-website">View</a>
                                                </div>
                                    </div>
                              </div>
{/* 
                              <div class="profile-container port-container-4">
                                    <div class="profile-wrapper">
                                          <div class="profile-card">
                                                <h4>Afigo Website</h4>
                                                <p> Afigo website is a platform that shows tourists great places in Nigeria. The website was designed with quite a number of features that serves its purpose as a travel agency. </p>
                                                <a href="https://www.behance.net/gallery/103838821/Travel-Website">View Design</a>
                                          </div>
                                    </div>
                              </div>

                              <div class="profile-container port-container-5">
                                    <div class="profile-wrapper">
                                          <div class="profile-card">
                                                <h4>Pixelshub Mobile App</h4>
                                                <p> PixelsHub is a mobile app which connects professional photographers and creative artists to their potential clients globally. </p>
                                                <a href="https://www.behance.net/gallery/104417865/Photographers-Platform">View Profile</a>
                                          </div>
                                    </div>
                              </div>

                              <div class="profile-container port-container-6">
                                    <div class="profile-wrapper">
                                          <div class="profile-card">
                                                <h4>Tuteria Website</h4>
                                                <p> Tuteria Limited is a company which offers both onine and offline tutoring services to people. The landing page was designed to increase customer’s conversion rate and improve usability. </p>
                                                <a href="https://www.behance.net/gallery/104473567/School-Landing-Page">View Profile</a>
                                          </div>
                                    </div>
                              </div> */}
                        </div>
                  </div>
            )
            
            }
            </ThemeContext.Consumer>
      }
}







