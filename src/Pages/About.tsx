import Footer from "@/components/Footer"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Users, Target, Award, Code } from 'lucide-react'

const About = () => {
  return (
    <div className='bg-black text-white min-h-screen py-12 px-8'>
      <div className='max-w-6xl mx-auto'>
        {/* Hero */}
        <div className='mb-16'>
          <h1 className='text-5xl lg:text-6xl font-bold mb-6  text-white  '>Who We Are</h1>
          <p className='text-xl text-gray-200 max-w-2xl'>We are a forward-thinking technology company dedicated to delivering innovative solutions that transform businesses.</p>
        </div>

        {/* Main Content */}
        <div className='grid lg:grid-cols-2 gap-8 mb-16'>
          <Card className='bg-gray-950  border-gray-500  transition-all duration-300 hover:border-white'>
            <CardTitle className='text-white p-6 border-b border-gray-300 text-lg'>About Cosmc Technologies</CardTitle>
            <CardContent className='p-6 text-gray-300  space-y-4 '>
              <p>
                We are a dynamic technology company based in Sambrass Business Center, Kisaasi. Our mission is to empower businesses with cutting-edge digital solutions.
              </p>
              <p>
                With expertise in web development, cloud hosting, and digital transformation, we help companies navigate the digital landscape with confidence.
              </p>
            </CardContent>
          </Card>

          <Card className='bg-gray-950 border border-gray-400  transition-all duration-300 hover:border-white'>
            <CardTitle className=' text-white p-6 border-b border-gray-400'>Our Vision</CardTitle>
            <CardContent className='p-6 text-gray-300 space-y-4'>
              <p>
                To be the leading technology partner for businesses seeking innovation, reliability, and excellence in the digital realm.
              </p>
              <p>
                We believe in building long-term partnerships with our clients, ensuring their success is our success.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Values */}
        <h2 className='text-3xl font-bold mb-8 text-center  text-white'>Our Values</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16'>
          {[
            { icon: Target, title: 'Excellence', desc: 'We strive for the highest quality in everything we do' },
            { icon: Users, title: 'Collaboration', desc: 'Strong partnerships built on trust and communication' },
            { icon: Award, title: 'Innovation', desc: 'Constantly pushing boundaries and exploring new possibilities' },
            { icon: Code, title: 'Integrity', desc: 'Honest, transparent, and ethical in all our dealings' }
          ].map((value, index) => {
            const Icon = value.icon
            return (
              <Card key={index} className='bg-gray-950 border border-gray-400 hover:border-white transition-all duration-300 hover:shadow-xl card-glow'>
                <CardContent className='p-6 text-center space-y-4'>
                  <Icon className='w-10 h-10 text-gray-300 mx-auto' />
                  <h3 className='text-lg font-bold text-white'>{value.title}</h3>
                  <p className='text-md text-gray-300'>{value.desc}</p>
                </CardContent>
              </Card>
            )
          
          })}
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default About