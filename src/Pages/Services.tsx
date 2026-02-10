
import { Code2, Cloud, Headphones, TrendingUp } from 'lucide-react'
import Footer from '@/components/Footer'
import { useNavigate } from 'react-router-dom'

const Services = () => {
      const navigate=useNavigate();
  return (
  
    <div className='w-full bg-page'>
  
      <section className='relative py-24 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-slate-900/50 to-purple-950/40 z-20'>
        <div className='max-w-6xl mx-auto'>
          <h2 className='text-4xl md:text-5xl font-black text-center mb-20 bg-linear-to-r from-white to-blue-200 bg-clip-text text-transparent'>
            What We Offer
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          
            <div className='group p-8 rounded-2xl border border-purple-500/20 bg-linear-to-br from-purple-500/10 to-blue-500/5 hover:border-purple-500/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/20 cursor-pointer'>
              <div className='w-16 h-16 mb-6 bg-linear-to-br from-purple-600 to-indigo-600 rounded-xl flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-6 transition-transform'>
                <Code2 size={32} />
              </div>
              <h3 className='text-2xl font-bold text-white mb-3'>Web Development</h3>
              <p className='text-slate-200 leading-relaxed mb-4'>Custom web applications built with the latest technologies and frameworks. From frontend to backend, we deliver responsive, scalable, and secure solutions.</p>
              <ul className='text-slate-200 text-sm space-y-2'>
                <li> React, Vue, Angular applications</li>
                <li> RESTful API development</li>
                <li> Progressive Web Apps (PWA)</li>
                <li> E-commerce platforms</li>
              </ul>
            </div>

     
            <div className='group p-8 rounded-2xl border border-purple-500/20 bg-linear-to-br from-purple-500/10 to-blue-500/5 hover:border-purple-500/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/20 cursor-pointer '>
              <div className='w-16 h-16 mb-6 bg-linear-to-br from-purple-600 to-indigo-600 rounded-xl flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-6 transition-transform'>
                <Cloud size={32} />
              </div>
              <h3 className='text-2xl font-bold text-white mb-3'>Cloud Solutions</h3>
              <p className='text-slate-200 leading-relaxed mb-4'>Scalable cloud infrastructure and migration services. We help you leverage the power of cloud computing for better performance and flexibility.</p>
              <ul className='text-slate-200 text-sm space-y-2'>
                <li> AWS, Azure, GCP expertise</li>
                <li> Cloud migration services</li>
                <li> Serverless architectures</li>
                <li> Infrastructure as Code (IaC)</li>
              </ul>
            </div>

        
            <div className='group p-8 rounded-2xl border border-purple-500/20 bg-linear-to-br from-purple-500/10 to-blue-500/5 hover:border-purple-500/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/20 cursor-pointer'>
              <div className='w-16 h-16 mb-6 bg-linear-to-br from-purple-600 to-indigo-600 rounded-xl flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-6 transition-transform'>
                <TrendingUp size={32} />
              </div>
              <h3 className='text-2xl font-bold text-white mb-3'>Strategic Consulting</h3>
              <p className='text-slate-200 leading-relaxed mb-4'>Strategic IT consulting to optimize your digital transformation. Our experts guide you through technology decisions and implementation.</p>
              <ul className='text-slate-200 text-sm space-y-2'>
                <li> Digital transformation planning</li>
                <li> Technology stack selection</li>
                <li> System architecture design</li>
                <li> Process optimization</li>
              </ul>
            </div>

           
            <div className='group p-8 rounded-2xl border border-purple-500/20 bg-linear-to-br from-purple-500/10 to-blue-500/5 hover:border-purple-500/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/20 cursor-pointer'>
              <div className='w-16 h-16 mb-6 bg-linear-to-br from-purple-600 to-indigo-600 rounded-xl flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-6 transition-transform'>
                <Headphones size={32} />
              </div>
              <h3 className='text-2xl font-bold text-white mb-3'>Support & Maintenance</h3>
              <p className='text-slate-200 leading-relaxed mb-4'>Ongoing support and maintenance services to keep your systems running smoothly. We're here 24/7 to help you succeed.</p>
              <ul className='text-slate-200 text-sm space-y-2'>
                <li> 24/7 technical support</li>
                <li>System monitoring</li>
                <li>Regular updates & patches</li>
                <li> Performance optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

    
      <section className='relative py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-purple-950/40 to-slate-950 border-t border-purple-500/20 z-20'>
        <div className='max-w-2xl mx-auto text-center'>
          <h2 className='text-3xl md:text-4xl font-black text-white mb-4'>
            Ready to Transform Your Business?
          </h2>
          <p className='text-lg text-slate-300 mb-8 leading-relaxed'>
            Let's discuss how our services can help achieve your goals
          </p>
          <button className='px-10 py-4 bg-linear-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-500/50' onClick={()=>navigate('/contact')}>
            Contact Us Today
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Services