import React, { useContext, useEffect } from "react";

import GlobalContex from "../../../../../MyContext";

export default function LangSelection() {
    const {info,setInfo} = useContext(GlobalContex);
    const handleSelect = (e) => {
        setInfo({...info,langType:e.target.value});
    }
  return (
    <div className="lang-selection">
      <select name="lang" id="lang-select" onChange={handleSelect}>
        <option value="en">English</option>
        <option value="kk">Қазақша</option>
        <option value="ru">Русский</option>
      </select>
    </div>
  );
}
