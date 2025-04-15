
import { useRef, useEffect } from "react";
import { ShoppingCart, BookOpen, Shield, Phone, BarChart } from "lucide-react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const useCases = [
  {
    title: "AI Chatbot for E-commerce Support",
    description: "Increase sales and reduce support costs with AI assistants that guide customers through their shopping journey.",
    icon: <ShoppingCart className="w-12 h-12 text-white" />,
    bgClass: "from-rearway-blue to-blue-400"
  },
  {
    title: "Gamified AI Learning Assistant",
    description: "Enhance user engagement and knowledge retention with interactive AI-powered learning experiences.",
    icon: <BookOpen className="w-12 h-12 text-white" />,
    bgClass: "from-blue-500 to-violet-500"
  },
  {
    title: "Secure Document Validation Bot",
    description: "Automate document verification with AI that ensures security and compliance while saving time.",
    icon: <Shield className="w-12 h-12 text-white" />,
    bgClass: "from-violet-500 to-rearway-purple"
  },
  {
    title: "Automated Sales Follow-Up Agent",
    description: "Never miss a lead with AI agents that nurture prospects through personalized, timely communications.",
    icon: <Phone className="w-12 h-12 text-white" />,
    bgClass: "from-rearway-purple to-purple-400"
  },
  {
    title: "Business KPI Tracker Agent",
    description: "Get actionable insights from your data with AI that monitors KPIs and suggests optimization strategies.",
    icon: <BarChart className="w-12 h-12 text-white" />,
    bgClass: "from-purple-400 to-rearway-blue"
  }
];

const AiUseCases = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, { threshold: 0.1 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="ai-use-cases" className="py-20 bg-gray-50 dark:bg-rearway-navy/20">
      <div className="container-custom">
        <div className="text-center mb-16 reveal-animation" ref={sectionRef}>
          <h2 className="section-title mb-4">
            AI Use Case <span className="gradient-text">Scenarios</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover how our AI solutions can transform your business operations and drive growth across different scenarios.
          </p>
        </div>

        <div className="mt-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {useCases.map((useCase, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                  <div className="p-1">
                    <Card className="border-0 overflow-hidden shadow-lg h-[350px] card-hover group relative">
                      {/* Animated background */}
                      <div className="absolute inset-0 bg-gradient-to-br opacity-10 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none">
                        <div className="absolute inset-0 bg-[radial-gradient(#4361EE_1px,transparent_1px)] [background-size:20px_20px] opacity-50"></div>
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r"></div>
                      </div>
                      
                      {/* Connection lines animation */}
                      <div className="absolute inset-0 overflow-hidden opacity-10 group-hover:opacity-25 transition-opacity duration-500 pointer-events-none">
                        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                          <defs>
                            <pattern id={`grid-${index}`} width="40" height="40" patternUnits="userSpaceOnUse">
                              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#4361EE" strokeWidth="0.5" />
                            </pattern>
                          </defs>
                          <rect width="100%" height="100%" fill={`url(#grid-${index})`} />
                        </svg>
                      </div>
                      
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r"></div>
                      <CardContent className="p-8 flex flex-col items-center h-full text-center relative z-10">
                        <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${useCase.bgClass} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                          {useCase.icon}
                        </div>
                        <h3 className="text-xl font-bold mb-4">{useCase.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300">{useCase.description}</p>
                        
                        {/* Animated floating particles */}
                        <div className="absolute bottom-4 right-4 w-10 h-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <div className="absolute w-2 h-2 rounded-full bg-blue-400 animate-ping"></div>
                          <div className="absolute w-1 h-1 rounded-full bg-purple-400 animate-ping" style={{ animationDelay: "0.5s" }}></div>
                          <div className="absolute w-1.5 h-1.5 rounded-full bg-rearway-blue animate-ping" style={{ animationDelay: "1s" }}></div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8 gap-4">
              <CarouselPrevious className="relative static transform-none translate-y-0 bg-white dark:bg-gray-800" />
              <CarouselNext className="relative static transform-none translate-y-0 bg-white dark:bg-gray-800" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default AiUseCases;
