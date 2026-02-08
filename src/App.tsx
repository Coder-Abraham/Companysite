import NavBar from './components/NavBar'

import About from './Pages/About';
import Contact from './Pages/Contact';

import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'
import Education from './Pages/Education';
import Services from './Pages/Services';
import User from './Pages/User';
function App() {


  return (
    <>

     <NavBar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/Education' element={<Education/>}/>
      <Route path='/Services' element={<Services/>}/>
      <Route path='/User' element={<User/>}/>
    </Routes>
     
    </>
  )
}

export default App
