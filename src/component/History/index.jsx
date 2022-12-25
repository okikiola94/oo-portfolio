import React from "react";
import Collapsible from "react-collapsible";
import { RxTriangleRight } from "react-icons/rx";
import ThemeContext from "../../context/themeContext/themeContext";

import "./history.css";

const History = () => {
  return (
    <ThemeContext.Consumer>
      {(context) => (
    <div className="history_wrap"id={
      context.userTheme === "light" ? "history-light" : "history-dark"
    }>
      <div className="history_text_container">
        <Collapsible trigger={[<RxTriangleRight/>, "HISTORY"]}>
          <div className="collapse_contents">
          <p className="history_text">
            I'm a Frontend Developer, who likes to design new things. I wrote my
            first line of code sometime in 2021 after my university education.
          </p>
          <p className="history_text">
            I enjoy figuring out logics behind applications and also make it
            look seemless for users, thats how I started my career in front end
            development.
          </p>
          <p className="history_text">
            Along the way, I gained a certificate in Microsoft Data Analyst
            which has given me the ability to think creatively about solving
            problems. In addition to being an excellent front-end developer, I'm
            also able to help you develop new ideas and make them a reality!
          </p>
          <p className="history_text">
            Currently, I’m focused on moving to the next stage of my career
            through collaborations, internships and job roles where i can give
            my best and learn. Don't hesitate to drop me a message for collabs
            or hello!
          </p>
          <p className="history_text">Thanks for reading 😊</p>
          </div>
        </Collapsible>

        <Collapsible trigger={[<RxTriangleRight />, "EXPERIENCE/EDUCATION"]}>
        <div className="collapse_content">
          <div>
            <p className="history_text">IT Support / Front End Developer - <span className="history_span">Crown Crystal Tech Limited</span></p>
            <p className="history_date">2021-Present | Lagos, Nigeria</p>
            <ul className="collapsible_list_wrap">
              <li className="collapsible_list_wrap">Responsible for creating wireframes, mockups and prototypes for products and seeing them to deployment.</li>
            </ul>
          </div>

          <div>
          <p className="history_text"> Front End Developer Intern - <span className="history_span">HNGi9 Cohort</span></p>
            <p className="history_date">OCT 2022 - DEC 2022 | Lagos, Nigeria</p>
            <ul className="collapsible_list_wrap">
              <li className="collapsible_list_wrap">Developed responsive websites with complete validation and authentication</li>
              <li className="collapsible_list_wrap">Passed data through component trees with Context API</li>

            </ul>
          </div>
          <div>
          <p className="history_text"> Data Analyst Intern - <span className="history_span">Women Techsters/Microsoft</span></p>
            <p className="history_date"> DEC 2021| Remote</p>
            <ul className="collapsible_list_wrap">
              <li className="collapsible_list_wrap">review data and determine how to solve problems using data, learn critical insights about a business's customers and boost profits</li>
            </ul>
          </div>
          </div>
        </Collapsible>

        <Collapsible trigger={[<RxTriangleRight />, "SKILLS"]}>
          <div className="collapse_content">
          <div>
            <p className="history_text">Languages</p>
            <ul className="collapsible_list_wrapper">
              <li className="collapsible_list_wrap">HTML</li>
              <li className="collapsible_list_wrap">CSS</li>
              <li className="collapsible_list_wrap">JAVASCRIPT</li>
              <li className="collapsible_list_wrap">TYPESCRIPT</li>
              <li className="collapsible_list_wrap">WORDPRESS</li>


            </ul>
          </div>

          <div>
            <p className="history_text">Libraries</p>
            <ul className="collapsible_list_wrapper">
              <li className="collapsible_list_wrap">REACT</li>
              <li className="collapsible_list_wrap">JQUERY</li>
              <li className="collapsible_list_wrap">STYLED COMPONENTS</li>
            </ul>
          </div>
          <div>
            <p className="history_text">Frameworks</p>
            <ul className="collapsible_list_wrapper">
            <li className="collapsible_list_wrap">CONTEXT API</li>
              <li className="collapsible_list_wrap">TAILWIND</li>
              <li className="collapsible_list_wrap">BOOTSTRAP</li>
              <li className="collapsible_list_wrap">VITE</li>
            </ul>
          </div>          
          <div>
            <p className="history_text">Tools & Systems</p>
            <ul className="collapsible_list_wrapper">
              <li className="collapsible_list_wrap">GIT</li>
              <li className="collapsible_list_wrap">NPM & YARN</li>
              <li className="collapsible_list_wrap">VSCODE</li>
              <li className="collapsible_list_wrap">TRELLO</li>
              <li className="collapsible_list_wrap">POWERBI</li>


            </ul>
          </div>
          </div>
        </Collapsible>
      </div>
    </div>
     )}
     </ThemeContext.Consumer>
  );
};
export default History;
