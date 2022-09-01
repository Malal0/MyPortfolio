import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import AboutMe from './components/AboutMe'
import MyArtwork from './components/MyArtwork'
import Contact from './components/Contact'
import TopOfPageBtn from './components/TopOfPageBtn'
// import Cursor from './components/Cursor'
import './components/cursor.css'
import './App.css'

function App() {
  const cursor = document.querySelector('.Cursor');

  //  code here

  const [cursorVariant, setCursorVariant] = useState("default");
  const [cursorCords, setCursorCords] = useState({
    x: 0,
    y: 0
  });

  useEffect(() => {
    const mouseMove = e => {
      setCursorCords({
        x: e.clientX - cursor.clientHeight / 2,
        y: e.clientY - cursor.clientWidth / 2
      })
    }

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    }
  }, []);

  const variants = {
    default: {
      x: cursorCords.x,
      y: cursorCords.y,
      rotate: 360,
      delay: 2,
      duration: 5
    },
    initial: {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
      rotate: 0,
    }
  }

  //  code here

  return (
    <div className='App'>
      <Hero />
      <Projects />
      <Skills />
      <AboutMe />
      <MyArtwork />
      <Contact />
      <TopOfPageBtn />
      <motion.div
        className='Cursor'
        variants={variants}
        initial="initial"
        animate="default"
      />
    </div>
  )
}

export default App
