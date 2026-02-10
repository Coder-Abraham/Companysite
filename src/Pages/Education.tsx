import React, { useState } from 'react'
import { BookOpen, Briefcase, Clock, Users, Star, Award, TrendingUp,Code,Cloud,Shield,Database,Smartphone,Globe} from 'lucide-react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Footer from '@/components/Footer'

interface Course {
  id: string
  title: string
  description: string
  duration: string
  category: string
  level: string
  instructor: string
  price: string
  rating: number
  icon: React.ReactNode
}

interface Internship {
  id: string
  title: string
  description: string
  duration: string
  stipend: string
  positions: number
  requirements: string[]
  mentor: string
  icon: React.ReactNode
}

function Education() {
  const [activeTab, setActiveTab] = useState<'courses' | 'internships'>('courses')

  const courses: Course[] = [
    {
      id: '1',
      title: 'Web Development Fundamentals',
      description: 'Learn HTML, CSS, JavaScript and build responsive websites',
      duration: '8 Weeks',
      category: 'Web Development',
      level: 'Beginner',
      instructor: 'Sarah Johnson',
      price: '$299',
      rating: 4.8,
      icon: <Code className="h-6 w-6" />
    },
    {
      id: '2',
      title: 'Cloud Computing with AWS',
      description: 'Master AWS services, deployment and cloud architecture',
      duration: '10 Weeks',
      category: 'Cloud Computing',
      level: 'Intermediate',
      instructor: 'Michael Chen',
      price: '$499',
      rating: 4.9,
      icon: <Cloud className="h-6 w-6" />
    },
    {
      id: '3',
      title: 'Cybersecurity Essentials',
      description: 'Learn security fundamentals, ethical hacking and protection',
      duration: '12 Weeks',
      category: 'Security',
      level: 'Intermediate',
      instructor: 'Alex Rodriguez',
      price: '$399',
      rating: 4.7,
      icon: <Shield className="h-6 w-6" />
    },
    {
      id: '4',
      title: 'Data Science Basics',
      description: 'Introduction to data analysis, visualization and Python',
      duration: '10 Weeks',
      category: 'Data Science',
      level: 'Beginner',
      instructor: 'Dr. Emma Wilson',
      price: '$449',
      rating: 4.6,
      icon: <Database className="h-6 w-6" />
    },
    {
      id: '5',
      title: 'Mobile App Development',
      description: 'Build iOS and Android apps with React Native',
      duration: '12 Weeks',
      category: 'Mobile Development',
      level: 'Intermediate',
      instructor: 'James Miller',
      price: '$549',
      rating: 4.8,
      icon: <Smartphone className="h-6 w-6" />
    },
    {
      id: '6',
      title: 'DevOps Fundamentals',
      description: 'Learn Docker, Kubernetes and CI/CD pipelines',
      duration: '10 Weeks',
      category: 'DevOps',
      level: 'Intermediate',
      instructor: 'Robert Kim',
      price: '$499',
      rating: 4.9,
      icon: <Globe className="h-6 w-6" />
    }
  ]

  const internships: Internship[] = [
    {
      id: 'i1',
      title: 'Software Engineering Internship',
      description: 'Work on real-world projects with senior developers',
      duration: '3 Months',
      stipend: '$2,500/month',
      positions: 5,
      requirements: ['JavaScript', 'React', 'Node.js'],
      mentor: 'Sarah Johnson',
      icon: <Code className="h-6 w-6" />
    },
    {
      id: 'i2',
      title: 'Cloud Engineering Internship',
      description: 'AWS infrastructure and deployment automation',
      duration: '4 Months',
      stipend: '$2,800/month',
      positions: 3,
      requirements: ['AWS', 'Docker', 'Linux'],
      mentor: 'Michael Chen',
      icon: <Cloud className="h-6 w-6" />
    },
    {
      id: 'i3',
      title: 'Security Analyst Internship',
      description: 'Network security and threat analysis',
      duration: '3 Months',
      stipend: '$2,600/month',
      positions: 4,
      requirements: ['Networking', 'Security', 'Linux'],
      mentor: 'Alex Rodriguez',
      icon: <Shield className="h-6 w-6" />
    },
    {
      id: 'i4',
      title: 'Data Science Internship',
      description: 'Data analysis and machine learning projects',
      duration: '4 Months',
      stipend: '$2,700/month',
      positions: 3,
      requirements: ['Python', 'SQL', 'Statistics'],
      mentor: 'Dr. Emma Wilson',
      icon: <Database className="h-6 w-6" />
    },
    {
      id: 'i5',
      title: 'Mobile Development Internship',
      description: 'Build and deploy mobile applications',
      duration: '3 Months',
      stipend: '$2,400/month',
      positions: 6,
      requirements: ['React Native', 'JavaScript', 'Git'],
      mentor: 'James Miller',
      icon: <Smartphone className="h-6 w-6" />
    },
    {
      id: 'i6',
      title: 'DevOps Internship',
      description: 'Infrastructure automation and monitoring',
      duration: '4 Months',
      stipend: '$2,900/month',
      positions: 2,
      requirements: ['Docker', 'Kubernetes', 'AWS'],
      mentor: 'Robert Kim',
      icon: <Globe className="h-6 w-6" />
    }
  ]

  const stats = [
    { label: 'Courses Available', value: '50+', icon: <BookOpen className="h-6 w-6" /> },
    { label: 'Active Students', value: '2,000+', icon: <Users className="h-6 w-6" /> },
    { label: 'Completion Rate', value: '92%', icon: <Award className="h-6 w-6" /> },
    { label: 'Job Placement', value: '85%', icon: <TrendingUp className="h-6 w-6" /> }
  ]

  return (
    <div className="min-h-screen bg-page">

      <header className=" border-b">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              Academic Programs
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive IT courses and professional internship programs to accelerate your career
            </p>
          </div>
        </div>
      </header>

      <section className="py-12 ">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6  rounded-xl">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-3">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">
                  {activeTab === 'courses' ? 'IT Courses' : 'Internship Programs'}
                </h2>
                <p className="text-gray-600 mt-2">
                  {activeTab === 'courses'
                    ? 'Learn from industry experts with practical, hands-on projects'
                    : 'Gain real-world experience with professional mentorship'}
                </p>
              </div>

              <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as 'courses' | 'internships')}>
                <TabsList>
                  <TabsTrigger value="courses" className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4" />
                    Courses
                  </TabsTrigger>
                  <TabsTrigger value="internships" className="flex items-center gap-2">
                    <Briefcase className="h-4 w-4" />
                    Internships
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>

          {/* Courses Tab */}
          <TabsContent value="courses" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course) => (
                <Card key={course.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 rounded-lg bg-blue-100 text-blue-600">
                        {course.icon}
                      </div>
                      <Badge className={course.level === 'Beginner' ? 'bg-green-100 text-green-800' :
                        course.level === 'Intermediate' ? 'bg-blue-100 text-blue-800' :
                          'bg-purple-100 text-purple-800'}>
                        {course.level}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl">{course.title}</CardTitle>
                    <CardDescription className="mt-2">{course.description}</CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="mr-2 h-4 w-4" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Users className="mr-2 h-4 w-4" />
                        <span>Instructor: {course.instructor}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
                          <span className="font-medium">{course.rating}</span>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {course.category}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>

                  <CardFooter className="flex justify-between items-center">
                    <div className="text-2xl font-bold text-gray-900">{course.price}</div>
                    <Button>Enroll Now</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Internships Tab */}
          <TabsContent value="internships" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {internships.map((internship) => (
                <Card key={internship.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 rounded-lg bg-purple-100 text-purple-600">
                        {internship.icon}
                      </div>
                      <Badge className="bg-green-100 text-green-800">
                        {internship.stipend}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl">{internship.title}</CardTitle>
                    <CardDescription className="mt-2">{internship.description}</CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <div className="flex items-center">
                          <Clock className="mr-2 h-4 w-4" />
                          <span>{internship.duration}</span>
                        </div>
                        <div className="flex items-center">
                          <Users className="mr-2 h-4 w-4" />
                          <span>{internship.positions} positions</span>
                        </div>
                      </div>

                      <div>
                        <div className="text-sm font-medium text-gray-700 mb-2">Requirements:</div>
                        <div className="flex flex-wrap gap-2">
                          {internship.requirements.map((req, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {req}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center text-sm text-gray-600">
                        <Users className="mr-2 h-4 w-4" />
                        <span>Mentor: {internship.mentor}</span>
                      </div>
                    </div>
                  </CardContent>

                  <CardFooter>
                    <Button className="w-full">Apply Now</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Programs</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Industry-relevant curriculum designed by professionals for practical learning
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-4">
                <BookOpen className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Instructors</h3>
              <p className="text-gray-600">
                Learn from industry professionals with years of real-world experience
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 text-green-600 mb-4">
                <Briefcase className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Hands-on Projects</h3>
              <p className="text-gray-600">
                Build real projects and gain practical experience from day one
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 text-purple-600 mb-4">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Career Support</h3>
              <p className="text-gray-600">
                Get career guidance, resume reviews, and job placement assistance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-linear-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Start Your Learning Journey Today
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10">
            Whether you want to learn new skills or gain professional experience, we have the right program for you
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100">
              <BookOpen className="mr-2 h-5 w-5" />
              Browse All Courses
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Briefcase className="mr-2 h-5 w-5" />
              View Internships
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Education