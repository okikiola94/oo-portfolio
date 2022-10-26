import "./fab.css";
import ThemeContext from "../../context/themeContext/themeContext";


const Fab = () => {
    // const [userTheme, setUserTheme] = useState(getTheme());
    // const setTheTheme = async () => {
    //     await setTheme(userTheme === 'dark' ? 'light' : 'dark').then(() => {
    //         setUserTheme(userTheme === 'dark' ? 'light' : 'dark');
    //     });
    // }
    return <ThemeContext.Consumer>
        {context =>(<img src={`${process.env.PUBLIC_URL}/assets/images/toggle-icon.png`}  id ="sun"  alt="" onClick={() => context.setTheTheme()} className={context.userTheme}/>
        ) }


        
         
          

          
    </ThemeContext.Consumer>
        
}

export default Fab;