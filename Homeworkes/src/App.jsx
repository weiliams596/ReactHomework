import React, { use, useState } from "react";
import "./App.css";


import MyRouteres from "./allHomeWorks/MyRouteres";
import GlobalContex from "./MyContext";




function App() {
  const [info,setInfo] =useState({});

  return (
    <GlobalContex.Provider value={{ info, setInfo }}>
        <MyRouteres />
    </GlobalContex.Provider>
  );
}

export default App;
