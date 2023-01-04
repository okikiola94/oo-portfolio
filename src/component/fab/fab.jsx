import "./fab.css";
// import "../.././style.css";
import ThemeContext from "../../context/themeContext/themeContext";
import { MdDarkMode } from "react-icons/md";
import { CiSun } from "react-icons/ci";

import { useState } from "react";

const Fab = () => {
  const [userTheme, setUserTheme] = useState(false);
  const setTheTheme = async () => {
      await setTheTheme(userTheme === 'dark' ? 'light' : 'dark').then(() => {
          setUserTheme(userTheme === 'dark' ? 'light' : 'dark');
      });
  }
  return (
    <ThemeContext.Consumer>
      {(context) => (
        <button
        id="sun"
        onClick={() => context.setTheTheme()}
          className={context.userTheme}
        > 
        {userTheme ? (
                      <CiSun className="light" />
                    ) : (
                      <CiSun className="dark" />
                    )}
        </button> 
      )}
       {/* {(context) => (
        <MdDarkMode
          id="dark"
          onClick={() => context.setTheTheme()}
          className={context.userTheme}
        />  
      )} */}
    </ThemeContext.Consumer>
  );
};

export default Fab;
