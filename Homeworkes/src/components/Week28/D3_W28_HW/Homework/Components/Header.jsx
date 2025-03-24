import React from 'react';
import {useNavigate} from 'react-router-dom';

import './header.css'

export default function Header() {
  const navigate = useNavigate()

  const handleHomeClick = () => {
    navigate('/HW9/home');
  }

  const handleProfileClick = () => {
    navigate('/HW9/profile');
  }

  const handleProjectClick = () => {
    navigate('/HW9/project');
  }

  const handleAboutMeClick = () => {
    navigate('/HW9/about');
  }

  return (
    <header>
        <input type="radio" id='home' name='options' onClick={handleHomeClick}/>
        <label htmlFor="home">Home</label>

        <input type="radio" id='profile'  name='options' onClick={handleProfileClick}/>
        <label htmlFor="profile">Profile</label>

        <input type="radio" id='project' name='options' onClick={handleProjectClick} />
        <label htmlFor="project">Projects</label>

        <input type="radio" id='about_me' name='options' onClick={handleAboutMeClick}/>
        <label htmlFor="about_me">About Me</label>
    </header>
  )
}
