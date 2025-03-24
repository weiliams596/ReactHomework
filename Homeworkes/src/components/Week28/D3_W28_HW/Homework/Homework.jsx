import React, { useEffect } from 'react';
import {Outlet, useNavigate} from "react-router-dom";

import Header from './Components/Header'

export default function Homework() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}
