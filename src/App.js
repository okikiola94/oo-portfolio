import './App.css';
import './style/home.css';
import 'animate.css';
import React, { useEffect, useRef, useState } from "react";

import ThemeProvider from "./context/themeContext/themeProvider";
// import Parent from './component/parent/parent';
import Loader from './component/Loader/loader';




function App() {


  return (
    <ThemeProvider>
      <Loader/>
    </ThemeProvider>
  );
}

export default App;
