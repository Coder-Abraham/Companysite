import NavBar from './components/NavBar'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Services from './Pages/Services'
import Contact from './Pages/Contact'
import Account from './Pages/Account'
import Lessons from './Pages/Lessons'



function App() {
  return (
    <>
      <NavBar />
      <div className='pt-16'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/Services' element={<Services />} />
          <Route path='/Contact' element={<Contact />} />
        
          <Route path='/Account' element={<Account />} />
          <Route path='/Lessons' element={<Lessons />} />
        </Routes>
      </div>
    </>
  )
}

export default App
