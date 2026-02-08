import Footer from '@/components/Footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { useState } from 'react'
import { Lock, Mail, Phone, User as UserIcon } from 'lucide-react'

const User = () => {
  const [isLogin, setIsLogin] = useState(true)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    name: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    
  }

  return (
    <div className='bg-black text-white min-h-screen flex flex-col'>
      <div className='flex-1 flex flex-col items-center justify-center p-8 py-20'>
        <div className='w-full max-w-md'>
        
          <div className='text-center mb-8 space-y-2'>
            <h1 className='text-4xl lg:text-5xl font-bold bg-linear-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent'>
              Cosmc Technologies
            </h1>
            <p className='text-gray-400'>Welcome to our platform</p>
          </div>

          <div className='flex gap-4 mb-8'>
            <Button
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-3 rounded-lg font-semibold transition-all duration-300 ${
                isLogin
                  ? 'bg-linear-to-r from-gray-200 to-gray-100 text-black shadow-lg'
                  : 'bg-gray-900 text-gray-300 border border-gray-700 hover:bg-gray-800'
              }`}
            >
              Login
            </Button>
            <Button
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-3 rounded-lg font-semibold transition-all duration-300 ${
                !isLogin
                  ? 'bg-linear-to-r from-gray-200 to-gray-100 text-black shadow-lg'
                  : 'bg-gray-900 text-gray-300 border border-gray-700 hover:bg-gray-800'
              }`}
            >
              Sign Up
            </Button>
          </div>

      
          <Card className='bg-gray-950 border border-gray-700 hover:border-gray-500 transition-all duration-300'>
            <CardContent className='p-8 space-y-6'>
              <div className='text-center space-y-2'>
                <h2 className='text-2xl font-bold text-white'>
                  {isLogin ? 'Welcome' : 'Join Us'}
                </h2>
                <p className='text-gray-400 text-sm'>
                  {isLogin
                    ? 'Login to access your account'
                    : 'Create a new account to get started'}
                </p>
              </div>

              <form onSubmit={handleSubmit} className='space-y-4'>
              
                {isLogin ? (
                  <>
                    <div className='space-y-2'>
                      <label className='text-sm font-medium text-gray-300 flex items-center gap-2'>
                        <Mail size={16} />
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                        className='w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:border-gray-500 focus:outline-none transition-colors duration-200'
                        required
                      />
                    </div>

                    <div className='space-y-2'>
                      <label className='text-sm font-medium text-gray-300 flex items-center gap-2'>
                        <Lock size={16} />
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        placeholder="Enter your password"
                        className='w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:border-gray-500 focus:outline-none transition-colors duration-200'
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className='w-full py-3 bg-linear-to-r from-gray-200 to-gray-100 text-black hover:from-white hover:to-gray-200 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 mt-2'
                    >
                      Login
                    </Button>
                  </>
                ) : (
                  <>
                    <div className='space-y-2'>
                      <label className='text-sm font-medium text-gray-300 flex items-center gap-2'>
                        <UserIcon size={16} />
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        className='w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:border-gray-500 focus:outline-none transition-colors duration-200'
                        required
                      />
                    </div>

                    <div className='space-y-2'>
                      <label className='text-sm font-medium text-gray-300 flex items-center gap-2'>
                        <Phone size={16} />
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Enter your phone number"
                        className='w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:border-gray-500 focus:outline-none transition-colors duration-200'
                        required
                      />
                    </div>

                    <div className='space-y-2'>
                      <label className='text-sm font-medium text-gray-300 flex items-center gap-2'>
                        <Mail size={16} />
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                        className='w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:border-gray-500 focus:outline-none transition-colors duration-200'
                        required
                      />
                    </div>

                    <div className='space-y-2'>
                      <label className='text-sm font-medium text-gray-300 flex items-center gap-2'>
                        <Lock size={16} />
                        Create Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        placeholder="Create a password"
                        className='w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:border-gray-500 focus:outline-none transition-colors duration-200'
                        required
                      />
                    </div>

                    <div className='space-y-2'>
                      <label className='text-sm font-medium text-gray-300 flex items-center gap-2'>
                        <Lock size={16} />
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        placeholder="Confirm your password"
                        className='w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:border-gray-500 focus:outline-none transition-colors duration-200'
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className='w-full py-3 bg-linear-to-r from-gray-200 to-gray-100 text-black hover:from-white hover:to-gray-200 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 mt-2'
                    >
                      Sign Up
                    </Button>
                  </>
                )}
              </form>

              <div className='text-center text-sm text-gray-400'>
                {isLogin ? (
                  <>
                    Don't have an account?{' '}
                    <button
                      onClick={() => setIsLogin(false)}
                      className='text-gray-200 hover:text-white font-semibold transition-colors duration-200'
                    >
                      Sign up here
                    </button>
                  </>
                ) : (
                  <>
                    Already have an account?{' '}
                    <button
                      onClick={() => setIsLogin(true)}
                      className='text-gray-200 hover:text-white font-semibold transition-colors duration-200'
                    >
                      Login here
                    </button>
                  </>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default User