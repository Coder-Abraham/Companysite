import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react'
import { useState } from 'react'
import Footer from "@/components/Footer"
import Message from "@/components/Message"

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [SuccessMessage, setSuccessMessage] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSuccessMessage(true)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div className='bg-black text-white min-h-screen py-12 px-8'>
      <div className='max-w-6xl mx-auto'>
    
        <div className='text-center mb-16'>
          <h1 className='text-5xl lg:text-6xl font-bold mb-6 text-white'>Get in Touch</h1>
          <p className='text-xl text-gray-300 max-w-2xl mx-auto'>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
        </div>

        <div className='grid lg:grid-cols-2 gap-8'>
         
          <div className='space-y-6'>
            <h2 className='text-3xl font-bold mb-6 '>Contact Information</h2>
            
            {[
              { icon: Mail, title: 'Email', value: 'info@cosmctechnologies.com' },
              { icon: Phone, title: 'Phone', value: '+256 (0) 708 153 467' },
              { icon: MapPin, title: 'Address', value: 'Sambrass Business Center, Kisaasi, Kampala, Uganda' },
              { icon: Clock, title: 'Business Working hours', value: 'Monday - Friday: 8:00 AM - 6:00 PM'}
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <Card key={index} className='bg-gray-950 border border-gray-400 hover:border-white transition-all duration-300 card-glow'>
                  <CardContent className='p-6 flex items-start gap-4'>
                    <Icon className='w-8 h-8 text-gray-300 shrink-0 mt-1' />
                    <div>
                      <h3 className='text-lg font-bold text-white mb-2'>{item.title}</h3>
                      <p className='text-gray-400'>{item.value}</p>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

         
          <Card className='bg-gray-950 border border-gray-400 hover:border-white transition-all duration-300 '>
            <CardTitle className=' text-white p-6 border-b border-gray-400'>Send us a Message</CardTitle>
            <CardContent className='p-6'>
              <form onSubmit={handleSubmit} className='space-y-6'>
                <div>
                  <label className='block text-gray-300 font-medium mb-2'>Your Name</label>
                  <input 
                    type='text' 
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    className='w-full bg-black border border-gray-400 rounded-lg px-4 py-2 text-white placeholder-gray-600 focus:border-gray-500 focus:outline-none transition-colors duration-300 input-glow'
                    placeholder='Enter Name'
                    required
                  />
                </div>
                <div>
                  <label className='block text-gray-300 font-medium mb-2'>Your Email</label>
                  <input 
                    type='email' 
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    className='w-full bg-black border border-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-600 focus:border-gray-500 focus:outline-none transition-colors duration-300 input-glow'
                    placeholder='Enter Email'
                    required
                  />
                </div>
                <div>
                  <label className='block text-gray-300 font-medium mb-2'>Message</label>
                  <textarea 
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className='w-full bg-black border border-gray-400 rounded-lg px-4 py-2 text-white placeholder-gray-600 focus:border-gray-500 focus:outline-none transition-colors duration-300 resize-none input-glow'
                    placeholder='Enter your message here...'
                    required
                  />
                </div>
                <Button className='w-full bg-linear-to-r from-gray-200 to-gray-100 text-black hover:from-white hover:to-gray-200 py-3 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 font-semibold flex items-center justify-center gap-2 button-glow'>
                  Send Message <Send size={20} />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
      <Message 
        isVisible={SuccessMessage} 
    
        title="Message Sent!"
        message="Thank you for reaching out. We will get back to you soon!"
      />
      <Footer/>
    </div>
  )
}

export default Contact

