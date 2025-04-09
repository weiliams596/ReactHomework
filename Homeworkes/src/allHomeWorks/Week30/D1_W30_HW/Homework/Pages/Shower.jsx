import React, {  useContext, useEffect, useState } from 'react';
import LangSelection from '../Components/LangSelection';
import GlobalContex from '../../../../../MyContext';

import Langs from '../Assets/lang.config.json';

export default function Shower() {
    const [lang,setLang] = useState('en');
    const {info} = useContext(GlobalContex);
    useEffect(()=>{
        setLang();
    },[info.langType]);
  return (
    <div className='lang-select-shower'>
      <LangSelection />
    </div>
  )
}
