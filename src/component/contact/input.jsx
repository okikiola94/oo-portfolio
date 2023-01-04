import "animate.css";
// import "../../style/home.css";
import "./contact.css";
import React from "react";
import ThemeContext from "../../context/themeContext/themeContext";
import { useState } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

const Input = () => {
  const [name, SetName] = useState("");
  const [email, SetEmail] = useState("");
  const [message, SetMessage] = useState("");
  const handleSubmit = (e) => {
    window.location.href = `mailto:${email}?subject=${name}&body=${message}`;
    e.preventDefault();
  };
  return (
    <ThemeContext.Consumer>
      {(context) => (
        <section
          className="contact-section-container"
          id={
            context.userTheme === "light"
              ? "contact_section-light"
              : "contact_section-dark"
          }
        >
          <AnimationOnScroll
            initiallyVisible={false}
            animateIn="animate__bounceIn"
          >
          <div className="contact-heading-container">
            <div className="Contact-container">
              <h5> Get In Touch</h5>
            </div>
            <div className="contact-paragraph-container">
              <p>
                Do you have a collaboration or want me to bring your ideas to
                life? I'm just a click away!!
              </p>
            </div>
          </div>
          <div className="input-container">
            <div className="form">
              <form onSubmit={handleSubmit}>
                <div className="Name-input">
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => {
                      SetName(e.target.value);
                    }}
                    name="name"
                    required
                  />
                </div>
                <div className="Email-container">
                  <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => {
                      SetEmail(e.target.value);
                    }}
                    name="email"
                    required
                  />
                </div>
                <div className="message-container">
                  <textarea
                    type="text"
                    placeholder="Enter your message"
                    value={message}
                    onChange={(e) => {
                      SetMessage(e.target.value);
                    }}
                    name="message"
                    required
                  />
                </div>
                {/* <button className="btn"> <a href="mailto:farominiyiopeyemi@gmail.com">Contact Me</a></button> */}

                <button className="btn" type="submit">Submit</button>
              </form>
            </div>
          </div>
          </AnimationOnScroll>
        </section>
      )}
    </ThemeContext.Consumer>
  );
};
export default Input;
