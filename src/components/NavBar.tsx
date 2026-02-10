import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from '../assets/cosmslogo.jpg'
import {  BookOpen, Home, Phone, User, Menu, X } from 'lucide-react'
import SearchBar from './SearchBar'
import { Button } from './ui/button'

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate()

  const navLinks = [
    { label: 'Home', path: '/', icon: Home },
    { label: 'About', path: '/about', icon: User },
    { label: 'Services', path: '/Services', icon: BookOpen },
    { label: 'Contact', path: '/contact', icon: Phone },
     { label: 'Lessons', path: '/Lessons', icon: BookOpen },
  ]

  return (
    <nav className='fixed top-0 w-full bg-linear-to-r from-slate-950 via-slate-900 to-purple-950 border-b border-purple-500/20 z-40 backdrop-blur-sm'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          
          <div className='shrink-0 flex items-center gap-3 cursor-pointer' onClick={() => navigate('/')}>
            <img src={Logo} alt='Logo' className='h-10 w-10 rounded-full' />
            <span className='text-white font-bold text-xl hidden sm:inline md:inline'>CosmcTech</span>
          </div>

        
          <div className='hidden md:block flex-1 mx-8'>
            <SearchBar />
          </div>

       
          <div className='hidden md:flex items-center gap-1'>
            {navLinks.map((link) => (
              <Button
                key={link.path}
                variant='ghost'
                size='sm'
                onClick={() => navigate(link.path)}
                className='text-slate-300 hover:text-white hover:bg-purple-500/10 transition-colors'
              >
                {link.label}
              </Button>
            ))}
          </div>

        
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className='md:hidden p-2 rounded-lg hover:bg-purple-500/10 text-slate-300 transition-colors'
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

      
        {isMenuOpen && (
          <div className='md:hidden pb-4 border-t border-purple-500/10'>
        
            <div className='mb-4 pt-4'>
              <SearchBar />
            </div>

            <div className='flex flex-col gap-2'>
              {navLinks.map((link) => (
                <button
                  key={link.path}
                  onClick={() => {
                    navigate(link.path)
                    setIsMenuOpen(false)
                  }}
                  className='w-full text-left px-4 py-2 text-slate-300 hover:text-white hover:bg-purple-500/10 rounded-lg transition-colors flex items-center gap-2'
                >
                  <link.icon size={18} />
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavBar