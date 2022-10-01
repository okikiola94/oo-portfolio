import 'animate.css';
// import "../../style/home.css";
import "./contact.css";
import React, { useState } from 'react';
import ThemeContext from '../../context/themeContext/themeContext';


const Input = () => {

     const [name, SetName] = useState("")
     const [email, SetEmail] = useState("")
     const [message, SetMessage] = useState("")
     return  <ThemeContext.Consumer>
     {context =><section className="contact-section-container" id={context.userTheme==="light"? "contact_section-light":"contact_section-dark"}>
          <div className='contact-heading-container'>
          <div className='Contact-container'>
               <div className='Contact-inner-container'><h4>CONTACT ME</h4><span className='line' /></div>
               <h5> Get In Touch</h5>
          </div>
          <div className='contact-paragraph-container'>
               <p>Do you have a collaboration or want me to bring your ideas to life? I'm just a click away!!</p>
          </div>
          </div>
          <div className='input-container'>
               <div className='form'>
                    <form action="submit">
                         <div className='Name-input'>
                              <input type="text" placeholder="Full Name" value={name} onChange={(e) => { SetName(e.target.value) }} name="name" required />
                         </div>
                         <div className='Email-container'>
                              <input type="text" placeholder="Email" value={email} onChange={(e) => { SetEmail(e.target.value) }} name="email" required />
                         </div>
                         <div className='message-container'>
                              <textarea type="text" placeholder="Enter your message" value={message} onChange={(e) => { SetMessage(e.target.value) }} name="message" required />
                         </div>
                         <button type='submit'>Submit</button>
                    </form>
               </div>
          </div>
     </section>}
     </ThemeContext.Consumer>

}
export default Input;