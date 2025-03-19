import React, { useContext, useEffect } from "react";

import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import NotFound from "./Pages/NotFund";

import GlobalContext from "../../../../MyContext";
export default function ClassTest() {
  const { globalInfo, setGlobalInfo } = useContext(GlobalContext);
  useEffect(() => {
    if(!globalInfo.routes.find((route) => route.id === 8001)){
      const newArray = [{ id: 8001, path: "/CT8/test", element: NotFound }, { id: 8002, path: "/CT8/Contact", element: Contact, },];
      newArray.push(... globalInfo.routes);
      setGlobalInfo({routes: newArray ,isHasUpdate: true});
    }
  }, []);

  return (
    <div>
      <Home />
    </div>
  );
}
