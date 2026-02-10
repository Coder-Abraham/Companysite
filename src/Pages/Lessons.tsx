
import React, { useState } from 'react';
import InternshipCard from '../components/InternshipCard';
import { type Internship }from '../types/internship'
import { Calendar,DollarSign,TrendingUp} from 'lucide-react';
import Footer from '@/components/Footer';
import { useNavigate } from 'react-router-dom';

const Lessons: React.FC = () => {
  const navigate=useNavigate();
  const [searchTerm] = useState('');
  const [selectedCategory] = useState<string>('all');

  const internships: Internship[] = [
    {
      id: 1,
      title: "Full Stack Development",
      description: "Master modern web development with React, Node.js, and databases. Build real-world applications.",
      duration: "3 Months",
      features: ["React & TypeScript", "Node.js & Express", "Database Design", "Deployment", "Git & GitHub"],
      category: 'tech',
      popular: true
    },
    {
      id: 2,
      title: "UI/UX Design",
      description: "Learn user-centered design principles, prototyping, and design tools like Figma.",
      duration: "2 Months",

      features: ["Figma", "User Research", "Wireframing", "Prototyping", "Design Systems"],
     
    },
    
    {
      id: 3,
      title: "Data Science",
      description: "Introduction to data analysis, machine learning, and data visualization techniques.",
      duration: "4 Months",
      features: ["Python & Pandas", "Machine Learning", "Data Visualization", "SQL", "Statistical Analysis"],
      category: 'tech',
      popular: true
    },
    
    {
      id: 4,
      title: "Database Design ",
      description: "Build databases",
      duration: "2 Months",
      features: ["MySQL", "Postgresql", "API Integration", "Database server", "Firebase"],
      category: 'tech'
    },
    {
      id: 5,
      title: "Mobile App Development",
      description: "Build cross-platform mobile applications using React Native.",
      duration: "3.5 Months",
      features: ["React Native", "Mobile UI/UX", "API Integration", "App Store Deployment", "Firebase"],
      category: 'tech'
    },
    {
      id: 6,
      title: "Cyber security",
      description: "Protect systems and computer systems",
      duration: "6 Months",
      features: ["Kali-linux", "Pentesting", "Brutal force Attack", "server security", ],
      category: 'tech'
    },
  ];

  const filteredInternships = internships.filter(internship => {
    const matchesSearch = internship.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         internship.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || internship.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

 
  return (
    <div className="w-full bg-page">
  
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-300 mb-3">
        Internship Programs
        </h1>
        <p className="text-lg text-gray-200 max-w-3xl mx-auto">
          Kickstart your career with hands-on experience. Choose from our comprehensive range of internship courses.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-transparent rounded-xl shadow-sm p-6 border hover:border-gray-100">
          <div className="flex items-center ">
            <Calendar className="text-white mr-4" size={24} />
            <div className=''>
              <p className="text-2xl font-bold text-white">Flexible Duration</p>
              <p className="text-gray-200">2-4 month programs</p>
            </div>
          </div>
        </div>
        <div className="bg-transparent rounded-xl shadow-sm p-6 border hover:border-white">
          <div className="flex items-center">
            <DollarSign className="text-green-600 mr-4" size={24} />
            <div>
              <p className="text-2xl font-bold text-gray-100">Affordable Pricing</p>
              <p className="text-gray-200">Best value programs</p>
            </div>
          </div>
        </div>
        <div className="bg-transparent rounded-xl shadow-sm p-6 border hover:border-white">
          <div className="flex items-center">
            <TrendingUp className="text-purple-600 mr-4" size={24} />
            <div>
              <p className="text-2xl font-bold text-gray-100">Career Growth</p>
              <p className="text-gray-200">Industry-relevant skills</p>
            </div>
          </div>
        </div>
      </div>

    
      <div className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center m-4 ">
            { filteredInternships.map((internship) => (
              <InternshipCard key={internship.id} internship={internship} />
            ))}
        </div>
      </div>
      
      </div>

 
      <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100 w-150 items-center m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Why Choose Our Internships?</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                Real-world projects and portfolio building
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                Industry expert mentorship
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                Flexible learning schedule
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                Certificate of completion
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Need Help Choosing?</h3>
            <p className="text-gray-600 mb-4">
              Contact our career advisors to find the perfect internship program for your goals.
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors" 
            onClick={()=>navigate('/Contact')}>
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Lessons;