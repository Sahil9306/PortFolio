import React from 'react'
import Header from './components/header/Header.jsx'
import Home from './components/home/Home.jsx'
import About from './components/about/About.jsx'
import './App.css'
import Skills from './components/Skill/Skills.jsx'
import Project from './components/projects/Project.jsx'
import Qulification from './components/Qulification/Qulification.jsx'
import Contact from './components/contact/Contact.jsx'
import Footer from './components/footer/Footer.jsx'


function App() {


  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <Skills />
        <Project />
        <Qulification />
        <Contact />
        <Footer />
      </main>
    </>
  )
}

export default App
