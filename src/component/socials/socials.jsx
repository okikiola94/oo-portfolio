import "animate.css";
// import "../../style/home.css";
import "./socials.css";
import ThemeContext from "../../context/themeContext/themeContext";
import { BsInstagram, BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FiTwitter } from "react-icons/fi";

const Socials = () => {
  return (
    <ThemeContext.Consumer>
      {(context) => (
        <div
          className="social-buttons-container"
          id={
            context.userTheme === "light"
              ? "social-buttons-light"
              : "social-buttons-dark"
          }
        >
          <div className="contact-section-dark-display">
            <div className="contact-section-dark-display_aqua">
              <ul className="contact-icons-link-dark__">
                <li>
                  <a href="https://twitter.com/okikiola_eniola">
                    <FiTwitter />
                  </a>
                </li>
                <li>
                  <a href="mailto:farominiyiopeyemi@gmail.com">
                    <HiOutlineMail />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/okikiolaannie/?hl=en">
                    <BsInstagram />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/okikiola94">
                    <BsGithub />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/opeyemi-farominiyi-99617b163">
                    <FaLinkedinIn />
                  </a>
                </li>
              </ul>
              <div className="vl"></div>
            </div>
          </div>
        </div>
      )}
    </ThemeContext.Consumer>
  );
};

export default Socials;
