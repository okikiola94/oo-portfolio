import "animate.css";
import Bnb from "./images/bnb.png";
import Recharge from "./images/Recharge.png";
import RPs from "./images/RPs.png";
import Mbw from "./images/magic.png";

import "./worklayout.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
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
            <div className="fade-header">
              <h5>My Projects</h5>
            </div>
            <div class="projects-grid">
              <div className="project">
                <div className="product-image">
                  <img src={Bnb} alt="rps" />
                </div>
                <div className="product_text_wrap">
                  <h4>Metabnb</h4>
                  <p>
                    A Website where you can buy or rent a place virtually on the
                    metaverse.
                    <span>REACTJS</span> and <span>CSS</span>.{" "}
                  </p>

                  <div className="project-links">
                    <a
                      href="https://github.com/okikiola94/metamask"
                      className="project-direct-link"
                    >
                      See Code
                    </a>
                    <a
                      href="https://metabnb-nfts.netlify.app/"
                      className="live-project-link"
                    >
                      View Live
                    </a>
                  </div>
                </div>
              </div>

              <div class="project">
                <div className="product-image">
                  <img src={Mbw} alt="rps" />
                </div>
                <div className="product_text_wrap">
                  <h4>Weather-Telling-WebApp </h4>
                  <p>
                    One of the first projects i made was the famous rock, paper
                    scissors. It was built with <span>HTML, CSS</span> and{" "}
                    <span>JS</span>.{" "}
                  </p>

                  <div className="project-links">
                    <a
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
                    </a>
                  </div>
                </div>
              </div>

              <div className="project">
                <div className="product-image">
                  <img src={RPs} alt="rps" />
                </div>
                <div className="product_text_wrap">
                  <h4>Rock-Paper Scissors </h4>
                  <p>
                    One of the first projects i made was the famous rock, paper
                    scissors. It was built with <span>HTML, CSS</span> and{" "}
                    <span>JS</span>.{" "}
                  </p>

                  <div className="project-links">
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
                    </a>
                  </div>
                </div>
              </div>

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
                    <a
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
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <a className="github-link" href="https://github.com/okikiola94">
              Visit my Github
            </a>
          </div>
        )}
      </ThemeContext.Consumer>
    );
  }
}
