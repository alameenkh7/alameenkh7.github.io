
import { useState } from "react";
import { ShoppingCart, Gamepad, Smartphone, ShieldCheck, Brain } from "lucide-react";

interface Service {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const Services = () => {
  const services: Service[] = [
    {
      id: 1,
      icon: <ShoppingCart size={28} />,
      title: "eCommerce Platforms",
      description: "Robust digital storefronts with seamless payment integration, inventory management, and personalized shopping experiences.",
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 2,
      icon: <Gamepad size={28} />,
      title: "Gamified Applications",
      description: "Engaging applications that utilize game-like elements to increase user interaction, retention, and overall satisfaction.",
      color: "from-green-500 to-green-600"
    },
    {
      id: 3,
      icon: <Smartphone size={28} />,
      title: "Mobile Applications",
      description: "Intuitive, high-performance mobile apps for iOS and Android that deliver exceptional user experiences.",
      color: "from-purple-500 to-purple-600"
    },
    {
      id: 4,
      icon: <ShieldCheck size={28} />,
      title: "Security Solutions",
      description: "Advanced cybersecurity measures to protect your data, applications, and digital infrastructure from threats.",
      color: "from-red-500 to-red-600"
    },
    {
      id: 5,
      icon: <Brain size={28} />,
      title: "AI-powered Business Tools",
      description: "Custom artificial intelligence and machine learning solutions tailored to optimize your business operations.",
      color: "from-amber-500 to-amber-600"
    }
  ];

  const [hoveredService, setHoveredService] = useState<number | null>(null);

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-rearway-navy/30 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-primary rounded-full filter blur-[100px] opacity-10"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-400 rounded-full filter blur-[100px] opacity-5"></div>
      </div>
      
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title gradient-text mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            We specialize in creating cutting-edge software solutions tailored to your business needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(service => (
            <div 
              key={service.id}
              className={`bg-white dark:bg-gray-800/40 rounded-xl p-8 shadow-md border border-gray-100 dark:border-gray-700 transition-all duration-300 card-hover ${
                hoveredService === service.id ? 'scale-105' : ''
              }`}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-6`}>
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
              
              <div className="mt-6">
                <a href="#contact" className="inline-flex items-center text-rearway-blue dark:text-blue-400 font-medium">
                  Learn more
                  <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
