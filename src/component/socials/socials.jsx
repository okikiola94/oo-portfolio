import 'animate.css';
// import "../../style/home.css";
import "./socials.css"
import ThemeContext from '../../context/themeContext/themeContext';



const Socials=()=>{
    return  <ThemeContext.Consumer>
    {context => <div className='social-buttons-container'  id={context.userTheme==="light"? "social-buttons-light":"social-buttons-dark"}>
    <div className='contact-section-dark-display'>
    <div className='contact-section-dark-display_aqua'>
    <ul className='contact-icons-link-dark__'>
      <li>  <a href="mailto:farominiyiopeyemi@gmail.com"><img src={`${process.env.PUBLIC_URL}/assets/images/email-black.png`}  alt="email" /></a></li>
      <li><a href='https://www.linkedin.com/in/opeyemi-farominiyi-99617b163'><img src={`${process.env.PUBLIC_URL}/assets/images/linkedin-black.png`}  alt="linkedin" /></a></li>
      <li><a href='https://github.com/okikiola94'><img src={`${process.env.PUBLIC_URL}/assets/images/github-black.png`}  alt="github" /></a></li>
      <li><a href='https://twitter.com/okikiola_eniola'><img src={`${process.env.PUBLIC_URL}/assets/images/twitter-black.png`}alt="twitter" /></a></li>
      <li> <a href='https://www.instagram.com/okikiolaannie/?hl=en'><img src={`${process.env.PUBLIC_URL}/assets/images/instagram-black.png`} alt="instagram" /></a></li>
    </ul>
    </div>

    </div>

    {/* <div className='contact-section-light-display'>
    <div className='contact-section-light-display_blue'>
    <ul className='contact-icons-link-light-blue'>
      <li>  <a href="mailto:farominiyiopeyemi@gmail.com"><img src={`${process.env.PUBLIC_URL}/assets/images/green-email-icon.png`} width='25px' height={'20px'} alt="email" /></a></li>
      <li><a href='https://www.linkedin.com/in/farominiyi-opeyemi-okikiola-99617b163/?originalSubdomain=ng'><img src={`${process.env.PUBLIC_URL}/assets/images/green-linkedin-icon.png`} width='30px' height={'20px'} alt="linkedin" /></a></li>
      <li><a href='https://github.com/okikiola94'><img src={`${process.env.PUBLIC_URL}/assets/images/green-github-icon.png`} width='33px' height={'23px'} alt="github" /></a></li>
      <li><a href='https://twitter.com/okikiola_eniola'><img src={`${process.env.PUBLIC_URL}/assets/images/green-twitter-icon.png`} width='30px' height={'23px'} alt="twitter" /></a></li>
      <li> <a href='https://www.instagram.com/okikiolaannie/?hl=en'><img src={`${process.env.PUBLIC_URL}/assets/images/green-instagram-icon.png`} width='28px' height={'20px'} alt="instagram" /></a></li>
    </ul>
    </div>
    </div> */}
    </div>}
    </ThemeContext.Consumer>
}

export default Socials;