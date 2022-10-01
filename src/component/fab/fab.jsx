import "./fab.css";
import ThemeContext from "../../context/themeContext/themeContext";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { <fa-moon> } from '@fortawesome/free-solid-svg-icons';
// import 'font-awesome/css/font-awesome.min.css';

const Fab = () => {
    // const [userTheme, setUserTheme] = useState(getTheme());
    // const setTheTheme = async () => {
    //     await setTheme(userTheme === 'dark' ? 'light' : 'dark').then(() => {
    //         setUserTheme(userTheme === 'dark' ? 'light' : 'dark');
    //     });
    // }
    return <ThemeContext.Consumer>
        {context =>(<img src={`${process.env.PUBLIC_URL}/assets/images/dark-lightt.png`} width='55px' height={'50px'} alt="" onClick={() => context.setTheTheme()} className={context.userTheme}/>)}
        
          {/* (<div onClick={() => context.setTheTheme()} className={context.userTheme} />)}  */}
        
          {/* <FontAwesomeIcon icon="fa-solid fa-moon-stars" /> */}
          
    </ThemeContext.Consumer>
        
}

export default Fab;