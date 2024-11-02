import { useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Navbar from './components/Navbar'
import About from './components/About'
import Projects from './components/Projects'


function App() {

  return (
    <>
      <div className="orbitron-family min-h-full bg-[url('/img/AndroidCompact480.png')] md:bg-[url('/img/Hackbit_Wallpaper.png')] bg-cover bg-center">
        {/* Navbar  */}
        <Navbar />
        {/* Heading  */}
        <Header />
        {/* <About /> */}
      </div>
      <About />
      <div>
        <hr className='border-2 border-dotted border-[#24b043]' />
      </div>
      <Projects />
    </>
  )
}

export default App
