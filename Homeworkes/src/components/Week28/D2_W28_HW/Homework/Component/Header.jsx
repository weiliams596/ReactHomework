import React from 'react'
import {useNavigate} from 'react-router-dom'
import './header.css';


export default function Header() {
    const navigate = useNavigate()
    const handleProfileClick = () => {
        navigate('/HW8/profile')
    }
    const handleProjectClick = () => {
        navigate('/HW8/project')
    }
    const handleAboutClick = () => {
        navigate('/HW8/about')
    }
  return (
    <header>
        <button onClick={handleProfileClick}>My profile</button>
        <button onClick={handleProjectClick}>My project</button>
        <button onClick={handleAboutClick}>About me</button>
    </header>
  )
}
