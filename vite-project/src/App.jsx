import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavigationBar from './components/NavigationBar'
import Body from './components/Body'
import About from './components/About'
import Projects from './components/Projects'  // Moved before Contact
import Contact from './components/Contact'
import Footer from './components/Footer'
import Experience from './components/Experience'

const App = () =>{
    return(
    <div>
        <NavigationBar></NavigationBar>
        <Body></Body>
        <About></About>
        <Experience></Experience>
        <Projects></Projects>
        <Contact></Contact>
        <Footer></Footer>
    </div>
    )
}

export default App