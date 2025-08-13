import { useState } from 'react'

// Stylesheets
import './styles/fonts.css'
import './styles/styles.css'
import './styles/scrollbar.css'
import './styles/navigation-bar.css'
import './styles/hero.css'
import './styles/room-selection.css'
import './styles/logsignup.css'
import './styles/room.css'
import './styles/about.css'
import './styles/contact.css'
import './styles/profile.css'

// Scripts
import NavigationBar from './components/NavigationBar.jsx'
import Home from './components/Home.jsx'
import Room from './components/Room.jsx'
import Login from './components/Login.jsx'
import Profile from './components/Profile.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'

function App() {
  return (
    <>
      <Login />
    </>
  )
}

export default App
