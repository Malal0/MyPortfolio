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
  const [cursorVariant, setCursorVariant] = useState("default");
  const [cursorCords, setCursorCords] = useState({
    x: 0,
    y: 0
  });

  useEffect(() => {
    const mouseMove = e => {
      setCursorCords({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    }
  }, []);

  //  variants for cursor below
  const variants = {
    default: {
      x: cursorCords.x - 24,
      y: cursorCords.y - 24,
      height: '48px'
    },
    link: {
      x: cursorCords.x - 40,
      y: cursorCords.y - 40,
      height: '80px',
      backgroundColor: 'hsla(0, 0%, 0%, .2)',
      mixBlendMode: 'difference',
      backdropFilter: 'blur(1px)'
    }
  }
  //  variants for cursor above

  //code here

  const linkEnter = () => setCursorVariant("link");
  const linkLeave = () => setCursorVariant("default");

  //code here

  return (
    <div className='App'>
      <Hero
        handleMouseEnter={linkEnter}
        handleMouseLeave={linkLeave}
      />
      <Projects
        handleMouseEnter={linkEnter}
        handleMouseLeave={linkLeave}
      />
      <Skills />
      <AboutMe />
      <MyArtwork />
      <Contact />
      <TopOfPageBtn
        handleMouseEnter={linkEnter}
        handleMouseLeave={linkLeave}
      />
      <motion.div
        className='Cursor'
        variants={variants}
        animate={cursorVariant}
      />
    </div>
  )
}

export default App
