import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Homework() {
    const navigate = useNavigate()
    useEffect(()=>{
        navigate('/HW9/home');
    });
  return (
    <div></div>
  )
}
