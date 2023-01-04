import "animate.css";
import { useState } from "react";
// import "../../style/home.css";
import "./Experience.css";
import ThemeContext from "../../context/themeContext/themeContext";
import {
  FaCss3Alt,
  FaHtml5,
  FaReact,
  FaTrello,
  FaWordpress,
} from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import {
  SiBootstrap,
  SiJquery,
  SiPowerbi,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
  SiVisualstudiocode,
  SiVite,
  SiYarn,
} from "react-icons/si";
import { FcFlowChart } from "react-icons/fc";
import { ImGit, ImNpm } from "react-icons/im";
import { RiCodeBoxFill } from "react-icons/ri";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

const Experience = () => {
  // const [showFrontEndSkill, setShowFrontEndSkill] = useState(false);
  // const [showDataScienceSkill, setShowDataScienceSkill] = useState(false);
  // const [showOperationSkill, setShowOperationSkill] = useState(false);
  return (
    <ThemeContext.Consumer>
      {(context) => (
        <div
          className="work-experience"
          id={
            context.userTheme === "light"
              ? "work_experience-light"
              : "work_experience-dark"
          }
        >
           <AnimationOnScroll
            initiallyVisible={false}
            animateIn="animate__flipInX"
          >
          <div className="experience-inner">
            <h4>Skills</h4>
          </div>
          <div className="services-wrap">
            <div className="service_flex">
              <div className="skill_outer_container">
                <div className="skills_list_container">
                  <FaHtml5 className="img-icons_btn" id="skill_01" />
                </div>
              </div>
              <p className="skills_label">Html</p>
            </div>
            <div  className="service_flex">
              <div className="skill_outer_container">
                <div className="skills_list_container">
                  <FaCss3Alt className="img-icons_btn" id="skill_02" />
                </div>
              </div>
              <p className="skills_label">Css</p>
            </div>
            <div  className="service_flex">
              <div className="skill_outer_container">
                <div className="skills_list_container">
                  <DiJavascript className="img-icons_btn" id="skill_03" />
                </div>
              </div>
              <p className="skills_label">Javascript</p>
            </div>
            <div  className="service_flex">
              <div className="skill_outer_container">
                <div className="skills_list_container">
                  <FaReact className="img-icons_btn" id="skill_04" />
                </div>
              </div>
              <p className="skills_label">React</p>
            </div>
            <div  className="service_flex"  id="none1">
              <div className="skill_outer_container">
                <div className="skills_list_container">
                  <SiTypescript className="img-icons_btn" id="skill_05" />
                </div>
              </div>
              <p className="skills_label">Typescript</p>
            </div>
            <div  className="service_flex">
              <div className="skill_outer_container">
                <div className="skills_list_container">
                  <FaWordpress className="img-icons_btn" id="skill_06" />
                </div>
              </div>
              <p className="skills_label">Wordpress</p>
            </div>
            <div  className="service_flex"id="none1">
              <div className="skill_outer_container">
                <div className="skills_list_container" >
                  <SiJquery className="img-icons_btn" id="skill_07" />
                </div>
              </div>
              <p className="skills_label">Jquery</p>
            </div>
            <div  className="service_flex">
              <div className="skill_outer_container">
                <div className="skills_list_container">
                  <RiCodeBoxFill className="img-icons_btn" id="skill_08" />
                </div>
              </div>
              <p className="skills_label">Styled Components</p>
            </div>
            <div  className="service_flex">
              <div className="skill_outer_container">
                <div className="skills_list_container">
                  <FcFlowChart className="img-icons_btn" id="skill_09" />
                </div>
              </div>
              <p className="skills_label">Context Api</p>
            </div>
            <div  className="service_flex" id="none1">
              <div className="skill_outer_container">
                <div className="skills_list_container">
                  <SiTailwindcss className="img-icons_btn" id="skill_10" />
                </div>
              </div>
              <p className="skills_label">Tailwind</p>
            </div>
            <div  className="service_flex"id="none1">
              <div className="skill_outer_container">
                <div className="skills_list_container">
                  <SiBootstrap className="img-icons_btn" id="skill_11" />
                </div>
              </div>
              <p className="skills_label">Bootstrap</p>
            </div>
            <div  className="service_flex" id="none1">
              <div className="skill_outer_container">
                <div className="skills_list_container">
                  <SiVite className="img-icons_btn" id="skill_12" />
                </div>
              </div>
              <p className="skills_label">Vite</p>
            </div>
            <div  className="service_flex">
              <div className="skill_outer_container">
                <div className="skills_list_container">
                  <ImGit className="img-icons_btn" id="skill_13" />
                </div>
              </div>
              <p className="skills_label">Git</p>
            </div>
            <div  className="service_flex">
              <div className="skill_outer_container">
                <div className="skills_list_container">
                  <ImNpm className="img-icons_btn" id="skill_14" />
                </div>
              </div>
              <p className="skills_label">Npm</p>
            </div>
            <div  className="service_flex">
              <div className="skill_outer_container">
                <div className="skills_list_container">
                  <SiYarn className="img-icons_btn" id="skill_15" />
                </div>
              </div>
              <p className="skills_label">Yarn</p>
            </div>
            <div  className="service_flex">
              <div className="skill_outer_container">
                <div className="skills_list_container">
                  <SiVisualstudiocode className="img-icons_btn" id="skill_16" />
                </div>
              </div>
              <p className="skills_label">VScode</p>
            </div>
            <div  className="service_flex" id="none1">
              <div className="skill_outer_container">
                <div className="skills_list_container">
                  <FaTrello className="img-icons_btn" id="skill_17" />
                </div>
              </div>
              <p className="skills_label">Trello</p>
            </div>
            <div  className="service_flex" id="none1">
              <div className="skill_outer_container">
                <div className="skills_list_container" >
                  <SiPowerbi className="img-icons_btn" id="skill_18" />
                </div>
              </div>
              <p className="skills_label">Powerbi</p>
            </div>
          </div>
          </AnimationOnScroll>
 
        </div>
      )}
    </ThemeContext.Consumer>
  );
};

export default Experience;
