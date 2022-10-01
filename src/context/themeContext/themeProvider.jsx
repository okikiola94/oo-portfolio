import React from "react";
import { Component } from "react";
import { getTheme, setTheme } from "../../functions/theme";
import ThemeContext from "./themeContext";


class ThemeProvider extends Component {
    state = {
        userTheme: getTheme()
    };

    render() {
        return (
            <ThemeContext.Provider value={{ 
                    userTheme: this.state.userTheme,
                    setTheTheme: async()=>{
                        await setTheme(this.state.userTheme === 'dark' ? 'light' : 'dark').then(() => {
                            this.setState({userTheme:this.state.userTheme==='dark' ? 'light' : 'dark'});
                        });
                    }
                }}>
                {this.props.children}
            </ThemeContext.Provider>
        )
    }
}

export default ThemeProvider;