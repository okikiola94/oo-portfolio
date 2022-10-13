import 'animate.css';
// import "../../style/home.css";
import "./aboutme.css"
import ThemeContext from '../../context/themeContext/themeContext';

const About = () => {
    return  <ThemeContext.Consumer>
    {context => (<div className="about-me" id={context.userTheme==="light"? "about_me-light":"about_me-dark"}>
            <div className='about-me-inner'>
               <div className='about-me-header'>
                <div className='about-me-header-inner'>
                <h4 class="animate__animated animate__zoomIn">About Me</h4>
               
                </div>
                <h5 class="animate__animated animate__zoomIn">Get to know me</h5>
                </div>
                <div className='inner-paragraph-grid'>

<div className='transparent-div'>
                <div className='my-image'>
                <img src={`${process.env.PUBLIC_URL}/assets/images/Avatar.png`}  alt="woman-tech" />
                </div>
                </div>

                <div className='paragraph-container'>
                    <p class="animate__animated animate__zoomIn">I am a developer from Lagos, Nigeria. My main goal is to develop engaging and interactive digital experiences on the web. I also enjoy manipulating large amounts of data in order to provide a reasonable analysis.
</p>
                    <p class="animate__animated animate__zoomIn"> Similarly, I have practical experience in operations management.(I did this for two years with Nigeria's two largest e-commerce hubs.)</p>
                    <p class="animate__animated animate__zoomIn"> My analytical background has given me the ability to think creatively about solving problems. In addition to being an excellent front-end developer, I'm also able to help you develop new ideas and make them a reality! </p>
                    <p class="animate__animated animate__zoomIn">When I'm not writing codes, I'm either reading a thriller book or listening to music.   
                         I am open to collaborations and job opportunities. So, drop a message to share ideas or playlists!!
                    </p>
                    <a href='https://docs.google.com/document/d/11d6vz3_Sp7t0fE9eFQvNb3wRJjbVpMG1/edit?usp=sharing&ouid=117768581770838537650&rtpof=true&sd=true'><button className='animate__animated animate__zoomIn'>View My Resume →</button></a>
                </div>
                
                </div>
            </div>

        </div> )}
    </ThemeContext.Consumer>

}


export default About;