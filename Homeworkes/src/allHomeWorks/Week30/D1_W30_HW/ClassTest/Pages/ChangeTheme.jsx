import React, { useContext } from 'react'
import GlobalContex from '../../../../../MyContext';

import './ChangeTheme.css';

export default function ChangeTheme() {
    const {info} = useContext(GlobalContex);
  return (
    <div className={info.Theme=="light"? "light-theme" : "dark-theme"}>
      
    </div>
  )
}
