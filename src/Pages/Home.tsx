import firstImage from '../assets/bg7.jpg'
import { Zap, Shield, Rocket, Star, ChevronRight, Cloud, Code, Globe, Lock } from 'lucide-react'
import Footer from '@/components/Footer'
import { useNavigate } from 'react-router-dom'
import { Card } from '@/components/ui/card'

const Home = () => {
  const navigate = useNavigate()
  return (
    <div className='w-full bg-page'>
  
      <section className='relative w-full justify-center flex items-center overflow-hidden pt-8'>
        <div className='relative text-center px-4 sm:px-6 lg:px-8 max-w-6xl py-20'>
          <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 bg-linear-to-r from-white via-blue-100 to-purple-300 bg-clip-text text-transparent leading-tight tracking-tight animate-fadeIn'>
            Use Technology to Transform Your Business
          </h1>
          <p className='text-lg sm:text-xl text-slate-300 mb-16 mt-5 max-w-3xl mx-auto'>
            Unlock innovation, accelerate growth, and dominate your industry with cutting-edge technology solutions
          </p>
          
         
          <div className='flex flex-col sm:flex-row gap-4 justify-center mb-20'>
            <button 
              onClick={() => navigate('/Account')}
              className='px-8 py-4 bg-linear-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-500/50 flex items-center justify-center gap-2'
            >
              Start Free Trial <ChevronRight size={20} />
            </button>
            <button className='px-8 py-4 border border-purple-500/30 hover:border-purple-300 text-white font-semibold rounded-full transition-all duration-300 hover:bg-purple-500/10' onClick={()=>navigate('/Contact')}>
              Schedule Demo
            </button>
          </div>

   
          <div className='flex flex-col lg:flex-row items-start gap-8 lg:gap-12 mt-8'>
           
            <div className='w-full lg:w-1/2'>
              <div className='relative group'>
                <Card className='overflow-hidden border-none shadow-2xl rounded-2xl  hover:shadow-2xl  transition-all duration-300 cursor-pointer'>
                  <img 
                    src={firstImage} 
                    alt='' 
                    className='w-full h-64 sm:h-80 md:h-96 object-cover transform group-hover:scale-100 transition-transform duration-700 border-white border-2 rounded-2xl' 
                  />
                  <div className='absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
                </Card>
                
              </div>
            </div>

         
            <div className='w-full lg:w-1/2'>
              <Card className='p-6 sm:p-8 rounded-2xl transition-all  group border-3 hover:border-white border-purple-500'>
             
                <div className='flex items-start mb-6 '>
                  <div>
                    <h2 className='text-2xl md:text-3xl font-bold text-white mb-2'>Elevate Your Digital Journey</h2>
                    <p className='text-white'>Comprehensive solutions for modern businesses</p>
                  </div>
                </div>

           
                <div className='space-y-6 text-lg text-white'>
                  <p className='leading-relaxed'>
                    From web design and development to cloud solutions, cybersecurity, and digital marketing, we have the expertise to elevate your business to new heights.
                  </p>
                  
                  <div className=' pl-6 py-4 rounded-r-lg'>
                    <p className='italic'>
                      "Our team of experts is dedicated to delivering innovative solutions that drive results and help you stay ahead of the competition."
                    </p>
                  </div>
                  
                  <p className='leading-relaxed'>
                    Whether you're a startup looking to establish your online presence or an established enterprise seeking to optimize your operations, we have the tools and knowledge to help you succeed in the digital age.
                  </p>
                </div>
                <div className='mt-8'>
                  <button 
                    onClick={() => navigate('/services')}
                    className='w-full py-3 bg-linear-to-r from-purple-900/30 to-blue-900/30 border border-purple-500/30 hover:border-purple-300 hover:bg-linear-to-r hover:from-purple-900/40 hover:to-blue-900/40 text-white font-medium rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-purple-500/20'
                  >
                    Explore All Services <ChevronRight size={18} />
                  </button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>


      <section className='relative py-24 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-slate-900/50 to-purple-950/40 z-20'>
        <div className='max-w-6xl mx-auto'>
          <h2 className='text-4xl md:text-5xl font-black text-center mb-20 bg-linear-to-r from-white to-blue-200 bg-clip-text text-transparent'>
            Why Choose Us
          </h2>
          
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8'>
            <div className='group p-8 rounded-2xl border border-purple-500/20 bg-linear-to-br from-purple-500/10 to-blue-500/5 hover:border-purple-500/40 hover:bg-linear-to-br hover:from-purple-500/15 hover:to-blue-500/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/20 cursor-pointer'>
              <div className='w-16 h-16 mb-6 mx-auto bg-linear-to-br from-purple-600 to-indigo-600 rounded-xl flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-6 transition-transform'>
                <Zap size={32} />
              </div>
              <h3 className='text-xl font-bold text-white mb-3'>Lightning Fast</h3>
              <p className='text-slate-300 leading-relaxed'>Experience blazing-fast performance with our optimized infrastructure and cutting-edge technology stack.</p>
            </div>
            
            <div className='group p-8 rounded-2xl border border-purple-500/20 bg-linear-to-br from-purple-500/10 to-blue-500/5 hover:border-purple-500/40 hover:bg-linear-to-br hover:from-purple-500/15 hover:to-blue-500/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/20 cursor-pointer'>
              <div className='w-16 h-16 mb-6 mx-auto bg-linear-to-br from-purple-600 to-indigo-600 rounded-xl flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-6 transition-transform'>
                <Shield size={32} />
              </div>
              <h3 className='text-xl font-bold text-white mb-3'>Secure & Reliable</h3>
              <p className='text-slate-300 leading-relaxed'>Enterprise-grade security measures protect your data with 99.9% uptime guarantee and advanced encryption.</p>
            </div>
            
            <div className='group p-8 rounded-2xl border border-purple-500/20 bg-linear-to-br from-purple-500/10 to-blue-500/5 hover:border-purple-500/40 hover:bg-linear-to-br hover:from-purple-500/15 hover:to-blue-500/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/20 cursor-pointer'>
              <div className='w-16 h-16 mb-6 mx-auto bg-linear-to-br from-purple-600 to-indigo-600 rounded-xl flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-6 transition-transform'>
                <Rocket size={32} />
              </div>
              <h3 className='text-xl font-bold text-white mb-3'>Scale with Ease</h3>
              <p className='text-slate-300 leading-relaxed'>Grow your business without limits. Our scalable solutions grow alongside your ambitions.</p>
            </div>
            
            <div className='group p-8 rounded-2xl border border-purple-500/20 bg-linear-to-br from-purple-500/10 to-blue-500/5 hover:border-purple-500/40 hover:bg-linear-to-br hover:from-purple-500/15 hover:to-blue-500/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/20 cursor-pointer'>
              <div className='w-16 h-16 mb-6 mx-auto bg-linear-to-br from-purple-600 to-indigo-600 rounded-xl flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-6 transition-transform'>
                <Star size={32} />
              </div>
              <h3 className='text-xl font-bold text-white mb-3'>24/7 Support</h3>
              <p className='text-slate-300 leading-relaxed'>Our dedicated support team is always ready to help you succeed, anytime, anywhere.</p>
            </div>
          </div>
        </div>
      </section>

    
      <section className='py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-slate-900/80 to-slate-950 border-t border-purple-500/20 z-20'>
        <div className='max-w-6xl mx-auto'>
          <h2 className='text-3xl md:text-4xl font-bold text-white text-center mb-12'>
            Trusted by Industry Leaders
          </h2>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
            <div className='text-center p-6 bg-linear-to-br from-slate-800/30 to-slate-900/30 rounded-2xl border border-slate-700/30 hover:border-purple-500/40 transition-all duration-300'>
              <h3 className='text-4xl md:text-5xl font-black bg-linear-to-r from-purple-300 to-indigo-300 bg-clip-text text-transparent mb-2'>100+</h3>
              <p className='text-slate-300 font-medium'>Active Clients</p>
              <p className='text-slate-300 text-sm mt-2'>Global Enterprises</p>
            </div>
            <div className='text-center p-6 bg-linear-to-br from-slate-800/30 to-slate-900/30 rounded-2xl border border-slate-700/30 hover:border-purple-500/40 transition-all duration-300'>
              <h3 className='text-4xl md:text-5xl font-black bg-linear-to-r from-purple-300 to-indigo-300 bg-clip-text text-transparent mb-2'>5M+</h3>
              <p className='text-slate-300 font-medium'>Transactions</p>
              <p className='text-slate-300 text-sm mt-2'>Processed Daily</p>
            </div>
            <div className='text-center p-6 bg-linear-to-br from-slate-800/30 to-slate-900/30 rounded-2xl border border-slate-700/30 hover:border-purple-500/40 transition-all duration-300'>
              <h3 className='text-4xl md:text-5xl font-black bg-linear-to-r from-purple-300 to-indigo-300 bg-clip-text text-transparent mb-2'>80%</h3>
              <p className='text-slate-300 font-medium'>Satisfaction Rate</p>
              <p className='text-slate-300 text-sm mt-2'>Client Retention</p>
            </div>
            <div className='text-center p-6 bg-linear-to-br from-slate-800/30 to-slate-900/30 rounded-2xl border border-slate-700/30 hover:border-purple-500/40 transition-all duration-300'>
              <h3 className='text-4xl md:text-5xl font-black bg-linear-to-r from-purple-300 to-indigo-300 bg-clip-text text-transparent mb-2'>24/7</h3>
              <p className='text-slate-300 font-medium'>Availability</p>
              <p className='text-slate-300 text-sm mt-2'>Global Support</p>
            </div>
          </div>
        </div>
      </section>

    
      <section className='relative py-24 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-purple-950/40 to-slate-950 border-t border-purple-500/20 z-20'>
        <div className='max-w-3xl mx-auto text-center'>
          <div className='relative'>
            <div className='absolute -top-8 -left-8 w-20 h-20 bg-purple-500/20 rounded-full blur-xl' />
            <div className='absolute -bottom-8 -right-8 w-20 h-20 bg-blue-500/20 rounded-full blur-xl' />
            
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 relative'>
              Ready to Transform Your Business?
            </h2>
            <p className='text-xl text-slate-300 mb-8 leading-relaxed'>
              Join thousands of forward-thinking businesses already thriving with our solutions
            </p>
            
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <button 
                onClick={() => navigate('/Account')}
                className='px-10 py-4 bg-linear-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-500/50 flex items-center justify-center gap-2'
              >
                Begin Your Journey <ChevronRight size={20} />
              </button>
              <button className='px-10 py-4 border-2 border-purple-500/40 hover:border-purple-300 hover:bg-purple-500/10 text-white font-semibold rounded-full transition-all duration-300'>
                Book a Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Home