
import { ExternalLink, ChevronRight, ChevronLeft, Store, Globe } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  techStack: string[];
  links: {
    website?: string;
    playStore?: string;
    appStore?: string;
  };
}

const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "DealBuddy",
      description: "A unique shopping experience where you decide the price — get products for as low as 1 paisa!",
      image: "https://bid-365-dev-images.s3.ap-south-1.amazonaws.com/images/dealbuddy_banner.png",
      tags: ["eCommerce", "Gamification", "Mobile App"],
      techStack: ["Node.js", "NestJS", "AWS", "PostgreSQL"],
      links: {
        playStore: "https://play.google.com/store/apps/details?id=com.deal.buddy&pli=1",
        appStore: "https://apps.apple.com/us/app/dealbuddy-live/id6723903153"
      }
    },
    {
      id: 2,
      title: "Hive Wealth",
      description: "Social network for investors built using GoLang, Plaid API, and financial modeling features.",
      image: "https://bid-365-dev-images.s3.ap-south-1.amazonaws.com/images/hivewealth_banner.png",
      tags: ["Fintech", "Social Network", "Investing"],
      techStack: ["GoLang", "Plaid API", "React Native"],
      links: {
        playStore: "https://play.google.com/store/apps/details?id=com.deal.buddy&pli=1",
        appStore: "https://apps.apple.com/us/app/dealbuddy-live/id6723903153"
      }
    },
    {
      id: 4,
      title: "Estative",
      description: "Platform for brokers, developers, and investors with property listings, CRM, and lead management.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
      tags: ["Real Estate", "CRM", "Mobile App"],
      techStack: ["Firebase", "Flutter", "Node.js"],
      links: {
        playStore: "#",
        appStore: "#"
      }
    },
    {
      id: 4,
      title: "Mix Tape Madness",
      description: "Mixtape Madness is a British urban music outlet and an entertainment and distribution platform based in London, United Kingdom",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Mixtape_Madness_Primary_Logo_2019.png/250px-Mixtape_Madness_Primary_Logo_2019.png",
      tags: ["Music Player",  "Mobile App"],
      techStack: ["Firebase", "Flutter", "Nest.js"],
      links: {
        playStore: "#",
        appStore: "#"
      }
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const projectsRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, { threshold: 0.1 });

    const cards = document.querySelectorAll('.project-card');
    cards.forEach(card => {
      observer.observe(card);
    });

    return () => {
      cards.forEach(card => {
        observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-rearway-navy/50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-animation">
          <h2 className="section-title gradient-text mb-4">Our Projects</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            We design and develop custom software solutions that drive business growth and innovation
          </p>
        </div>

        {/* Desktop View - Grid Layout */}
        <div className="hidden lg:grid grid-cols-2 gap-8" ref={projectsRef}>
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card reveal-animation bg-gray-50 dark:bg-gray-800/40 rounded-xl overflow-hidden shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70"></div>
                <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span 
                      key={idx} 
                      className="text-xs font-medium px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <div className="flex space-x-2">
                    {project.links.website && (
                      <a 
                        href={project.links.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gradient-primary hover:text-white transition-colors"
                        aria-label={`Visit ${project.title} website`}
                      >
                        <Globe size={16} />
                      </a>
                    )}
                    {project.links.playStore && (
                      <HoverCard>
                        <HoverCardTrigger asChild>
                          <a 
                            href={project.links.playStore} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gradient-primary hover:text-white transition-colors"
                            aria-label={`Download ${project.title} from Play Store`}
                          >
                            <Store size={16} />
                          </a>
                        </HoverCardTrigger>
                        <HoverCardContent className="w-auto">
                          <p className="text-sm">Google Play Store</p>
                        </HoverCardContent>
                      </HoverCard>
                    )}
                    {project.links.appStore && (
                      <HoverCard>
                        <HoverCardTrigger asChild>
                          <a 
                            href={project.links.appStore} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gradient-primary hover:text-white transition-colors"
                            aria-label={`Download ${project.title} from App Store`}
                          >
                            <Store size={16} />
                          </a>
                        </HoverCardTrigger>
                        <HoverCardContent className="w-auto">
                          <p className="text-sm">Apple App Store</p>
                        </HoverCardContent>
                      </HoverCard>
                    )}
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, idx) => (
                    <Badge key={idx} variant="outline" className="bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                {/* <a 
                  href="#" 
                  className="inline-flex items-center text-rearway-blue font-medium hover:underline"
                >
                  View Case Study
                  <ExternalLink size={16} className="ml-1" />
                </a> */}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile & Tablet View - Slider */}
        <div className="lg:hidden">
          <div className="relative rounded-xl overflow-hidden shadow-md border border-gray-100 dark:border-gray-700">
            <div className="relative h-64 sm:h-80 overflow-hidden">
              <img 
                src={projects[currentSlide].image} 
                alt={projects[currentSlide].title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70"></div>
              
              <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                {projects[currentSlide].tags.map((tag, index) => (
                  <span 
                    key={index} 
                    className="text-xs font-medium px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <button 
                onClick={prevSlide} 
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/50 transition-colors"
              >
                <ChevronLeft size={24} />
              </button>
              
              <button 
                onClick={nextSlide} 
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/50 transition-colors"
              >
                <ChevronRight size={24} />
              </button>
            </div>
            
            <div className="p-6 bg-gray-50 dark:bg-gray-800/40">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-2xl font-bold">{projects[currentSlide].title}</h3>
                <div className="flex space-x-2">
                  {projects[currentSlide].links.website && (
                    <a 
                      href={projects[currentSlide].links.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gradient-primary hover:text-white transition-colors"
                    >
                      <Globe size={16} />
                    </a>
                  )}
                  {projects[currentSlide].links.playStore && (
                    <a 
                      href={projects[currentSlide].links.playStore} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gradient-primary hover:text-white transition-colors"
                    >
                      <Store size={16} />
                    </a>
                  )}
                  {projects[currentSlide].links.appStore && (
                    <a 
                      href={projects[currentSlide].links.appStore} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gradient-primary hover:text-white transition-colors"
                    >
                      <Store size={16} />
                    </a>
                  )}
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{projects[currentSlide].description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {projects[currentSlide].techStack.map((tech, idx) => (
                  <Badge key={idx} variant="outline" className="bg-gray-100 dark:bg-gray-700">
                    {tech}
                  </Badge>
                ))}
              </div>
              
              {/* <a 
                href="#" 
                className="inline-flex items-center text-rearway-blue font-medium hover:underline"
              >
                View Case Study
                <ExternalLink size={16} className="ml-1" />
              </a> */}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide 
                    ? 'bg-gradient-primary' 
                    : 'bg-gray-300 dark:bg-gray-600'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
