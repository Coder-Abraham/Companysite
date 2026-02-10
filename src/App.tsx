import NavBar from './components/NavBar'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Services from './Pages/Services'
import Contact from './Pages/Contact'
import Account from './Pages/Account'
import Education from './Pages/Education'


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
           <Route path='/Academics' element={<Education />} />
          <Route path='/Account' element={<Account />} />
        </Routes>
      </div>
    </>
  )
}

export default App
