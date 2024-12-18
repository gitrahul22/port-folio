import React from 'react'
// import './App.css'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Skill from './components/Skills/Skill'
import Works from './components/Works/Works'
import Cont from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Hero />
      <Skill />
      <Works />
      <Cont />
      <Footer />
    </div>
  )
}

export default App