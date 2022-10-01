import 'animate.css';
// import "../../style/home.css";
import './footer.css'
import ThemeContext from '../../context/themeContext/themeContext';


function Footer() {
    return <ThemeContext.Consumer>
    {context =>(
      <footer id={context.userTheme==="light"? "Footer-light":"Footer-dark"}>
        <p>&copy; copyright2022. All rights reserved.</p>
      </footer>
    )}
    </ThemeContext.Consumer>
  }


  export default Footer;