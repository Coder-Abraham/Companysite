
import React from 'react';
import { Calendar, CheckCircle } from 'lucide-react';
import type { Internship } from '../types/internship';
import { useNavigate } from 'react-router-dom';

interface InternshipCardProps {
  internship: Internship;
}

const InternshipCard: React.FC<InternshipCardProps> = ({ internship }) => {
  const navigate=useNavigate();

  return (
    <div className={`bg-white rounded-xl shadow-lg border overflow-hidden transition-transform hover:-translate-y-1 ${
      internship.popular ? 'border-blue-300 border-2' : 'border-gray-200'
    }`}>
     
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
        
            <h3 className="text-xl font-bold text-gray-900">{internship.title}</h3>
          </div>
        </div>

        <p className="text-gray-600 mb-6">{internship.description}</p>

        <div className="mb-6">
          <div className="flex items-center text-gray-700 mb-4">
            <Calendar className="mr-3 text-gray-400" size={20} />
            <div>
              <span className="font-medium">Duration:</span> {internship.duration}
            </div>
          </div>
          
          <div className="space-y-3">
            <h4 className="font-medium text-gray-900 flex items-center">
              <CheckCircle className="mr-2 text-green-500" size={18} />
              What You'll Learn:
            </h4>
            <ul className="space-y-2">
              {internship.features.map((feature, index) => (
                <li key={index} className="text-sm text-gray-600 flex items-center">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-gray-100">
          <div className="flex justify-between items-center">
        
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors" onClick={()=>navigate('/Account')}>
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternshipCard;