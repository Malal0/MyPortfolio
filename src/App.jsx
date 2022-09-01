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
  const cursor = document.querySelector('.Cursor'); //  ref to cursor div

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

  //  variants for cursor below
  const variants = {
    default: {
      x: cursorCords.x,
      y: cursorCords.y
    },
    link: {
      x: cursorCords.x,
      y: cursorCords.y,
      height: '5em',
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
