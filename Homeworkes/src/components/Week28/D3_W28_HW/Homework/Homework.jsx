import React, { useEffect } from 'react'
import { Outlet,useNavigate } from 'react-router-dom'

import Header from './Components/Header'

export default function Homework() {
    const navigate = useNavigate()
    useEffect(() => {
        navigate('/HW9/home');
        
    },[]);
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    );
}

