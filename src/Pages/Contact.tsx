
import React, { useState } from 'react';
import { Mail, Phone,MapPin,Clock,Send,CheckCircle2,MessageSquare,Building,User,AlertCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';



import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Footer from '@/components/Footer';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
}

interface ContactInfo {
  icon: React.ReactNode;
  title: string;
  details: string[];
  description: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});

  const contactInfo: ContactInfo[] = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Us',
      details: ['info@cosmctechnologies.com', 'support@cosmctech.com'],
      description: 'We respond within 24 hours'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Call Us',
      details: ['+(256) 789-77456', '+ (256) 771-596300'],
      description: 'Mon-Fri from 9am to 6pm EST'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Visit Us',
      details: ['sambrass Business Center', 'Kisaasi, Kampala'],
      description: 'Schedule a visit in advance'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Office Hours',
      details: ['Monday - Friday: 8:00 AM - 5:00 PM', 'Saturday: 10:00 AM - 2:00 PM'],
      description: 'Closed on Sundays'
    }
  ];

  const departments = [
    {
      name: 'Sales',
      email: 'sales@cosmctech.com',
      phone: '+ (256) 7890-01245',
      description: 'For product inquiries and pricing'
    },
    {
      name: 'Support',
      email: 'support@cosmtech.com',
      phone: '+ (256) 755-369001',
      description: 'Technical support and assistance'
    },
    {
      name: 'Partnerships',
      email: 'partnerships@cosmctech.com',
      phone: '+ (256) 785-4002',
      description: 'Business collaboration opportunities'
    },
    {
      name: 'Careers',
      email: 'careers@cosmctech.com',
      phone: '+ (256) 777-123-789',
      description: 'Join our growing team'
    }
  ];

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
  
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: ''
      });
      setIsSubmitted(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLinputE.ent | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <div className="min-h-screen bg-page">
   
     
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
               <span className="text-white">Get inTouch</span>
            </h1>
            <p className="text-xl text-gray-200 mb-10 leading-relaxed">
              Have questions about our products or services? We're here to help.
              Reach out to us and let's start a conversation about how we can help 
              transform your business.
            </p>
          </div>
        </div>
      </section>

      
      <section className="py-12">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
        
            <div className="lg:col-span-2">
              <Card className="border-2 border-white shadow-xl bg-transparent">
                <CardHeader className="pb-8">
                  <CardTitle className="text-3xl font-bold text-white">
                    Send us a Message
                  </CardTitle>
                  <CardDescription className="text-lg text-white">
                    Fill out the form below and our team will get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <CheckCircle2 className="w-20 h-20 text-green-500 mx-auto mb-6" />
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        Message Sent Successfully!
                      </h3>
                      <p className="text-gray-600 mb-8">
                        Thank you for reaching out. We'll get back to you within 24 hours.
                      </p>
                      <Button onClick={() => setIsSubmitted(false)}>
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-8">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2  ">
                          <Label htmlFor="name" className="text-white">
                            <User className="inline w-4 h-4 mr-2 " />
                            Full Name *
                          </Label>
                          <input
                            id="name"
                            name="name"
                            type='text'
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter name"
                            className={errors.name ? "border-red-500" : " w-100 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500  text-white"}
                          />
                          {errors.name && (
                            <p className="text-red-500 text-sm flex items-center gap-1">
                              <AlertCircle className="w-4 h-4" />
                              {errors.name}
                            </p>
                          )}
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-white">
                            <Mail className="inline w-4 h-4 mr-2" />
                            Email Address *
                          </Label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="someone@something.com"
                            className={errors.email ? "border-red-500" : " w-100 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500  text-white"}
                          />
                          {errors.email && (
                            <p className="text-red-500 text-sm flex items-center gap-1">
                              <AlertCircle className="w-4 h-4" />
                              {errors.email}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="phone" className="text-white">
                            <Phone className="inline w-4 h-4 mr-2" />
                            Phone Number
                          </Label>
                          <input
                            id="phone"
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder=" "
                            className=' w-100 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500  text-white'
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="company" className="text-white">
                            <Building className="inline w-4 h-4 mr-2" />
                            Company
                          </Label>
                          <input
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Your Company"
                            className=' w-100 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500  text-white'
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject" className="text-white">
                          <MessageSquare className="inline w-4 h-4 mr-2" />
                          Subject
                        </Label>
                        <input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="How can we help you?"
                          className=' w-100 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500  text-white'
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-white">
                          <MessageSquare className="inline w-4 h-4 mr-2" />
                          Your Message *
                        </Label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us about your project or inquiry..."
                          rows={6}
                          className={errors.message ? "border-red-500" : " w-150 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500  text-white"}
                        />
                        {errors.message && (
                          <p className="text-red-500 text-sm flex items-center gap-1">
                            <AlertCircle className="w-4 h-4" />
                            {errors.message}
                          </p>
                        )}
                      </div>

                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full gap-2"
                        disabled={isSubmitting}
                      className='bg-blue-600 hover:bg-blue-700 text-white'

                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message <Send className="w-4 h-4" />
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

          
            <div className="space-y-8">
              {/* Contact Info Cards */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white mb-6">
                  Contact Information
                </h2>
                {contactInfo.map((info, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-white">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-blue-50 text-blue-600">
                          {info.icon}
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-200 mb-2">
                            {info.title}
                          </h3>
                          <div className="space-y-1 font-bold">
                            {info.details.map((detail, idx) => (
                              <p key={idx} className="text-gray-200">
                                {detail}
                              </p>
                            ))}
                          </div>
                          <p className="text-sm text-gray-200 font-bold mt-2">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Departments */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">
                  Contact by Department
                </h2>
                <div className="space-y-4">
                  {departments.map((dept, index) => (
                    <div key={index} className="p-4 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
                      <h4 className="font-bold text-gray-200 mb-2">{dept.name}</h4>
                      <div className="space-y-1 text-sm text-white">
                        <p className="flex items-center gap-2 font-bold">
                          <Mail className="w-4 h-4" />
                          {dept.email}
                        </p>
                        <p className="flex items-center gap-2 font-bold">
                          <Phone className="w-4 h-4 " />
                          {dept.phone}
                        </p>
                      </div>
                      <p className="text-sm text-gray-100 mt-2 font-bold">{dept.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

  
      <Footer/>
    </div>
   
  );
};

export default Contact;