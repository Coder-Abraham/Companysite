
import React from 'react';
import { Users, Rocket, Target, Heart,Shield,Globe,Award,Code2,Zap,Lightbulb} from 'lucide-react';
import Footer from '@/components/Footer';
import person5 from '../assets/person5.jpg';
import person2 from '../assets/person2.jpg';
import person3 from '../assets/person3.jpg';
import person4 from '../assets/person4.jpg';
interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
}

interface ValueCard {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const AboutPage: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Cosmas",
      role: "CEO & Founder",
      bio: "Engineer with 15+ years in software development",
      image: person5
    },
    {
      id: 2,
      name: "Sarah Nalukwago",
      role: "Database Administrator",
      bio: "Expert in database systems",
      image: person2
    },
    {
      id: 3,
      name: "Marcus Rivera",
      role: "Lead Developer",
      bio: "Full-stack wizard with passion for clean code",
      image: person3
    },
    {
      id: 4,
      name: "Ssemakula Ahmed",
      role: "Product Manager",
      bio: "frontend developer with a knack for user experience",
      image: person4
    }
  ];

  const values: ValueCard[] = [
    {
      id: 1,
      title: "Innovation",
      description: "We constantly push boundaries and explore new technologies to solve complex problems.",
      icon: <Lightbulb className="w-8 h-8" />,
      color: "bg-blue-50 text-blue-600"
    },
    {
      id: 2,
      title: "Excellence",
      description: "We deliver high-quality solutions that exceed expectations and stand the test of time.",
      icon: <Award className="w-8 h-8" />,
      color: "bg-purple-50 text-purple-600"
    },
    {
      id: 3,
      title: "Collaboration",
      description: "We believe great things happen when talented people work together towards a common goal.",
      icon: <Users className="w-8 h-8" />,
      color: "bg-green-50 text-green-600"
    },
    {
      id: 4,
      title: "Integrity",
      description: "We conduct business with transparency, honesty, and respect for all stakeholders.",
      icon: <Shield className="w-8 h-8" />,
      color: "bg-orange-50 text-orange-600"
    }
  ];

  const stats = [
    { label: "Projects Delivered", value: "200+", icon: <Rocket /> },
    { label: "Happy Clients", value: "200+", icon: <Heart /> },
    { label: "Team Members", value: "50+", icon: <Users /> },
    { label: "Countries Served", value: "30+", icon: <Globe /> }
  ];

  return (
    <div className="min-h-screen bg-page">
      
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold  mb-6 text-white">
              Building the Future of
              <span className="text-blue-600 block mt-2">Digital Solutions</span>
            </h1>
            <p className="text-xl text-gray-200 mb-10 leading-relaxed">
              We are a passionate team of innovators, developers, and designers 
              dedicated to creating exceptional software that transforms businesses 
              and enhances lives.
            </p>
          </div>
        </div>
      </section>

      
      <section className="py-16 ">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 ">
            {stats.map((stat, index) => (
              <div key={index} className="text-center hover:border-3 rounded-2xl border-white p-4 ">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white text-blue-600 mb-4">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

   
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className='bg-blue-300/20 p-8 rounded-2xl border border-blue-500/30 shadow-lg shadow-blue-500/20'>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 mb-6">
                <Target className="w-4 h-4 mr-2" />
                Our Journey
              </div>
              <h2 className="text-4xl font-bold text-gray-300 mb-6">
                From Vision to Reality
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed font-bold ">
                Founded in 2016, TechVision started as a small startup with a big dream: 
                to make sophisticated software solutions accessible to businesses of all sizes. 
                Today, we're proud to be a leading software development company serving 
                clients worldwide.
              </p>
              <p className="text-gray-300 mb-8 leading-relaxed font-bold">
                Our journey has been fueled by a relentless pursuit of excellence and 
                a commitment to our clients' success. We've grown from a team of three 
                founders to a diverse group of 50+ professionals, each bringing unique 
                expertise and perspective to the table.
              </p>
              
            </div>
            <div className="relative">
              <div className="bg-linear-to-br from-blue-500 to-purple-600 rounded-2xl p-1">
                <div className="bg-white rounded-2xl p-8 shadow-xl">
                  <Code2 className="w-12 h-12 text-blue-600 mb-6" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Our Mission
                  </h3>
                  <p className="text-gray-600 mb-6">
                    To empower businesses through innovative, reliable, and scalable 
                    software solutions that drive growth and transformation.
                  </p>
                  <div className="flex items-center text-blue-600">
                    <Zap className="w-5 h-5 mr-2" />
                    <span className="font-semibold">Innovating Since 2016</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20    bg-purple-800 text-blue-700 mb-6">
        <div className="container mx-auto px-6 lg:px-8 ">
          <div className="text-center max-w-2xl mx-auto mb-16 ">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Core Values
            </h2>
            <p className="text-gray-300 text-lg">
              These principles guide everything we do, from code we write to 
              relationships we build.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.id} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${value.color} mb-6`}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

 
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-100 mb-6">
              Meet Our Leadership
            </h2>
            <p className="text-gray-300 text-lg">
              The brilliant minds behind our success story
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 ">
            {teamMembers.map((member) => (
              <div key={member.id} className="group ">
                <div className="relative overflow-hidden rounded-2xl mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300 bg-gray-300"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-200">{member.name}</h3>
                <div className="text-blue-100 font-medium mb-2">{member.role}</div>
                <p className="text-gray-200 text-md">{member.bio}</p>
              </div>
            ))}
          </div>
        
        </div>
      </section>

      <Footer/>
    </div>
  );
};

export default AboutPage;