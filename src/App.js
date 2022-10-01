import './App.css';
import './style/home.css';
import 'animate.css';
import React, { useEffect, useRef, useState } from "react";

import ThemeProvider from "./context/themeContext/themeProvider";
// import Parent from './component/parent/parent';
import PreLoader from './component/loading-page/preloader';




function App() {


  return (
    <ThemeProvider>
      <PreLoader/>
    </ThemeProvider>
  );
}

export default App;
