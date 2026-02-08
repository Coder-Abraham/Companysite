import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Zap, Shield, Rocket } from 'lucide-react'
import Pic from '../assets/img3.jpg'
import Footer from "@/components/Footer"
import { useNavigate } from "react-router-dom"

const Home = () => {
  const navigate = useNavigate()
  return (
    <div className='bg-black text-white min-h-screen flex flex-col'>
      
      <div className='flex-1 flex flex-col lg:flex-row gap-8 p-8 max-w-7xl mx-auto items-center justify-center w-full'>
        <div className='flex-1 space-y-6'>
          <div className='space-y-4'>
            <h1 className='text-5xl lg:text-7xl font-bold  text-white'>
              Transform Your Digital Presence
            </h1>
            <p className='text-xl text-gray-300 leading-relaxed max-w-xl'>
              We build cutting-edge digital solutions that help businesses thrive in the modern world. From web development to cloud hosting, we've got you covered.
            </p>
          </div>
          <div className='flex flex-col sm:flex-row gap-4 pt-4'>
            <Button className=' bg-white text-black px-8 py-3 text-lg rounded-lg 
            shadow-lg transition-all duration-300 font-semibold flex items-center gap-2 hover:text-white' onClick={()=>navigate('/Services')}>
              Explore Services <ArrowRight size={20} />
            </Button>
        
          </div>
        </div>
        <div className='flex-1 w-full'>
          <img src={Pic} alt="Cosmc Tech" className='rounded-2xl w-full h-96 lg:h-full object-cover shadow-2xl border border-gray-700 hover:border-gray-500 transition-colors duration-300' />
        </div>
      </div>

      <div className='bg-gray-950 border-t border-gray-800 py-16 px-8'>
        <div className='max-w-7xl mx-auto'>
          <h2 className='text-4xl font-bold text-center mb-12 bg-linear-to-r from-white to-gray-400 bg-clip-text text-transparent'>Why Choose Us</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {[
              { icon: Zap, title: 'High Performance', desc: 'Lightning-fast solutions optimized for speed and efficiency' },
              { icon: Shield, title: 'Secure & Reliable', desc: 'Enterprise-grade security to protect your business' },
              { icon: Rocket, title: 'Scalable Solutions', desc: 'Grow your business without technical limitations' }
            ].map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card key={index} className='bg-black border border-gray-700 hover:border-white transition-all duration-300 hover:shadow-2xl card-glow'>
                  <CardContent className='p-6 space-y-4'>
                    <Icon className='w-12 h-12 text-gray-300' />
                    <h3 className='text-xl font-bold text-white'>{feature.title}</h3>
                    <p className='text-gray-400'>{feature.desc}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
<Footer/>
      
    </div>
  )
}

export default Home