export interface SearchItem {
  id: string;
  title: string;
  description: string;
  page: string;
  path: string;
  category: string;
}

export const searchData: SearchItem[] = [
  // Home Page
  {
    id: 'home-1',
    title: 'Transform Your Digital Future',
    description: 'Unlock innovation, accelerate growth, and dominate your industry with cutting-edge technology solutions',
    page: 'Home',
    path: '/',
    category: 'Hero'
  },
  {
    id: 'home-2',
    title: 'Lightning Fast',
    description: 'Experience blazing-fast performance with our optimized infrastructure and cutting-edge technology stack.',
    page: 'Home',
    path: '/',
    category: 'Features'
  },
  {
    id: 'home-3',
    title: 'Secure & Reliable',
    description: 'Enterprise-grade security measures protect your data with 99.9% uptime guarantee and advanced encryption.',
    page: 'Home',
    path: '/',
    category: 'Features'
  },
  {
    id: 'home-4',
    title: 'Scale with Ease',
    description: 'Grow your business without limits. Our scalable solutions grow alongside your ambitions.',
    page: 'Home',
    path: '/',
    category: 'Features'
  },
  {
    id: 'home-5',
    title: '24/7 Support',
    description: 'Our dedicated support team is always ready to help you succeed, anytime, anywhere.',
    page: 'Home',
    path: '/',
    category: 'Features'
  },

  // About Page
  {
    id: 'about-1',
    title: 'About Our Company',
    description: 'Learn more about our mission, vision, and the team behind our success',
    page: 'About',
    path: '/about',
    category: 'Company'
  },
  {
    id: 'about-2',
    title: 'Our Mission',
    description: 'Empowering businesses through innovative technology solutions and exceptional service',
    page: 'About',
    path: '/about',
    category: 'Company'
  },

  // Services Page
  {
    id: 'services-1',
    title: 'Our Services',
    description: 'Comprehensive solutions tailored to meet your business needs',
    page: 'Services',
    path: '/Services',
    category: 'Services'
  },
  {
    id: 'services-2',
    title: 'Web Development',
    description: 'Custom web applications built with the latest technologies',
    page: 'Services',
    path: '/Services',
    category: 'Services'
  },
  {
    id: 'services-3',
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and migration services',
    page: 'Services',
    path: '/Services',
    category: 'Services'
  },
  {
    id: 'services-4',
    title: 'Consulting',
    description: 'Strategic IT consulting to optimize your digital transformation',
    page: 'Services',
    path: '/Services',
    category: 'Services'
  },

  // Education Page
  {
    id: 'education-1',
    title: 'Education & Training',
    description: 'Boost your skills with our comprehensive training programs',
    page: 'Education',
    path: '/Education',
    category: 'Learning'
  },
  {
    id: 'education-2',
    title: 'Courses',
    description: 'Expert-led courses covering various technologies and frameworks',
    page: 'Education',
    path: '/Education',
    category: 'Learning'
  },
  {
    id: 'education-3',
    title: 'Certifications',
    description: 'Industry-recognized certifications to advance your career',
    page: 'Education',
    path: '/Education',
    category: 'Learning'
  },

  // Contact Page
  {
    id: 'contact-1',
    title: 'Get In Touch',
    description: 'Contact us for inquiries, support, or business opportunities',
    page: 'Contact',
    path: '/contact',
    category: 'Support'
  },
  {
    id: 'contact-2',
    title: 'Email Support',
    description: 'Reach out to our team via email for detailed inquiries',
    page: 'Contact',
    path: '/contact',
    category: 'Support'
  },
  {
    id: 'contact-3',
    title: 'Phone Support',
    description: 'Call our support team for immediate assistance',
    page: 'Contact',
    path: '/contact',
    category: 'Support'
  },

  // General/Popular searches
  {
    id: 'general-1',
    title: 'Pricing',
    description: 'Check our competitive pricing plans',
    page: 'Home',
    path: '/',
    category: 'General'
  },
  {
    id: 'general-2',
    title: 'Plans',
    description: 'Explore different subscription plans for your needs',
    page: 'Home',
    path: '/',
    category: 'General'
  },
  {
    id: 'general-3',
    title: 'FAQ',
    description: 'Find answers to frequently asked questions',
    page: 'Home',
    path: '/',
    category: 'General'
  },
];

export function searchItems(query: string): SearchItem[] {
  if (!query.trim()) return [];

  const lowerQuery = query.toLowerCase();
  return searchData.filter((item) => {
    const titleMatch = item.title.toLowerCase().includes(lowerQuery);
    const descriptionMatch = item.description.toLowerCase().includes(lowerQuery);
    return titleMatch || descriptionMatch;
  });
}
