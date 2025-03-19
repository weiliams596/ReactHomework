import React, { useEffect, useState } from "react";
import "./App.css";
import MyRouteres from "./components/MyRouteres";

import MyContex from './MyContext'

function App() {
  const [globalInfo, setGlobalInfo] = useState({routes:[],isHasUpdate:false});
  useEffect(() => {
    if(globalInfo.isHasUpdate){
      const routes = [...globalInfo.routes];
      if(routes.length > 0){
        const uniqueArray = routes.reduce((acc, cur) => {
          if(!acc.find(item => item.id === cur.id)){
            acc.push(cur);
          }
          return acc;
        },[]);
        setGlobalInfo({routes:uniqueArray,isHasUpdate:false});
      }
    }
  },[globalInfo.routes,globalInfo.isHasUpdate]);
  return (
    <>
      <MyContex.Provider value={{ globalInfo, setGlobalInfo }}>
        <MyRouteres />
      </MyContex.Provider>
    </>
  );
}

export default App;
