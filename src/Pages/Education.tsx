import Footer from "@/components/Footer"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { BookOpen, Users, Briefcase, Trophy } from 'lucide-react'

const Education = () => {
  const courses = [
    {
      title: 'Web Development Masterclass',
      description: 'Learn modern web development with React, TypeScript, and Tailwind CSS',
      level: 'Intermediate',
      duration: '8 Weeks'
    },
    {
      title: 'Cloud Solutions',
      description: 'Master cloud deployment, scalability, and best practices on',
      level: 'Advanced',
      duration: '10 Weeks'
    },
    {
      title: 'Full Stack Development',
      description: 'Complete guide to building production-ready full stack applications',
      level: 'Intermediate',
      duration: '12 Weeks'
    },
    {
      title: 'DevOps & Infrastructure',
      description: 'Learn containerization, CI/CD pipelines, and infrastructure automation',
      level: 'Advanced',
      duration: '10 Weeks'
    },
  
    {
      title: 'Database design',
      description: 'Learn database server setup and intergration',
      level: 'Intermediate',
      duration: '12 Weeks'
    },
  
  ]

  return (
    <div className='bg-black text-white min-h-screen py-12 px-8'>
      <div className='max-w-7xl mx-auto'>
        {/* Header */}
        <div className='text-center mb-16'>
          <h1 className='text-5xl lg:text-6xl font-bold mb-6 bg-linear-to-r from-white via-gray-300 to-gray-400 bg-clip-text text-transparent'>Learning & Development</h1>
          <p className='text-xl text-gray-300 max-w-2xl mx-auto'>Enhance your skills with our comprehensive training programs and certifications.</p>
        </div>

      
        <div className='grid grid-cols-1 md:grid-cols-4 gap-6 mb-16'>
          {[
            { icon: BookOpen, label: 'Courses', value: '20+' },
            { icon: Users, label: 'Students', value: '500+' },
            { icon: Trophy, label: 'Success Rate', value: '95%' },
            { icon: Briefcase, label: 'Job Placement', value: '98%' }
          ].map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card key={index} className='bg-gray-950 border border-gray-400 hover:border-white transition-all duration-300'>
                <CardContent className='p-6 text-center space-y-4'>
                  <Icon className='w-10 h-10 text-gray-300 mx-auto' />
                  <div>
                    <p className='text-gray-300 text-md'>{stat.label}</p>
                    <p className='text-3xl font-bold text-white'>{stat.value}</p>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <h2 className='text-3xl font-bold mb-8 '>Featured Courses</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-16'>
          {courses.map((course, index) => (
            <Card key={index} className='bg-gray-950 border border-gray-400 hover:border-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1'>
              <CardTitle className='p-6 border-b border-gray-400 text-xl text-white'>{course.title}</CardTitle>
              <CardContent className='p-6 space-y-4'>
                <p className='text-gray-400'>{course.description}</p>
                <div className='flex justify-between items-center pt-4'>
                  <span className='px-3 py-1 bg-gray-800 text-gray-300 text-md rounded-full border border-gray-700'>{course.level}</span>
                  <span className='text-gray-400 text-sm font-medium'>{course.duration}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        
        <h2 className='text-3xl font-bold mb-8 bg-linear-to-r from-white to-gray-400 bg-clip-text text-transparent'>Why Study With Us</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {[
            { title: 'Industry Experts', desc: 'Learn from professionals with real-world experience' },
            { title: 'Hands-On Projects', desc: 'Work on practical projects that build your portfolio' },
            { title: 'Job Support', desc: 'Career guidance and job placement assistance included' }
          ].map((benefit, index) => (
            <Card key={index} className='bg-gray-950 border border-gray-700 hover:border-white transition-all duration-300'>
              <CardContent className='p-6 space-y-3'>
                <h3 className='text-xl font-bold text-white'>{benefit.title}</h3>
                <p className='text-gray-400'>{benefit.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Education