import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Globe, Smartphone, Database, Server, Check } from 'lucide-react'
import Footer from '@/components/Footer'
import { useNavigate } from 'react-router-dom'

type ServiceKey = 'web' | 'app' | 'db' | 'hosting'

interface ServiceType {
  title: string
  desc: string
  icon: React.ComponentType<{ className?: string }>
  features: string[]
  plans: Array<{
    name: string
    price: string
    perks: string[]
    highlight?: boolean
  }>
}

const SERVICES: Record<ServiceKey, ServiceType> = {
  web: {
    title: 'Web Development',
    desc: 'Modern, responsive websites built for speed and conversions.',
    icon: Globe,
    features: [
      'Responsive design for all devices',
      'Fast loading times & optimization',
      'SEO optimization & analytics',
      'CMS integration & maintenance'
    ],
    plans: [
      {
        name: 'Starter',
        price: 'UGX 500,000',
        perks: ['Up to 5 pages', 'Responsive design', 'Basic SEO', '1 month support']
      },
      {
        name: 'Pro',
        price: 'UGX 1,200,000',
        perks: ['Up to 15 pages', 'Performance optimization', 'Advanced SEO', '6 months support'],
        highlight: true
      },
      {
        name: 'Enterprise',
        price: 'UGX 3,500,000',
        perks: ['Custom builds', 'E-commerce ready', 'Priority support', 'SLA guaranteed']
      }
    ]
  },
  app: {
    title: 'App Development',
    desc: 'Cross-platform mobile and web apps focusing on user experience.',
    icon: Smartphone,
    features: [
      'Native-like performance',
      'Offline functionality support',
      'Push notifications enabled',
      'Real-time analytics integration'
    ],
    plans: [
      {
        name: 'Starter',
        price: 'UGX 2,000,000',
        perks: ['MVP application', 'Simple UI design', 'Single platform', '1 month support']
      },
      {
        name: 'Pro',
        price: 'UGX 5,000,000',
        perks: ['iOS + Android', 'Backend APIs', 'Firebase integration', '6 months support'],
        highlight: true
      },
      {
        name: 'Enterprise',
        price: 'UGX 12,000,000',
        perks: ['Custom architecture', 'Full SLA', 'On-site training', '24/7 support']
      }
    ]
  },
  db: {
    title: 'Database Systems',
    desc: 'Robust database design and management for scalable applications.',
    icon: Database,
    features: [
      'Professional data modeling',
      'Replication & automated backups',
      'Performance tuning & optimization',
      'Security hardening & compliance'
    ],
    plans: [
      {
        name: 'Starter',
        price: 'UGX 300,000',
        perks: ['Schema design', 'Backup setup', '1 month monitoring', 'Query optimization']
      },
      {
        name: 'Pro',
        price: 'UGX 900,000',
        perks: ['Replication setup', 'Performance tuning', '3 months monitoring', 'SSL security'],
        highlight: true
      },
      {
        name: 'Enterprise',
        price: 'UGX 2,500,000',
        perks: ['Managed database', 'High availability', '24/7 monitoring', 'Disaster recovery']
      }
    ]
  },
  hosting: {
    title: 'Hosting Services',
    desc: 'Reliable, scalable hosting with secure deployments and monitoring.',
    icon: Server,
    features: [
      '99.9% uptime guarantee',
      'SSL & HTTPS included',
      'Automatic scaling capacity',
      'CDN & global distribution'
    ],
    plans: [
      {
        name: 'Starter',
        price: 'UGX 50,000/mo',
        perks: ['Shared hosting', 'SSL certificate', 'Basic monitoring', 'Email support']
      },
      {
        name: 'Pro',
        price: 'UGX 200,000/mo',
        perks: ['Dedicated virtual machine', 'Auto backups', 'CDN included', '24/7 support'],
        highlight: true
      },
      {
        name: 'Enterprise',
        price: 'UGX 800,000/mo',
        perks: ['Kubernetes clusters', 'Private network', 'SLA guaranteed', 'On-call support']
      }
    ]
  }
}

const Services = () => {
  const [selected, setSelected] = useState<ServiceKey>('web')
  const navigate = useNavigate()

  const currentService = SERVICES[selected]
  const CurrentIcon = currentService.icon

  return (
    <div className='bg-black text-white min-h-screen flex flex-col'>
    
      <div className='py-12 px-6 text-center border-b border-gray-800'>
        <h1 className='text-4xl lg:text-6xl font-bold mb-4 bg-linear-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent'>
          Our Services
        </h1>
        <p className='text-gray-400 max-w-2xl mx-auto text-lg'>
          Comprehensive digital solutions to help your business thrive.
        </p>
      </div>

    
      <div className='flex-1 max-w-6xl mx-auto w-full py-12 px-6'>
       
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-12'>
          {(Object.keys(SERVICES) as ServiceKey[]).map((key) => {
            const service = SERVICES[key]
            const IconComponent = service.icon
            const isSelected = selected === key

            return (
              <button
                key={key}
                onClick={() => setSelected(key)}
                className={`p-4 rounded-lg border-2 transition-all duration-300 flex items-center gap-3 ${
                  isSelected
                    ? 'bg-linear-to-r from-gray-200 to-gray-100 text-black border-gray-200 shadow-lg'
                    : 'bg-gray-900 text-gray-300 border-gray-700 hover:border-gray-500'
                }`}
              >
                <IconComponent className='w-6 h-6 shrink-0' />
                <span className='font-semibold text-sm sm:text-base'>{service.title}</span>
              </button>
            )
          })}
        </div>

      
        <div className='grid lg:grid-cols-2 gap-8 mb-12'>
       
          <Card className='bg-gray-950 border border-gray-700 hover:border-gray-500 transition-all duration-300 h-fit'>
            <CardContent className='p-8'>
              <div className='flex items-start gap-4 mb-6'>
                <div className='p-3 rounded-lg bg-gray-900 border border-gray-700'>
                  <CurrentIcon className='w-8 h-8 text-gray-300' />
                </div>
                <div>
                  <h2 className='text-3xl font-bold text-white'>{currentService.title}</h2>
                  <p className='text-gray-400 mt-2'>{currentService.desc}</p>
                </div>
              </div>

              <h3 className='text-lg font-semibold text-white mb-4'>Key Features</h3>
              <ul className='space-y-3'>
                {currentService.features.map((feature, idx) => (
                  <li key={idx} className='flex items-start gap-3 text-gray-300'>
                    <Check className='w-5 h-5 text-gray-400 shrink-0 mt-0.5' />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>


          <Card className='bg-linear-to-br from-gray-900 to-gray-950 border border-gray-700 hover:border-gray-500 transition-all duration-300 h-fit'>
            <CardContent className='p-8 flex flex-col gap-6'>
              <div>
                <h3 className='text-2xl font-bold text-white'>Ready to Get Started?</h3>
                <p className='text-gray-400 mt-2'>
                  Let's discuss how {currentService.title.toLowerCase()} can transform your business.
                </p>
              </div>

              <div className='space-y-3'>
                <div className='flex items-center gap-3 text-gray-300'>
                  <Check className='w-5 h-5 text-gray-400' />
                  <span>Custom solutions tailored to your needs</span>
                </div>
                <div className='flex items-center gap-3 text-gray-300'>
                  <Check className='w-5 h-5 text-gray-400' />
                  <span>Expert team with years of experience</span>
                </div>
                <div className='flex items-center gap-3 text-gray-300'>
                  <Check className='w-5 h-5 text-gray-400' />
                  <span>24/7 customer support & maintenance</span>
                </div>
              </div>

              <Button
                onClick={() => navigate('/Contact')}
                className='w-full bg-linear-to-r from-gray-200 to-gray-100 text-black hover:from-white hover:to-gray-200 py-3 font-semibold rounded-lg transition-all duration-300'
              >
                Schedule Consultation
              </Button>
            </CardContent>
          </Card>
        </div>

    
        <div>
          <h3 className='text-3xl font-bold mb-8 bg-linear-to-r from-white to-gray-400 bg-clip-text text-transparent'>
            Pricing Plans
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {currentService.plans.map((plan, idx) => (
              <Card
                key={idx}
                className={`border transition-all duration-300 transform hover:scale-105 ${
                  plan.highlight
                    ? 'bg-linear-to-b from-gray-800 to-gray-950 border-gray-400 shadow-2xl'
                    : 'bg-gray-950 border-gray-700 hover:border-gray-500'
                }`}
              >
                <CardContent className='p-6'>
                  {plan.highlight && (
                    <div className='mb-4 inline-block px-3 py-1 bg-gray-700 text-gray-200 rounded-full text-xs font-semibold'>
                      MOST POPULAR
                    </div>
                  )}

                  <h4 className='text-2xl font-bold text-white mb-2'>{plan.name}</h4>
                  <p className='text-3xl font-bold bg-linear-to-r from-gray-200 to-gray-100 bg-clip-text text-transparent mb-6'>
                    {plan.price}
                  </p>

                  <ul className='space-y-3 mb-8'>
                    {plan.perks.map((perk, i) => (
                      <li key={i} className='flex items-start gap-2 text-gray-300'>
                        <Check className='w-5 h-5 text-gray-400 shrink-0 mt-0.5' />
                        <span>{perk}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full py-3 font-semibold rounded-lg transition-all duration-300 ${
                      plan.highlight
                        ? 'bg-linear-to-r from-gray-200 to-gray-100 text-black hover:from-white hover:to-gray-200'
                        : 'bg-gray-900 text-gray-300 border border-gray-700 hover:bg-gray-800'
                    }`}
                  onClick={()=>navigate('/User')}>
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Services