import 'animate.css';
// import "../../style/home.css";
import './footer.css'
import ThemeContext from '../../context/themeContext/themeContext';


function Footer() {
    return <ThemeContext.Consumer>
    {context =>(
      <footer id={context.userTheme==="light"? "Footer-light":"Footer-dark"}>
        <small>&copy; Designed & built by Okikiola. All rights reserved.</small>
      </footer>
    )}
    </ThemeContext.Consumer>
  }


  export default Footer;