
import { useState, useRef, useEffect } from "react";
import { ChevronRight, ChevronLeft, ArrowRight } from "lucide-react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

interface CaseStudy {
  id: number;
  title: string;
  client: string;
  clientType: "startup" | "enterprise" | "mid-size";
  image: string;
  challenge: string;
  approach: string;
  solution: string;
  result: string;
  metrics: {
    label: string;
    value: string;
  }[];
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "Scaling eCommerce Operations",
    client: "DealBuddy",
    clientType: "startup",
    image: "https://images.unsplash.com/photo-1607082350899-7e105aa886ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    challenge: "DealBuddy needed a high-performance platform capable of handling flash sales with 10,000+ concurrent users.",
    approach: "We implemented a microservices architecture with auto-scaling capabilities and robust caching strategies.",
    solution: "End-to-end eCommerce platform with gamification elements, real-time inventory management, and payment processing.",
    result: "DealBuddy successfully processed 15,000+ transactions during peak sales events with zero downtime.",
    metrics: [
      { label: "Increase in Conversion Rate", value: "37%" },
      { label: "Decrease in Page Load Time", value: "65%" },
      { label: "Increase in User Retention", value: "42%" }
    ]
  },
  {
    id: 2,
    title: "Financial Data Integration",
    client: "Hive Wealth",
    clientType: "startup",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    challenge: "Hive Wealth needed to securely connect with multiple financial institutions while maintaining real-time data synchronization.",
    approach: "We built a secure API gateway with Plaid integration and implemented robust data encryption protocols.",
    solution: "Social investing platform with real-time portfolio tracking, social sharing, and financial insights.",
    result: "Successfully connected with 500+ financial institutions while maintaining bank-level security standards.",
    metrics: [
      { label: "User Growth in First Quarter", value: "10,000+" },
      { label: "API Response Time", value: "<200ms" },
      { label: "Security Compliance Score", value: "98/100" }
    ]
  },
  {
    id: 3,
    title: "Enterprise ERP Customization",
    client: "Besync",
    clientType: "enterprise",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    challenge: "Besync needed a flexible ERP solution that could be customized for different industry verticals without extensive redevelopment.",
    approach: "We developed a modular ERP framework with an extensible plugin architecture and visual customization tools.",
    solution: "Custom ERP Module Studio that enables rapid development of industry-specific modules.",
    result: "Reduced custom module development time from months to weeks, enabling quick adaptation to new markets.",
    metrics: [
      { label: "Reduction in Development Time", value: "73%" },
      { label: "New Industry Verticals Enabled", value: "5" },
      { label: "Client Satisfaction Score", value: "4.9/5" }
    ]
  },
  {
    id: 4,
    title: "Real Estate Platform Integration",
    client: "Estative",
    clientType: "mid-size",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
    challenge: "Estative needed to integrate multiple real estate data sources and services into a single cohesive platform.",
    approach: "We created a unified API layer and implemented a modern microservices architecture with Firebase for real-time updates.",
    solution: "Comprehensive real estate platform with property listings, CRM, and lead management tools.",
    result: "Platform successfully aggregated data from 15+ different sources while maintaining performance and reliability.",
    metrics: [
      { label: "Broker Productivity Increase", value: "45%" },
      { label: "Lead Conversion Improvement", value: "31%" },
      { label: "Platform Uptime", value: "99.98%" }
    ]
  }
];

const CaseStudies = () => {
  const [currentCase, setCurrentCase] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

  const nextCase = () => {
    setCurrentCase((prev) => (prev === caseStudies.length - 1 ? 0 : prev + 1));
  };

  const prevCase = () => {
    setCurrentCase((prev) => (prev === 0 ? caseStudies.length - 1 : prev - 1));
  };

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

    const steps = document.querySelectorAll('.case-step');
    steps.forEach(step => {
      observer.observe(step);
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      steps.forEach(step => {
        observer.unobserve(step);
      });
    };
  }, [currentCase]);

  return (
    <section id="case-studies" className="py-20 bg-gray-50 dark:bg-rearway-navy/20">
      <div className="container-custom">
        <div className="text-center mb-16 reveal-animation" ref={sectionRef}>
          <h2 className="section-title mb-4">
            Case <span className="gradient-text">Studies</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover how we've helped businesses overcome their technical challenges and achieve remarkable results
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
              {caseStudies.map((study, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/1 pl-4">
                  <div className="p-1">
                    <Card className="border-0 overflow-hidden shadow-lg card-hover">
                      <div className="h-2 bg-gradient-primary"></div>
                      <CardContent className="p-6 sm:p-8">
                        <div className="flex flex-col lg:flex-row gap-8">
                          <div className="lg:w-2/5">
                            <div className="relative rounded-lg overflow-hidden mb-6">
                              <img 
                                src={study.image} 
                                alt={study.title} 
                                className="w-full h-64 object-cover"
                              />
                              <div className="absolute top-3 right-3 px-3 py-1 bg-white/90 dark:bg-gray-800/90 rounded-full text-sm font-medium">
                                {study.clientType === "startup" ? "Startup" : 
                                 study.clientType === "enterprise" ? "Enterprise" : "Mid-size Business"}
                              </div>
                            </div>
                            
                            <h3 className="text-2xl font-bold mb-2">{study.title}</h3>
                            <p className="text-lg font-medium text-rearway-blue mb-6">Client: {study.client}</p>
                            
                            <div className="grid grid-cols-2 gap-4 mb-6">
                              {study.metrics.map((metric, idx) => (
                                <div key={idx} className="bg-gray-50 dark:bg-gray-800/30 p-4 rounded-lg text-center">
                                  <p className="text-3xl font-bold gradient-text">{metric.value}</p>
                                  <p className="text-sm text-gray-600 dark:text-gray-400">{metric.label}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <div className="lg:w-3/5" ref={stepsRef}>
                            <div className="relative pl-6 border-l-2 border-dashed border-gray-200 dark:border-gray-700">
                              <div className="case-step reveal-animation mb-8" style={{ animationDelay: '100ms' }}>
                                <div className="absolute -left-3 w-6 h-6 rounded-full bg-gradient-primary flex items-center justify-center text-white">
                                  <span className="text-xs font-bold">1</span>
                                </div>
                                <h4 className="text-xl font-bold mb-2">Challenge</h4>
                                <p className="text-gray-600 dark:text-gray-300">{study.challenge}</p>
                              </div>
                              
                              <div className="case-step reveal-animation mb-8" style={{ animationDelay: '300ms' }}>
                                <div className="absolute -left-3 w-6 h-6 rounded-full bg-gradient-primary flex items-center justify-center text-white">
                                  <span className="text-xs font-bold">2</span>
                                </div>
                                <h4 className="text-xl font-bold mb-2">Our Approach</h4>
                                <p className="text-gray-600 dark:text-gray-300">{study.approach}</p>
                              </div>
                              
                              <div className="case-step reveal-animation mb-8" style={{ animationDelay: '500ms' }}>
                                <div className="absolute -left-3 w-6 h-6 rounded-full bg-gradient-primary flex items-center justify-center text-white">
                                  <span className="text-xs font-bold">3</span>
                                </div>
                                <h4 className="text-xl font-bold mb-2">Solution</h4>
                                <p className="text-gray-600 dark:text-gray-300">{study.solution}</p>
                              </div>
                              
                              <div className="case-step reveal-animation" style={{ animationDelay: '700ms' }}>
                                <div className="absolute -left-3 w-6 h-6 rounded-full bg-gradient-primary flex items-center justify-center text-white">
                                  <span className="text-xs font-bold">4</span>
                                </div>
                                <h4 className="text-xl font-bold mb-2">Results</h4>
                                <p className="text-gray-600 dark:text-gray-300">{study.result}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8 gap-4">
              <CarouselPrevious className="relative static transform-none translate-y-0 dark:bg-gray-800 dark:hover:bg-gray-700 hover:bg-gray-100" />
              <CarouselNext className="relative static transform-none translate-y-0 dark:bg-gray-800 dark:hover:bg-gray-700 hover:bg-gray-100" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
