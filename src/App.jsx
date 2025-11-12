import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Research from './components/Research'
import Exhibitions from './components/Exhibitions'
import Conferences from './components/Conferences'
import Assignments from './components/Assignments'
import Memberships from './components/Memberships'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Hero />
      <About />
      <Research />
      <Exhibitions />
      <Conferences />
      <Assignments />
      <Memberships />
      <Contact />
      <Footer />
    </div>
  )
}

export default App

