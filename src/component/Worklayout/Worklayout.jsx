import "animate.css";
import Bnb from "./images/bnb.png";
import Recharge from "./images/Recharge.png";
import RPs from "./images/RPs.png";
import Mbw from "./images/magic.png";
import React, { Component, ReactNode } from "react";
import ReactDOM from "react-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation, Pagination } from "swiper";
import "./worklayout.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import React, { Component } from "react";
import ThemeContext from "../../context/themeContext/themeContext";

export default class Fade extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {(context) => (
          <div
            className="Fade"
            id={context.userTheme === "light" ? "Fade-light" : "Fade-dark"}
          >
            <AnimationOnScroll
              initiallyVisible={false}
              animateIn="animate__fadeInLeftBig"
            >
              <div className="fade-header">
                <h5>My Projects</h5>
              </div>
              <div className="swipes">
                <Swiper
                  spaceBetween={30}
                  slidesPerView={5}
                  // centeredSlides={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="mySwiper"
                  speed={1000}
                  breakpoints={{
                    320: { slidesPerView: 1, spaceBetween: 20 },
                    480: { slidesPerView: 1, spaceBetween: 20 },
                    680: { slidesPerView: 1, spaceBetween: 20 },
                    1024: { slidesPerView: 1, spaceBetween: 15 },
                  }}
                >
                  <SwiperSlide>
                    <div className="project">
                      <div className="product-image">
                        <img src={Bnb} alt="rps" />
                      </div>
                      <div className="product_text_wrap">
                        <h4>Metabnb</h4>
                        <p>
                          A Website where you can buy or rent a place virtually
                          on the metaverse.
                          <span>REACTJS</span> and <span>CSS</span>.{" "}
                        </p>

                        <div className="project-links">
                          <div className="center">
                            <button className="btn">
                              <a href="https://github.com/okikiola94/metamask">
                                See Code
                              </a>
                            </button>
                          </div>

                          <div className="center">
                            <button className="btn">
                              <a href="https://metabnb-nfts.netlify.app/">
                                 View Live
                              </a>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div class="project">
                      <div className="product-image">
                        <img src={Mbw} alt="rps" />
                      </div>
                      <div className="product_text_wrap">
                        <h4>Magic Story Writer </h4>
                        <p>
                           Kid
                          story illustratior website. This project was done with{" "}
                          <span>REACTJS, CSS</span> and <span>NODEJS</span>.{" "}
                        </p>

                        <div className="project-links">
                          <div className="center">
                            <button className="btn">
                              <a href="https://github.com/workshopapps/kidsstoryillustrator.web">
                                 See Code
                              </a>
                            </button>
                          </div>

                          <div className="center">
                            <button className="btn">
                              <a href="https://magicbookwriter.fun/">
                               View Live
                              </a>
                            </button>
                          </div>

                          {/* <a
                            href="https://github.com/workshopapps/kidsstoryillustrator.web"
                            className="project-direct-link"
                          >
                            See Code
                          </a>
                          <a
                            href="https://magicbookwriter.fun/"
                            class="live-project-link"
                          >
                            View Live
                          </a> */}
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="project">
                      <div className="product-image">
                        <img src={RPs} alt="rps" />
                      </div>
                      <div className="product_text_wrap">
                        <h4>Rock-Paper Scissors </h4>
                        <p>
                          One of the first projects i made was the famous rock,
                          paper scissors. It was built with{" "}
                          <span>HTML, CSS</span> and <span>JS</span>.{" "}
                        </p>

                        <div className="project-links">
                          {" "}
                          <div className="center">
                            <button className="btn">
                              <a href="https://github.com/okikiola94/rps">
                                See Code
                              </a>
                            </button>
                          </div>
                          <div className="center">
                            <button className="btn">
                              <a href="https://rpsgamez.netlify.app/">
                                View Live
                              </a>
                            </button>
                          </div>
                          {/* 
                          <a
                            href="https://github.com/okikiola94/rps"
                            className="project-direct-link"
                          >
                            See Code
                          </a>
                          <a
                            href="https://rpsgamez.netlify.app/"
                            class="live-project-link"
                          >
                            View Live
                          </a> */}
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div class="project">
                      <div className="product-image">
                        <img src={Recharge} alt="rps" />
                      </div>
                      <div className="product_text_wrap">
                        <h4>iRecharge </h4>
                        <p>
                          iRecharge is a distributed vending platform for making
                          Online Bills Payment. It was built with{" "}
                          <span>REACTJS </span> and <span>CSS</span>.{" "}
                        </p>

                        <div className="project-links">
                          <div className="center">
                            <button className="btn">
                              <a href="https://github.com/okikiola94/irecharge">
                                See Code
                              </a>
                            </button>
                          </div>

                          <div className="center">
                            <button className="btn">
                              <a href="https://www.irecharge.ng/">
                                View Live
                              </a>
                            </button>
                          </div>

                          {/* <a
                            href="https://github.com/okikiola94/irecharge"
                            className="project-direct-link"
                          >
                            See Code
                          </a>
                          <a
                            href="https://www.irecharge.ng/"
                            className="live-project-link"
                          >
                            View Live
                          </a> */}
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>

              {/* <a className="github-link" href="https://github.com/okikiola94">
                Visit my Github
              </a> */}
            </AnimationOnScroll>
          </div>
        )}
      </ThemeContext.Consumer>
    );
  }
}
