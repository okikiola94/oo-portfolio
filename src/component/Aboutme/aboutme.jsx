import "animate.css/animate.min.css";
import images from "./images/myimg1_light.png";
import History from "../History";
import "./aboutme.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";
import ThemeContext from "../../context/themeContext/themeContext";

const About = () => {
  return (
    <ThemeContext.Consumer>
      {(context) => (
        <div
          className="about-me"
          id={
            context.userTheme === "light" ? "about_me-light" : "about_me-dark"
          }
        >
          <AnimationOnScroll
            initiallyVisible={false}
            animateIn="animate__fadeInLeft"
          >
            <div className="about-me-inner">
              <div className="inner_flex">
                <div className="inner-paragraph-grid">
                  {/* <div className="my-image">
                    <img src={images} alt="" />
                  </div> */}
                  <div className="paragraph-container">
                    <div className="about-me-header">
                      <h5 class="animate__animated animate__zoomIn">
                        Get to know me
                      </h5>
                    </div>
                    <p class="animate__animated animate__zoomIn">
                      I am a self-taught Front End Developer and school-taught
                      Environmental Engineer from Lagos, Nigeria.
                    </p>
                    <p class="animate__animated animate__zoomIn">
                      I build websites with focus on responsive design, pleasing
                      asthetics and great user experience.
                    </p>
                    <p class="animate__animated animate__zoomIn">
                      When I'm not writing codes, I'm either reading a thriller
                      book or listening to music. I am open to collaborations
                      and job opportunities. So, drop a message to share ideas
                      or playlists!!
                    </p>
                    <div className="about_dropdown">
                      <History />
                    </div>
                  </div>
                </div>
                <div
                  className="animate__animated animate__zoomIn"
                  id="container"
                >
                  <div className="center">
                    <button className="btn">
                      <a href="https://drive.google.com/file/d/1a3jEZetxNPdfd9iSvhfNknm5ojY6gu73/view?usp=sharing">
                        View My Resume →
                      </a>
                    </button>
                  </div>
                </div>
                {/* <a href="https://drive.google.com/file/d/12n-hMBmyj7L-imdTH0DmMJOmXQClXEup/view?usp=sharing">
                  <button className="animate__animated animate__zoomIn">
                    View My Resume →
                  </button>
                </a> */}
              </div>
            </div>
          </AnimationOnScroll>
        </div>
      )}
    </ThemeContext.Consumer>
  );
};

export default About;
