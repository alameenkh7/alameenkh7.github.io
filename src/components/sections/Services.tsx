import { ShoppingCart, Gamepad, Smartphone, ShieldCheck, Brain, ChevronDown, ChevronUp, ArrowRight } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

interface Service {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  details: string;
}

const Services = () => {
  const services: Service[] = [
    {
      id: 1,
      icon: <ShoppingCart size={28} />,
      title: "eCommerce Platforms",
      description: "Robust digital storefronts with seamless payment integration.",
      details: "We build complete eCommerce solutions with inventory management, personalized shopping experiences, and secure payment gateways. Our platforms are optimized for conversion and designed for scalability as your business grows.",
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 2,
      icon: <Gamepad size={28} />,
      title: "Gamified Applications",
      description: "Engaging applications that increase user interaction and retention.",
      details: "Our gamified applications utilize game-like elements such as points, badges, leaderboards and challenges to make your application more engaging and enjoyable. This approach has proven to significantly increase user retention and satisfaction.",
      color: "from-green-500 to-green-600"
    },
    {
      id: 3,
      icon: <Smartphone size={28} />,
      title: "Mobile Applications",
      description: "Intuitive, high-performance mobile apps for iOS and Android.",
      details: "We develop native and cross-platform mobile applications with exceptional user experiences. Our mobile apps are built with the latest technologies to ensure high performance, reliability, and a seamless user experience across different device types.",
      color: "from-purple-500 to-purple-600"
    },
    {
      id: 4,
      icon: <ShieldCheck size={28} />,
      title: "Security Solutions",
      description: "Advanced cybersecurity measures to protect your digital assets.",
      details: "We implement comprehensive security solutions to protect your data, applications, and digital infrastructure from threats. Our approach includes penetration testing, vulnerability assessment, and implementation of robust security protocols and practices.",
      color: "from-red-500 to-red-600"
    },
    {
      id: 5,
      icon: <Brain size={28} />,
      title: "AI-powered Tools",
      description: "Custom AI solutions tailored to optimize your business operations.",
      details: "Our AI solutions harness the power of artificial intelligence and machine learning to automate processes, extract insights from data, and enhance decision-making. We build custom models trained on your specific business needs to deliver tangible results.",
      color: "from-amber-500 to-amber-600"
    }
  ];

  const [openService, setOpenService] = useState<number | null>(null);
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const toggleService = (id: number) => {
    setOpenService(openService === id ? null : id);
  };

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-rearway-navy/30 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-primary rounded-full filter blur-[100px] opacity-10"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-400 rounded-full filter blur-[100px] opacity-5"></div>
      </div>
      
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title gradient-text mb-4">Our Solutions</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Software that solves real business problems
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(service => (
            <div 
              key={service.id}
              className={`bg-white dark:bg-gray-800/40 rounded-xl p-6 shadow-md border border-gray-100 dark:border-gray-700 transition-all duration-300 ${
                hoveredService === service.id ? 'scale-[1.02]' : ''
              }`}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-5`}>
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{service.description}</p>
              
              <Collapsible 
                open={openService === service.id} 
                onOpenChange={() => toggleService(service.id)}
              >
                <CollapsibleTrigger className="flex items-center text-rearway-blue dark:text-blue-400 font-medium">
                  <span>Learn more</span>
                  {openService === service.id ? 
                    <ChevronUp className="ml-1 h-4 w-4" /> : 
                    <ChevronDown className="ml-1 h-4 w-4" />
                  }
                </CollapsibleTrigger>
                <CollapsibleContent className="pt-4">
                  <p className="text-gray-600 dark:text-gray-300">{service.details}</p>
                  <div className="mt-4">
                    <a href="#contact" className="inline-flex items-center text-rearway-blue dark:text-blue-400 font-medium">
                      Get in touch
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
