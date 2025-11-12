import { useState, useEffect } from 'react'

const Header = ({ menuOpen, setMenuOpen }) => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMenuOpen(false)
    }
  }       

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <nav className="flex justify-between items-center py-4 md:py-6">
          <div>
            <a 
              href="#home" 
              onClick={(e) => { e.preventDefault(); scrollToSection('home') }}
              className={`text-lg md:text-xl font-semibold transition-colors ${
                scrolled ? 'text-black hover:text-[#829CBA]' : 'text-white hover:text-gray-200'
              }`}
            >
              Dr. Devendra Kumar Sharma
            </a>
          </div>
          <button 
            className={`lg:hidden flex flex-col gap-1 bg-transparent border-none cursor-pointer p-2 ${
              menuOpen ? 'open' : ''
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 transition-all duration-300 ${
              scrolled ? 'bg-black' : 'bg-white'
            } ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`w-6 h-0.5 transition-all duration-300 ${
              scrolled ? 'bg-black' : 'bg-white'
            } ${menuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 transition-all duration-300 ${
              scrolled ? 'bg-black' : 'bg-white'
            } ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
          <ul className={`lg:flex list-none gap-6 lg:gap-8 items-center ${
            menuOpen ? 'flex' : 'hidden'
          } lg:static fixed top-[70px] left-0 right-0 bg-white lg:bg-transparent flex-col lg:flex-row py-8 lg:py-0 px-8 lg:px-0 shadow-lg lg:shadow-none transition-transform duration-300 z-40 ${
            menuOpen ? 'translate-x-0' : 'lg:translate-x-0 -translate-x-full'
          }`}>
            <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about') }} className={`text-sm font-medium transition-colors block py-2 lg:py-0 ${
              menuOpen ? 'text-black hover:text-[#829CBA]' : scrolled ? 'text-gray-700 hover:text-[#829CBA]' : 'text-white hover:text-gray-200'
            }`}>About</a></li>
            <li><a href="#research" onClick={(e) => { e.preventDefault(); scrollToSection('research') }} className={`text-sm font-medium transition-colors block py-2 lg:py-0 ${
              menuOpen ? 'text-black hover:text-[#829CBA]' : scrolled ? 'text-gray-700 hover:text-[#829CBA]' : 'text-white hover:text-gray-200'
            }`}>Research</a></li>
            <li><a href="#exhibitions" onClick={(e) => { e.preventDefault(); scrollToSection('exhibitions') }} className={`text-sm font-medium transition-colors block py-2 lg:py-0 ${
              menuOpen ? 'text-black hover:text-[#829CBA]' : scrolled ? 'text-gray-700 hover:text-[#829CBA]' : 'text-white hover:text-gray-200'
            }`}>Exhibitions</a></li>
            <li><a href="#conferences" onClick={(e) => { e.preventDefault(); scrollToSection('conferences') }} className={`text-sm font-medium transition-colors block py-2 lg:py-0 ${
              menuOpen ? 'text-black hover:text-[#829CBA]' : scrolled ? 'text-gray-700 hover:text-[#829CBA]' : 'text-white hover:text-gray-200'
            }`}>Conferences</a></li>
            <li><a href="#assignments" onClick={(e) => { e.preventDefault(); scrollToSection('assignments') }} className={`text-sm font-medium transition-colors block py-2 lg:py-0 ${
              menuOpen ? 'text-black hover:text-[#829CBA]' : scrolled ? 'text-gray-700 hover:text-[#829CBA]' : 'text-white hover:text-gray-200'
            }`}>Assignments</a></li>
            <li><a href="#memberships" onClick={(e) => { e.preventDefault(); scrollToSection('memberships') }} className={`text-sm font-medium transition-colors block py-2 lg:py-0 ${
              menuOpen ? 'text-black hover:text-[#829CBA]' : scrolled ? 'text-gray-700 hover:text-[#829CBA]' : 'text-white hover:text-gray-200'
            }`}>Memberships</a></li>
            <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact') }} className={`text-sm font-medium transition-colors block py-2 lg:py-0 ${
              menuOpen ? 'text-black hover:text-[#829CBA]' : scrolled ? 'text-gray-700 hover:text-[#829CBA]' : 'text-white hover:text-gray-200'
            }`}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header

