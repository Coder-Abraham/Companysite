
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../assets/cosmslogo.jpg'
import {  BookOpen, Home, Phone, User, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Button } from './ui/button'

const NavBar = () => {
  const [Open, setOpen] = useState(false)
  const navigate = useNavigate()

  const toggleMenu = () => {
    setOpen(!Open)
  }

  return (
    <nav className='sticky top-0 z-50 bg-black text-white shadow-lg border-b border-gray-700 '>
      <div className='flex md:flex-col sm:col-auto p-6 gap-6 transition-all duration-300'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-4'>
            <img src={Logo} alt="Logo" className='w-24 h-24 rounded-lg border border-gray-500 '/>
            <h1 className='text-3xl ml-4 font-bold  text-white hover:text-black hover:bg-white hover:p-6 rounded-2xl transition-transform' >Cosmc Technologies</h1>
          </div>
        
          <button 
            onClick={toggleMenu}
            className='md:hidden p-2 hover:bg-gray-800 rounded-lg transition-colors duration-200'
            aria-label="Toggle menu"
          >
            {Open ? <X size={28} className='text-white' /> : <Menu size={28} className='text-white' />}
          </button>
        </div>

        <ul className={`flex gap-2 text-lg font-medium transition-all duration-300 overflow-hidden ${
          Open 
            ? 'flex-col max-h-80 opacity-100' 
            : 'hidden md:flex md:flex-row md:ml-auto md:max-h-full md:opacity-100 md:gap-1'
        }`}>
          <li className='hover:bg-gray-800 rounded-lg px-4 py-2 transition-colors duration-200'><Link to="/" className='flex items-center gap-2'><Home size={20} />Home</Link></li>
          <li className='hover:bg-gray-800 rounded-lg px-4 py-2 transition-colors duration-200'><Link to="/about" className='flex items-center gap-2'><User size={20} />About Us</Link></li>
          <li className='hover:bg-gray-800 rounded-lg px-4 py-2 transition-colors duration-200'><Link to="/Education" className='flex items-center gap-2'><BookOpen size={20} />Education</Link></li>
          <li className='hover:bg-gray-800 rounded-lg px-4 py-2 transition-colors duration-200'><Link to="/Contact" className='flex items-center gap-2'><Phone size={20} />Contact</Link></li>
          <li className='hover:bg-gray-800 rounded-lg px-4 py-2 transition-colors duration-200'><Link to="/Services" className='flex items-center gap-2'><Phone size={20} />Services</Link></li>
          <Button className='ml-0 md:ml-4 bg-linear-to-r from-gray-200 to-gray-100 text-black hover:from-white hover:to-gray-200 transition-all duration-200 font-semibold' onClick={()=>navigate('/User')}>Get Started</Button>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar