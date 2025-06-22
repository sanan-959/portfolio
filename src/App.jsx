import { useState } from 'react'
import './App.css'
import Navebar from './components/Navebar'
import Hero from './components/Hero'
import About from './components/About'
import Service from './components/Service'
import Project from './components/Project'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navebar/>
      <Hero/>
      <About/>
      <Service/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
